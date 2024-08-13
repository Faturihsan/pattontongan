import React from 'react';
import { useParams } from 'react-router-dom';
import NewsDetail from '../components/NewsDetail';
import { newsData } from '../constants';

const NewsDetailPage = () => {
  const { id } = useParams();
  const newsItem = newsData.find(item => item.id === id);

  return newsItem ? (
    <NewsDetail
      image={newsItem.image}
      title={newsItem.title}
      content={newsItem.content}
    />
  ) : (
    <p>News not found</p>
  );
};

export default NewsDetailPage;
