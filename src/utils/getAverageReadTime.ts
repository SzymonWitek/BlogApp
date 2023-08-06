const AVERAGE_WORDS_PER_MINUTE_SPEED = 250;

export const getAverageReadTime = (text: string) => {
	const fileWordsCount = text.split(' ').length;
	const avgReadTime = Math.floor(
		fileWordsCount / AVERAGE_WORDS_PER_MINUTE_SPEED,
	);

	return avgReadTime;
};
