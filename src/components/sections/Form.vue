<script setup lang="ts">
import { ref } from 'vue';

import { useCounterStore } from '../../store/createCounter';

import Content from '../layouts/Content.vue';
import FormInput from '../formFields/FormInput.vue';
import FormSelect from '../formFields/FormSelect.vue';
import Button from '../elements/Button.vue';
import ErrorAlert from '../elements/ErrorAlert.vue';

import axios from '../../axiosInstance';
import router from '../../router';

import formValidation from '../../utils/formValidation';

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

const globalState = useCounterStore();

const calcParameters = (e: Event) => {
	e.preventDefault();
	formValidation(formData.value);

	if (globalState.validation) {
		axios
			.post('/calc-parameters', formData.value)
			.then((res) => {
				globalState.bmi = res.data.bmi;
				globalState.kcal = res.data.kcal;
				globalState.planID = res.data.planID;
				router.push('/rezultat');
			})
			.catch((error) => console.error(error));
	}
};
</script>

<template>
	<Content>
		<div id="form" class="py-4">
			<h2 class="mb-4 font-bold text-center text-2xl md:text-3xl lg:text-4xl">
				Wypełnij ankietę i <span class="text-primary">zdobądź</span> wskazówki
			</h2>
			<p class="text-center">
				Po wypełnieniu ankiety otrzymasz wskazówki dietetyczne i&nbsp;przykładowy plan treningowy na Twój adres mailowy.
			</p>
			<form class="max-w-md mx-auto my-10 px-4 lg:my-16 lg:px-0">
				<FormSelect label="Płeć" :options="['Kobieta', 'Mężczyzna']" v-model="formData.sex" />
				<FormInput type="number" label="Wiek" id="age" v-model="formData.age" minValue="10" maxValue="99" />
				<FormInput type="number" label="Wzrost" id="height" v-model="formData.height" min-value="110" maxValue="220" />
				<FormInput type="number" label="Waga" id="weight" v-model="formData.weight" minValue="30" maxValue="250" />
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
				<ErrorAlert v-if="globalState.validation === false" info="Dane są nie poprawne." />
				<Button @click="calcParameters" label="Wyślij" class="w-full mt-2" />
			</form>
		</div>
	</Content>
</template>

<style scoped></style>
