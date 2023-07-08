'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { AppearAnimation, Input } from '../UI';

function SearchPost() {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="flex justify-center ">
      <AnimatePresence>
        {isOpen && (
          <AppearAnimation>
            <Input type="text" className="mr-6" placeholder="Search..." />
          </AppearAnimation>
        )}
      </AnimatePresence>
      <button onClick={toggleOpen}>
        <FaMagnifyingGlass className="h-5 w-5 text-gray-400 hover:text-textPrimary transition-all" />
      </button>
    </div>
  );
}

export default SearchPost;
