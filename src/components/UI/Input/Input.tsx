import type {
	ChangeEvent,
	Dispatch,
	InputHTMLAttributes,
	SetStateAction,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	label?: string;
	className?: string;
}

function Input({ value, setValue, className, ...restProps }: InputProps) {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<input
			value={value}
			onChange={handleChange}
			className={`bg-gray-500 px-5 py-2 rounded-3xl  border-2 border-gray-600 ${className}`}
			{...restProps}
		/>
	);
}

export default Input;
