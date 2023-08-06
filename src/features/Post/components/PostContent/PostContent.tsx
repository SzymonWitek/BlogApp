'use client';

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';

import { useGetCodeFormat } from './hooks/useGetCodeFormat';
import { useGetTableFormat } from './hooks/useGetTableFormat';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import lua from 'react-syntax-highlighter/dist/cjs/languages/prism/lua';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import { useGetTextFormat } from './hooks/useGetTextFormat';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';
import { useGetImageFormat } from './hooks/useGetImageFormat';

const SUPPORTED_LANGUAGES = [
  { name: 'js', link: js },
  { name: 'css', link: css },
  { name: 'lua', link: lua },
  { name: 'tsx', link: tsx },
  { name: 'python', link: python }
];

const registerLanguages = () => {
  SUPPORTED_LANGUAGES.forEach(({ name, link }) =>
    SyntaxHighlighter.registerLanguage(name, link)
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
    ...useGetImageFormat()
  };

  return (
    <div className="w-[1200px] py-2">
      <ReactMarkdown
        components={componentsFormat}
        remarkPlugins={[remarkGfm, remarkUnwrapImages]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default PostContent;
