import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

import { POSTS_SOURCE } from '@/common/constants';
import type { PostMetadata } from '@/common/interfaces';
import { formatDate } from '@/utils/formatDate';
import { getAverageReadTime } from '@/utils/getAverageReadTime';

interface PostDetails extends PostMetadata {
	avgReadMinutes: number;
}
type PostMetadataFn = () => PostDetails[];

export const getPostsMetadata: PostMetadataFn = () => {
	const files = readdirSync(POSTS_SOURCE);
	const markdownPosts = files.filter(file => file.endsWith('.md'));

	const removeFileExtension = (fileName: string) => {
		return fileName.replace('.md', '');
	};

	const postsMetadata = markdownPosts.map(fileName => {
		const filePath = `${POSTS_SOURCE}${fileName}`;
		const fileContent = readFileSync(filePath, 'utf8');
		const fileMatter = matter(fileContent);
		const {
			data: { title, date, subtitle, image },
			content,
		} = fileMatter;
		const avgReadMinutes = getAverageReadTime(content);

		return {
			title: title as string,
			date: formatDate(date),
			subtitle: subtitle as string,
			slug: removeFileExtension(fileName),
			image: image as string,
			avgReadMinutes,
		};
	});

	return postsMetadata;
};
