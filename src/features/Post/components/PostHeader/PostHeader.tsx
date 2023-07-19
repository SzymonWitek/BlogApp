import { PostMetadata } from '@/common/interfaces';
import { getAverageReadTime } from '@/utils/getAverageReadTime';
import React from 'react';

interface PostHeaderProps {
  data: PostMetadata;
  content: string;
}

function PostHeader({ data: { title, date }, content }: PostHeaderProps) {
  const avgReadTime = getAverageReadTime(content);
  return (
    <div className="flex flex-col  items-center">
      <div>
        <h2 className="text-2xl font-medium md:text-4xl tracking-wider">
          {title}
        </h2>
        <p className="py-2 text-lg font-medium text-slate-500">
          {date} - {avgReadTime} min read
        </p>
      </div>
    </div>
  );
}

export default PostHeader;
