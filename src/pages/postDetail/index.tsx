import React, { useState, useEffect } from 'react';
import styles from './index.css';

interface Detail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

console.log('in detail');

export default (props: any) => {
  const [detail, setDetail] = useState<Detail>();
  const { location, match } = props;
  console.log('props === ', props);
  const getDetail = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
      .then(response => response.json())
      .then(json => {
        setDetail(json);
      });
  };

  useEffect(getDetail, [match]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{detail?.title}</h1>
      <p>{detail?.body}</p>
    </div>
  );
};
