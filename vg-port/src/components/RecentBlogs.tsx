import React, { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  image: string;
  author: string;
}

const RecentBlogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const recentPosts: BlogPost[] = [
      {
        title: "React Hooks",
        image: "https://via.placeholder.com/150",
        author: "John Doe",
      },
      {
        title: "Node.js Tutorial",
        image: "https://via.placeholder.com/150",
        author: "Jane Doe",
      },
    ];

    setPosts(recentPosts);
  }, []);

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-12">
      <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Author
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.title}>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex w-10 h-10">
                    <img
                      className="w-full h-full rounded-full"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.title}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-gray-500">{post.author}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentBlogs;
