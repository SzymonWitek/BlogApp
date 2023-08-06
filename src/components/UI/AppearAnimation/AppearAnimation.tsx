'use client';
import { motion } from 'framer-motion';

import type { MotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface AppearAnimationProps extends MotionProps {
	children: ReactNode;
}

function AppearAnimation({ children, ...restProps }: AppearAnimationProps) {
	return (
		<motion.div
			className="relative"
			transition={{ type: 'spring', duration: 0.5 }}
			initial={{ opacity: 0, right: '20px' }}
			animate={{ opacity: 1, right: '0px' }}
			exit={{ opacity: 0, right: '20px' }}
			{...restProps}
		>
			{children}
		</motion.div>
	);
}

export default AppearAnimation;
