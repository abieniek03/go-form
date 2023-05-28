import { defineStore } from 'pinia';

interface IState {
	bmi: number;
	kcal: number;
	planID: number;
}

export const useCounterStore = defineStore('main', {
	state: (): IState => ({
		bmi: 0,
		kcal: 0,
		planID: 0,
	}),
	getters: {},
	actions: {},
});
