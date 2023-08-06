import { useState } from 'react';

const DEFAULT_STATE = false;

export const useToggle = (initialState: boolean = DEFAULT_STATE) => {
	const [isOn, setIsOn] = useState(initialState);

	const toggle = () => {
		setIsOn(wasOnBefore => !wasOnBefore);
	};

	return { isOn, toggle };
};
