import type { ToastOptions } from 'react-toastify';
import { toast as showToast } from 'react-toastify';

const DEFAULT_OPTIONS = {
	position: 'bottom-right',
	autoClose: 5000,
	closeOnClick: true,
	closeButton: false,
	theme: 'dark',
} as ToastOptions;

export const toast = (text: string, options?: ToastOptions) => {
	showToast(text, { ...DEFAULT_OPTIONS, ...options });
};

export const toastSuccess = (
	text: string,
	options?: Omit<ToastOptions, 'type'>,
) => {
	showToast(text, { ...DEFAULT_OPTIONS, ...options, type: 'success' });
};
