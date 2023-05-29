import { defineStore } from 'pinia';

interface IState {
	validation: undefined | boolean;
	bmi: number;
	kcal: number;
	planID: number;
}

export const useCounterStore = defineStore('main', {
	state: (): IState => ({
		validation: undefined,
		bmi: 0,
		kcal: 0,
		planID: 0,
	}),
	getters: {},
	actions: {},
});
