import React from 'react';
import { getPostsMetadata } from './utils/getPostsMetadata';
import { ArticleCard } from './ArticleCard';

function BlogPosts() {
  const postsMetadata = getPostsMetadata();

  return (
    <div className="flex flex-wrap justify-between pt-8">
      {postsMetadata.map((postMetadata, index) => (
        <ArticleCard
          data={postMetadata}
          isOdd={index % 2 === 0}
          key={postMetadata.title}
        />
      ))}
    </div>
  );
}

export default BlogPosts;
