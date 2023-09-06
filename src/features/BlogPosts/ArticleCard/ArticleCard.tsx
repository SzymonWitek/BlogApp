'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArticleDetails } from '../ArticleDetails';
import { getPostsMetadata } from '../utils/getPostsMetadata';

interface ArticleCardProps {
	data: ReturnType<typeof getPostsMetadata>[number];
	isOdd: boolean;
}

function ArticleCard({ data, isOdd }: ArticleCardProps) {
	const [isHovered, setHovered] = useState(false);
	const outlineColor = isOdd ? 'outline-blue-500' : 'outline-yellow';

	return (
		<Link href={`/blog/${data.slug}`} className="mx-auto lg:mx-0">
			<div
				className={`w-[min(90vw,425px)] rounded-md borderTest 2xl:w-[360px] mb-12 pb-2 lg:mx-2 cursor-pointer h-full`}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => {
					setHovered(false);
				}}>
				<div
					className={`rounded-md overflow-hidden ${
						isHovered
							? `outline outline-offset-2 outline-2 ${outlineColor}`
							: ''
					}`}>
					<Image
						src={`/images/${data.image}`}
						alt={data.title}
						width={400}
						height={400}
						className="w-full h-[250px]"
					/>
				</div>
				<ArticleDetails
					date={data.date}
					avgReadTime={data.avgReadMinutes}
					title={data.title}
				/>
			</div>
		</Link>
	);
}

export default ArticleCard;
