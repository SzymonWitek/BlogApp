'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import type { PostMetadata } from '@/common/interfaces';
import { ArticleDetails } from '../ArticleDetails';
import Link from 'next/link';

interface ArticleCardProps {
  data: PostMetadata;
  isOdd: boolean;
}

function ArticleCard({ data, isOdd }: ArticleCardProps) {
  const [isHovered, setHovered] = useState(false);
  const outlineColor = isOdd ? 'outline-blue-500' : 'outline-yellow';

  return (
    <Link href={`/blog/${data.slug}`}>
      <div
        className={`rounded-md borderTest w-[370px] mb-12 pb-2 cursor-pointer h-full`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div
          className={`rounded-md overflow-hidden ${
            isHovered
              ? `outline outline-offset-2 outline-2 ${outlineColor}`
              : ''
          }`}
        >
          <Image
            src={`/images/${data.image}`}
            alt={data.title}
            width={400}
            height={400}
            className="w-full h-[250px]"
          />
        </div>
        <ArticleDetails
          date={data.date}
          avgReadTime={data.avgReadMinutes}
          title={data.title}
        />
      </div>
    </Link>
  );
}

export default ArticleCard;