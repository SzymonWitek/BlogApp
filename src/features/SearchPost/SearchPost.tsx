'use client';
// import { useToggle } from '@/hooks/useToggle';
// import { useEffect } from 'react';
import { AppearAnimation } from '@/components/UI';
import { useThrottle } from '@/hooks/useThrottle';
import { useToggle } from '@/hooks/useToggle';
import { AnimatePresence } from 'framer-motion';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { getPostsMetadata } from '../BlogPosts/utils/getPostsMetadata';
import { SearchResults } from './components/SearchResults';

interface SearchPostProps {
	posts: ReturnType<typeof getPostsMetadata>;
}

export function SearchPost({ posts }: SearchPostProps) {
	const { isOn: isOpen, toggle: toggleOpen } = useToggle();

	// useEffect(
	// 	function resetValue() {
	// 		if (isOpen) return;

	// 	},
	// 	[isOpen],
	// );

	const throttledOpen = useThrottle<void>(toggleOpen, 300);

	return (
		<div className="flex justify-center ">
			<AnimatePresence>
				{isOpen && (
					<AppearAnimation>
						<SearchResults posts={posts} />
					</AppearAnimation>
				)}
			</AnimatePresence>
			<button onClick={throttledOpen}>
				<FaMagnifyingGlass className="h-5 w-5 text-gray-400 hover:text-textPrimary transition-all" />
			</button>
		</div>
	);
}

export default SearchPost;
