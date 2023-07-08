'use client';
import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { AppearAnimation, Input } from '../UI';
import { throttle } from 'lodash';

function SearchPost() {
  const [searchVal, setSearchVal] = useState('');
  const [isOpen, setOpen] = useState(false);

  useEffect(
    function resetValue() {
      if (isOpen) return;

      setSearchVal('');
    },
    [isOpen]
  );

  const toggleOpen = () => {
    setOpen((prevState) => !prevState);
  };
  const throttledOpen = useCallback(throttle(toggleOpen, 300), []);

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
