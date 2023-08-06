import type { Components } from 'react-markdown';
import type { Options } from 'remark-gfm';

export const useGetTableFormat = (): Components & Options => {
	return {
		li: ({ node, children, ...props }) => {
			return <li className="ml-[2vw] list-disc py-1 italic">{children}</li>;
		},
		td: ({ node, children, ...props }) => {
			return <td className="border py-1 text-center">{children}</td>;
		},
		th: ({ node, children, ...props }) => {
			return <th className="py-1">{children}</th>;
		},
		tr: ({ node, children, ...props }) => {
			return <tr>{children}</tr>;
		},
		table: ({ node, children, ...props }) => {
			return (
				<div className="mx-auto mb-5 mt-1 w-[900px]  overflow-auto">
					<table className="w-[100%] border">{children}</table>
				</div>
			);
		},
	};
};
