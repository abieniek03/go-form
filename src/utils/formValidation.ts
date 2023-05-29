import { IFormData } from '../components/sections/Form.vue';

import { useCounterStore } from '../store/createCounter';

const formValidation = (formData: IFormData) => {
	const globalState = useCounterStore();
	if (
		formData.sex === -1 ||
		formData.age === '' ||
		formData.height === '' ||
		formData.weight === '' ||
		formData.activityLevel === -1 ||
		formData.goal === -1 ||
		formData.trening === -1
	) {
		globalState.validation = false;
	} else {
		globalState.validation = true;
	}
};

export default formValidation;
