import { format } from 'date-fns';

const DEFAULT_FORMAT_DATE = 'MMMM-do-yyyy';

export function formatDate(
	date: Date | string,
	dateFormat: string = DEFAULT_FORMAT_DATE,
) {
	if (typeof date === 'string') {
		const formattedDate = format(new Date(date), dateFormat);

		return formattedDate;
	}

	const formattedDate = format(date, dateFormat);

	return formattedDate;
}
