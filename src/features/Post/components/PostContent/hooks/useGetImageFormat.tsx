import type { Components } from 'react-markdown';

export const useGetImageFormat = (): Components => {
	return {
		img: ({ node, children, ...props }) => {
			return (
				<div className="w-100 flex justify-center items-center flex-col py-2">
					<img {...node.properties}>{children}</img>
					{node?.properties?.alt && (
						<p className="py-0.5 italic text-base">{node.properties.alt}</p>
					)}
				</div>
			);
		},
	};
};
