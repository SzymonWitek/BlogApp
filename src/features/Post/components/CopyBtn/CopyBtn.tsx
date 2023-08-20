import { toastSuccess } from '@/utils/toast';

interface CopyBtnProps {
	textToCopy: string;
}

function CopyBtn({ textToCopy }: CopyBtnProps) {
	const handleClick = () => {
		navigator.clipboard.writeText(textToCopy);

		toastSuccess('Code copied to a clipboard!');
	};

	return (
		<>
			<button
				className="absolute top-1 right-1 text-sm bg-slate-500 d-flex items-center py-1.5 px-3 tracking-wide rounded-sm text-textPrimary "
				onClick={handleClick}>
				Copy code
			</button>
		</>
	);
}

export default CopyBtn;
