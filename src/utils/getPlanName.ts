const getPlanName = (planID: number) => {
	let planName: string;
	switch (planID) {
		case 2:
			planName = 'Upper/Lower';
			break;
		case 3:
			planName = 'Upper/Lower/Push/Pull/Legs';
			break;
		case 10:
			planName = 'Plan dla kobiet';
			break;
		default:
			planName = 'FBW';
	}

	return planName;
};

export default getPlanName;
