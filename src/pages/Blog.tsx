import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../components/Blog/Article/Article';

const Blog: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await axios.get('/Blog/article.md'); // Ruta relativa al directorio public
        setMarkdownContent(response.data);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <div className=' z-40 mt-16 md:px-6  px-4'>
      <Article />
    </div>
  );
};

export default Blog;

