'use client';

import { getPostsMetadata } from '@/features/BlogPosts/utils/getPostsMetadata';
import { Combobox } from '@headlessui/react';
import fuzzy from 'fuzzy';
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
		setSearchVal(event.target.value);
	};

	const filterMatchingPosts = () => {
		const OPTIONS = {
			pre: '<',
			post: '>',
			extract: (post: ReturnType<typeof getPostsMetadata>[number]) =>
				post.title + post.subtitle,
		};
		const matchingPosts = fuzzy.filter(searchVal, posts, OPTIONS);

		const originalMatchingPosts = matchingPosts.map(post => post.original);

		setResults(originalMatchingPosts);
	};

	const resetSearchVal = () => {
		setSearchVal('');
	};

	useEffect(filterMatchingPosts, [searchVal, posts]);

	return (
		<Combobox>
			<div className="relative w-max">
				<Combobox.Input
					onChange={handleChange}
					className={`bg-gray-500 px-5 py-2 rounded-3xl mr-5`}
					displayValue={() => searchVal}
				/>
				<Combobox.Options className="results absolute top-[130%] right-0 left-0 bg-gray-500  shadow-lg mr-5">
					{results?.map(result => (
						<Combobox.Option
							key={result.title}
							onClick={resetSearchVal}
							value={result.title}
							className="border-b-2 border-gray-400  last:border-0 hover:bg-gray-600  "
							as={Link}
							href={`/blog/${result.slug}`}>
							<div className=" py-2 w-[85%] mx-auto">
								<p className="text-lg text-textPrimary truncate w-full">
									{result.title}
								</p>
							</div>
						</Combobox.Option>
					))}
				</Combobox.Options>
			</div>
		</Combobox>
	);
}

export default SearchResults;
