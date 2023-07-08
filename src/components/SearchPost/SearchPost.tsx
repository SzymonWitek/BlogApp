'use client';
import { AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { AppearAnimation, Input } from '../UI';
import { debounce, stubTrue, throttle } from 'lodash';

function SearchPost() {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  const throttledOpen = useCallback(throttle(toggleOpen, 300), []);

  return (
    <div className="flex justify-center ">
      <AnimatePresence>
        {isOpen && (
          <AppearAnimation>
            <Input type="text" className="mr-6" placeholder="Search..." />
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
