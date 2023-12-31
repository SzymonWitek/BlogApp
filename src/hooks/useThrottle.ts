import { throttle } from 'lodash';
import { useCallback } from 'react';

import type { DebouncedFunc } from 'lodash';

type ThrottleFn = <T>(fn: () => T, delay: number) => DebouncedFunc<() => T>;

export const useThrottle: ThrottleFn = (fn, delay) => {
	const throttledFn = useCallback(throttle(fn, delay), []);

	return throttledFn;
};
