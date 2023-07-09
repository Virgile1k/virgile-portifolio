// import React from 'react';
// import { Badge } from '../components/Badge';

// interface BlogPost {
//   id: number;
//   title: string; 
//   content: string;
//   image: string;
//   tags: string[]; 
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: 'My First Blog Post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis velit sit amet felis mattis, a scelerisque purus cursus. Fusce at nunc nisl. Praesent ac interdum elit.',
//     image: '../assets/ html.png', 
//     tags: ['javascript', 'beginners']
//   },
//   {
//     id: 2,
//     title: '10 Tips for React Developers',
//     content: 'Maecenas fermentum rutrum quam, sed vehicula ipsum porta sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus euismod a augue at cursus.',
//     image: '/assets/post2.jpg',
//     tags: ['react', 'tips']
//   }
// ];

// const BlogsPage = () => {

//   return (
//     <div className="container mx-auto px-5">
//       <h1 className="text-3xl font-bold mb-8">Blogs</h1>
//       {blogPosts.map(post => (
//         <div key={post.id} className="mb-10">
//           <img src={post.image} className="w-full max-h-64 object-cover mb-5" />
//           <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//           <p className="text-gray-700 mb-5">{post.content}</p>
//           <div className="flex flex-wrap gap-2">
//             {post.tags.map(tag => (
//               <Badge text={tag} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default BlogsPage;