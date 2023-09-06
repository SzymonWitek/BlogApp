'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import lua from 'react-syntax-highlighter/dist/cjs/languages/prism/lua';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import { useGetCodeFormat } from './hooks/useGetCodeFormat';
import { useGetImageFormat } from './hooks/useGetImageFormat';
import { useGetTableFormat } from './hooks/useGetTableFormat';
import { useGetTextFormat } from './hooks/useGetTextFormat';

const SUPPORTED_LANGUAGES = [
	{ name: 'js', link: js },
	{ name: 'css', link: css },
	{ name: 'lua', link: lua },
	{ name: 'tsx', link: tsx },
	{ name: 'python', link: python },
];

const registerLanguages = () => {
	SUPPORTED_LANGUAGES.forEach(({ name, link }) =>
		SyntaxHighlighter.registerLanguage(name, link),
	);
};

registerLanguages();

interface PostContentProps {
	content: string;
}

function PostContent({ content }: PostContentProps) {
	const componentsFormat = {
		...useGetCodeFormat(),
		...useGetTextFormat(),
		...useGetTableFormat(),
		...useGetImageFormat(),
	};

	return (
		<div className="w-full py-2">
			<ReactMarkdown
				components={componentsFormat}
				remarkPlugins={[remarkGfm, remarkUnwrapImages]}>
				{content}
			</ReactMarkdown>
		</div>
	);
}

export default PostContent;
