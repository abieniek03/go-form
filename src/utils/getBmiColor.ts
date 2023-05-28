const getBmiColor = (bmiValue: number) => {
	let bmiColor: string;

	switch (true) {
		case bmiValue < 18.5:
			bmiColor = 'text-orange-500';
			break;
		case bmiValue < 25:
			bmiColor = 'text-green-500';
			break;
		case bmiValue < 30:
			bmiColor = 'text-amber-400';
			break;
		default:
			bmiColor = 'text-red-600';
			break;
	}

	return bmiColor;
};

export default getBmiColor;
