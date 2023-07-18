import { useEffect, useState } from 'react';
import { getBlogs } from '../Redux/allapi';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    const fetchBlogs = async () => {
      setStatus('loading');
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
      setStatus('succeeded');
    };
    
    fetchBlogs();
  }, []);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    // same rendering as before 
  );
}