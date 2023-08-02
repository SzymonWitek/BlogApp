import React from 'react';
import { Post } from '@/features/Post';

function BlogPost({ ...props }) {
  const postTitle = props.params.slug;
  return <Post title={postTitle}></Post>;
}

export default BlogPost;