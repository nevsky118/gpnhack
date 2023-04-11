export const getDate = (timestamp: number) => {
	const date = new Date(timestamp);
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	// @ts-ignore
	return new Intl.DateTimeFormat('ru-RU', options).format(date);
};
