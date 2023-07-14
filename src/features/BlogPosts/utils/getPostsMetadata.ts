import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

import type { PostMetadata } from '@/common/interfaces';
import { POSTS_SOURCE } from '@/common/constants';
import { formatDate } from '@/utils/formatDate';

type PostMetadataFn = () => PostMetadata[];

export const getPostsMetadata: PostMetadataFn = () => {
  const files = readdirSync(POSTS_SOURCE);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const removeFileExtension = (fileName: string) => {
    return fileName.replace('.md', '');
  };

  const postsMetadata = markdownPosts.map((fileName) => {
    const filePath = `${POSTS_SOURCE}${fileName}`;
    const fileContent = readFileSync(filePath, 'utf8');
    const fileMatter = matter(fileContent);
    const {
      data: { title, date, subtitle, image }
    } = fileMatter;

    return {
      title: title as string,
      date: formatDate(date),
      subtitle: subtitle as string,
      slug: removeFileExtension(fileName),
      image: image as string
    };
  });

  return postsMetadata;
};
