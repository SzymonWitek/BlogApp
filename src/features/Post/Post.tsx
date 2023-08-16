import { POSTS_SOURCE } from '@/common/constants';
import type { PostMetadata } from '@/common/interfaces';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader';

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
		<div className="px-[10vw] flex flex-col items-center w-[1300] pt-4">
			<PostHeader data={data} content={content} />
			<div>
				<Image
					src={`/images/${data.image}`}
					width={1280}
					height={1280}
					alt=""
					className="w-full h-[750px] pt-5 rounded-3xl"
				/>
			</div>
			<PostContent content={content} />
		</div>
	);
}

export default Post;
