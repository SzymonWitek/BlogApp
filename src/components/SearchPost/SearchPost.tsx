'use client';
import { useThrottle } from '@/hooks/useThrottle';
import { useToggle } from '@/hooks/useToggle';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { AppearAnimation, Input } from '../UI';

function SearchPost() {
	const [searchVal, setSearchVal] = useState('');
	const { isOn: isOpen, toggle: toggleOpen } = useToggle();
	useEffect(
		function resetValue() {
			if (isOpen) return;

			setSearchVal('');
		},
		[isOpen],
	);

	const throttledOpen = useThrottle<void>(toggleOpen, 300);

	return (
		<div className="flex justify-center ">
			<AnimatePresence>
				{isOpen && (
					<AppearAnimation>
						<Input
							value={searchVal}
							setValue={setSearchVal}
							type="text"
							className="mr-6"
							placeholder="Search..."
						/>
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
