import React from 'react';
import Image from 'next/image';

import type { PostMetadata } from '@/common/interfaces';

interface ArticleCardProps {
  data: PostMetadata;
}

function ArticleCard({ data }: ArticleCardProps) {
  return (
    <div className="relative rounded-md w-[30vw] borderTest ">
      {/* <div
        className="w-full h-full"
        // style={{ maxWidth: '40px', maxHeight: '40px' }}
      > */}
      <Image
        src={`/images/${data.image}`}
        alt={data.title}
        // fill
        width={500}
        height={500}
        className="rounded-t-md w-full"
      />
      {data.title} {data.subtitle} {data.slug}
    </div>
    // </div>
  );
}

export default ArticleCard;
