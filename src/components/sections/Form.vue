<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useCounterStore } from '../../store/createCounter';

import Content from '../layouts/Content.vue';
import FormInput from '../formFields/FormInput.vue';
import FormSelect from '../formFields/FormSelect.vue';
import Button from '../Button.vue';

import axios from '../../axiosInstance';
import router from '../../router';

export interface IFormData {
	sex: number;
	age: string;
	height: string;
	weight: string;
	activityLevel: number;
	goal: number;
	trening: number;
}

const formData = ref<IFormData>({
	sex: -1,
	age: '',
	height: '',
	weight: '',
	activityLevel: -1,
	goal: -1,
	trening: -1,
});

const calcParameters = (e: Event) => {
	e.preventDefault();

	axios
		.post('/calc-parameters', formData.value)
		.then((res) => {
			const globalState = useCounterStore();
			console.log(res);
			globalState.$state = {
				bmi: res.data.bmi,
				kcal: res.data.kcal,
				planID: res.data.planID,
			};

			router.push('/rezultat');
		})
		.catch((error) => console.error(error));
};

watchEffect(() => {
	console.log(formData.value);
});
</script>

<template>
	<Content>
		<div id="form" class="py-4">
			<h2 class="mb-4 font-bold text-center text-2xl md:text-3xl lg:text-4xl">
				Wypełnij ankietę i <span class="text-primary">zdobądź</span> wskazówki
			</h2>
			<p class="lg:text-center">
				Po wypełnieniu ankiety otrzymasz wskazówki dietetyczne i przykładowy plan treningowy na Twój adres mailowy.
			</p>
			<form class="max-w-md mx-auto my-10 lg:my-16">
				<FormSelect label="Płeć" :options="['Kobieta', 'Mężczyzna']" v-model="formData.sex" />
				<FormInput type="number" label="Wiek" id="age" v-model="formData.age" />
				<FormInput type="number" label="Wzrost" id="height" v-model="formData.height" />
				<FormInput type="number" label="Waga" id="weight" v-model="formData.weight" />
				<FormSelect
					label="Wybierz poziom Twojej aktywności"
					:options="[
						'Brak aktywności (siedzący, brak treningów)',
						'Nieaktywny (siedzący, spacery, brak treningów)',
						'Lekko aktywny (siedzący, spacery lub 1-2 treningi w tygodniu)',
						'Umiarkowanie aktywny (siedzący, spacery, 3-4 treningi w tygodniu)',
						'Bardzo aktywny (fizyczna praca,  więcej niż 4 treningi w tygodniu)',
					]"
					v-model="formData.activityLevel"
				/>
				<FormSelect
					label="Cel treningowy"
					:options="['Chcę schudnąć', 'Chcę utrzymać wagę', 'Chcę nabrać masy mięśniowej']"
					v-model="formData.goal"
				/>
				<FormSelect
					label="Ile chcesz razy trenować w ciągu tygodnia?"
					:options="['2 razy', '3 razy', '4 razy', '5 razy']"
					v-model="formData.trening"
				/>

				<Button label="Wyślij" class="w-full mt-2" @click="calcParameters" />
			</form>
		</div>
	</Content>
</template>

<style scoped></style>
