import React, { useState, useEffect } from 'react';
import { Link } from 'umi';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setPosts(json);
      });
  };

  useEffect(getPosts, []);

  return (
    <ul>
      <h1 style={{ fontSize: 30 }}>Posts from Jsonplaceholder</h1>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>Created by user {post.userId}</p>
            <Link to={`/posts/detail?id=${post.id}`}>Detail</Link>
            <br />
            <Link to={`/posts/${post.id}`}>Detail2</Link>
          </li>
        );
      })}
    </ul>
  );
};
