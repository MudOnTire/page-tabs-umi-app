import React, { useState, useEffect, useMemo } from 'react';
import { useRouteMatch } from 'react-router-dom';
import styles from './index.css';

interface Detail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default (props: any) => {
  const [detail, setDetail] = useState<Detail>();
  const match = useRouteMatch('/posts/:postId');
  console.log('match', match);

  const getDetail = () => {
    console.log('detail props', props);
    const postId = props.match.params.postId;
    if (!postId) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(json => {
        setDetail(json);
      });
  };

  useEffect(getDetail, []);

  return (
    <div className={styles.container}>
      Detail 2<h1 className={styles.title}>{detail?.title}</h1>
      <p>{detail?.body}</p>
    </div>
  );
};
