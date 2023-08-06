import { useMemo } from 'react';

interface ArticleDetailsProps {
	avgReadTime: number;
	title: string;
	date: string;
}

function ArticleDetails({ date, avgReadTime, title }: ArticleDetailsProps) {
	const { year, month, day } = useMemo(
		function splitDate() {
			const [month, day, year] = date.split('-');

			return { month, day, year };
		},
		[date],
	);

	return (
		<div>
			<p className="pt-4 pb-2 text-xl font-medium text-slate-500">{`${month} ${day}, ${year} - ${avgReadTime} min read`}</p>
			<h4 className="text-xl font-medium md:text-3xl text-white">{title}</h4>
		</div>
	);
}

export default ArticleDetails;
