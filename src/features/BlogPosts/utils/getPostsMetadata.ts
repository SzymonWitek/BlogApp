import { readFileSync, readdirSync } from 'fs';
import matter from 'gray-matter';

import type { PostMetadata } from '@/common/interfaces';
import { POSTS_SOURCE } from '@/common/constants';
import { formatDate } from '@/utils/formatDate';

type PostMetadataFn = () => PostMetadata[];

const AVERAGE_WORDS_PER_MINUTE_SPEED = 250;

export const getPostsMetadata: PostMetadataFn = () => {
  const files = readdirSync(POSTS_SOURCE);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const removeFileExtension = (fileName: string) => {
    return fileName.replace('.md', '');
  };

  const getFileWordsCount = (fileContent: string) => {
    return fileContent.split(' ').length;
  };

  const getAverageReadTime = (textWords: number) => {
    return Math.floor(textWords / AVERAGE_WORDS_PER_MINUTE_SPEED);
  };

  const postsMetadata = markdownPosts.map((fileName) => {
    const filePath = `${POSTS_SOURCE}${fileName}`;
    const fileContent = readFileSync(filePath, 'utf8');
    const fileMatter = matter(fileContent);
    const {
      data: { title, date, subtitle, image }
    } = fileMatter;
    const fileWords = getFileWordsCount(fileContent);
    const avgReadMinutes = getAverageReadTime(fileWords);

    return {
      title: title as string,
      date: formatDate(date),
      subtitle: subtitle as string,
      slug: removeFileExtension(fileName),
      image: image as string,
      avgReadMinutes
    };
  });

  return postsMetadata;
};
