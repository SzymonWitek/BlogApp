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
		<div className="px-[8vw] md:px-[10vw] lg:px-[15vw] flex flex-col items-center w-full pt-4">
			<PostHeader data={data} content={content} />
			<div className="w-full">
				<Image
					src={`/images/${data.image}`}
					width={1280}
					height={1280}
					alt={data.title}
					className="w-full h-[min(80vh,750px)] mt-5 rounded-xl lg:rounded-[2rem]"
				/>
			</div>
			<PostContent content={content} />
		</div>
	);
}

export default Post;
