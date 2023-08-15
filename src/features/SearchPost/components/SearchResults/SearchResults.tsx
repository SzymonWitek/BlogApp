'use client';

import { getPostsMetadata } from '@/features/BlogPosts/utils/getPostsMetadata';
import { Combobox } from '@headlessui/react';
import Link from 'next/link';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

interface SearchPostProps {
	posts: ReturnType<typeof getPostsMetadata>;
}

function SearchResults({ posts }: SearchPostProps) {
	const [searchVal, setSearchVal] = useState('');
	const [results, setResults] = useState<null | ReturnType<
		typeof getPostsMetadata
	>>(null);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
		setSearchVal(event.target.value);
	};

	const filterMatchingPosts = () => {
		const matchingPosts = posts.filter(
			post =>
				post.title?.includes(searchVal) || post.subtitle?.includes(searchVal),
		);
		console.log(matchingPosts);
		setResults(matchingPosts);
	};

	useEffect(filterMatchingPosts, [searchVal]);

	return (
		<Combobox>
			<div className="relative w-max">
				<Combobox.Input
					onChange={handleChange}
					className={`bg-gray-500 px-5 py-2 rounded-3xl  border-2 border-gray-600 `}
				/>
				<Combobox.Options className="absolute bottom-[-130%] right-0 left-0 bg-textPrimary">
					<Combobox.Option value="1">
						<div>testowa wartosc</div>
					</Combobox.Option>
					<Combobox.Option value="2">
						<Link href="/blog/qr-code-micro-app">
							<div>testowa wartosc2</div>
						</Link>
					</Combobox.Option>
					{results?.map(result => (
						<Link href={`blog/${result.slug}`}>
							<div>
								{/* <Image
									height={50}
									width={50}
									alt={result.title}
									src={result.image}
									props={}
								/> */}
								{result.title}
							</div>
						</Link>
					))}
				</Combobox.Options>
			</div>
		</Combobox>
	);
}

export default SearchResults;
