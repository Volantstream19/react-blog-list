import React, { useEffect, useState } from 'react';
import { getBlogs } from '../services/blog.js';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlog() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchBlog();
  }, []);

  return blogs;
}
