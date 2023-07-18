import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBlogs} from '../Redux/Features/ blogs/fethcallblogs'; // Correct the import path
interface Blog {
  blogMainTitle: string;
  blogTitle: string;
  blogAuthor: string;
  blogImage: string;
  blogSummary: string;
  blogDescription: string;
  publishedDate: Date;
}
const RecentBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector(state => state.blogs.blogs);
  const status = useSelector(state => state.blogs.status);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (!Array.isArray(blogs) || blogs.length === 0) {
    return <div>No blogs found</div>;
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-12">
      <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Author
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200">
          {blogs.map(Blog => ( // Correct the variable name here to "blog"
            <tr key={Blog.id}> {/* Assuming that the blog objects have an "id" property */}
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex w-10 h-10">
                    <img 
                      src={Blog.blogImage}
                      alt={Blog.blogTitle} 
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {Blog.blogAuthor}
                    </p>
                  </div>
                </div>
              </td>
              
              <td className="px-6 py-4">
                <p className="text-sm text-gray-500">
                  {Blog.blogAuthor}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentBlogs;
