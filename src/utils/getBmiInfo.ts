const getBmiInfo = (bmiValue: number) => {
	let bmiInfo: string;

	switch (true) {
		case bmiValue < 16:
			bmiInfo = 'wygłodzenie';
			break;
		case bmiValue < 18.5:
			bmiInfo = 'wychudzenie';
			break;
		case bmiValue < 25:
			bmiInfo = 'wagę prawidłową';
			break;
		case bmiValue < 30:
			bmiInfo = 'nadwagę';
			break;
		case bmiValue < 35:
			bmiInfo = 'I stopień otyłości';
			break;
		case bmiValue < 40:
			bmiInfo = 'II stopień otyłości';
			break;
		default:
			bmiInfo = 'Otyłość skrajną';
			break;
	}

	return bmiInfo;
};

export default getBmiInfo;
