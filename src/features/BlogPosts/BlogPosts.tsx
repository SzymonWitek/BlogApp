import React from 'react';
import { getPostsMetadata } from './utils/getPostsMetadata';
import { ArticleCard } from './ArticleCard';

function BlogPosts() {
  const postsMetadata = getPostsMetadata();

  return (
    <div>
      {postsMetadata.map((postMetadata) => (
        <ArticleCard data={postMetadata} />
      ))}
    </div>
  );
}

export default BlogPosts;
