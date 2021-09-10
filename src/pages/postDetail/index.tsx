import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './index.css';

interface Detail {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default (props: any) => {
  const [detail, setDetail] = useState<Detail>();
  const location = useLocation();

  const id = useMemo(() => {
    return location.query.id;
  }, [location.query.id]);

  const getDetail = () => {
    if (!id) return;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => {
        setDetail(json);
      });
  };

  useEffect(getDetail, [id]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{detail?.title}</h1>
      <p>{detail?.body}</p>
    </div>
  );
};
