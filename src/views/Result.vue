<script setup lang="ts">
import { onMounted } from 'vue';

import Button from '../components/Button.vue';

import { useCounterStore } from '../store/createCounter';
import getPlanName from '../utils/getPlanName';
import getBmiInfo from '../utils/getBmiInfo';
import getBmiColor from '../utils/getBmiColor';

import router from '../router';

const globalState = useCounterStore();
const { bmi, kcal, planID } = globalState;

const navigateToHome = () => {
	router.push('/');
};

const getPlan = () => {
	window.location.href = `http://127.0.0.1:3500/api/download-plan/${planID}.pdf`;
};

onMounted(() => {
	(bmi === 0 || kcal === 0) && navigateToHome();
});
</script>

<template>
	<main class="bg-background">
		<div class="h-screen max-h-screen flex flex-col justify-center items-center text-content text-center p-16">
			<h1 class="text-primary text-5xl font-bold mb-4">Rezultat</h1>
			<p class="mb-4">
				Twoje BMI wynosi <span class="font-bold text-xl mx-1" :class="getBmiColor(bmi)">{{ bmi }}</span> oznacza to
				<span class="font-bold text-xl mx-1" :class="getBmiColor(bmi)">{{ getBmiInfo(bmi) }}</span>
			</p>
			<p class="mb-4">
				Żeby osiągnąć swój cel powinieneś spożywać <span class="font-bold text-xl mx-1">{{ kcal }} kcal</span> dziennie
			</p>
			<p class="mb-4">
				Zalecany dla Ciebie plan treningowy to
				<span class="font-bold text-xl ms-1">{{ getPlanName(planID) }}</span>
			</p>
			<Button ref="downloadLink" @click="getPlan" label="Pobierz plan" styles="mt-4" />
		</div>
	</main>
</template>
