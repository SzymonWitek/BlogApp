import { POSTS_SOURCE } from '@/common/constants';
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { PostHeader } from './components/PostHeader';
import type { PostMetadata } from '@/common/interfaces';
import Image from 'next/image';

interface PostProps {
  title: string;
}

const getPostDetails = (title: string) => {
  const FILE_EXTENSION = '.md';
  const filePath = `${POSTS_SOURCE}${title}${FILE_EXTENSION}`;
  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);

  return { data: data as PostMetadata, content };
};

function Post({ title }: PostProps) {
  const { data, content } = getPostDetails(title);

  return (
    <div className="px-[10vw] flex flex-col items-center">
      <PostHeader data={data} content={content} />
      <div>
        <Image
          src={`/images/${data.image}`}
          width={1280}
          height={1280}
          alt=""
          className="w-full h-[750px] pt-4 rounded-3xl"
        />
      </div>
      <article className="max-w-7xl mx-auto pt-[10vh]">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}

export default Post;