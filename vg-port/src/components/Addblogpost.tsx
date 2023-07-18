import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addblog } from '../Redux/Features/ blogs/ addblog';

function BlogForm() {
  const dispatch = useDispatch();

  const [blogMainTitle, setBlogMainTitle] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [blogSummary, setBlogSummary] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [imagePreview, setImagePreview] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setBlogImage(e.target.value);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsLoading(true);

    dispatch(
      addblog({
        blogMainTitle,
        blogTitle,
        blogAuthor,
        blogImage,
        blogSummary,
        blogDescription,
        publishedDate
      })
    );

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Create New Blog Post</h2>
      
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Main Title"
          value={blogMainTitle}
          onChange={(e) => setBlogMainTitle(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm"
        />
      </div>

      <div className="mb-4">
        <input
          type="text" 
          placeholder="Title"
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm" 
        />
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Author"
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm"
        />
      </div>

      <div className="mb-4">
        <input
          type="file"
          onChange={handleImageChange}
          className="form-input w-full rounded-md border border-gray-200 p-3 text-sm"
        />
        
        {imagePreview && (
          <img 
            src={imagePreview} 
            alt="Blog cover image" 
            className="mt-4 w-48 object-cover rounded"
          />
        )}
      </div>

      <div className="mb-4">
        <textarea
          placeholder="Summary"
          value={blogSummary}
          onChange={(e) => setBlogSummary(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm"
        ></textarea>
      </div>

      <div className="mb-4">
        <textarea 
          placeholder="Content"
          value={blogDescription}
          onChange={(e) => setBlogDescription(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm"
        ></textarea>
      </div>

      <div className="mb-4">
        <input
          type="date"
          placeholder="Published Date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          className="w-full rounded-md border border-gray-200 p-3 text-sm" 
        />
      </div>

      <button 
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500"
      >
        {isLoading ? 'Adding...' : 'Add Blog'}
      </button>
    </form>
  );
}

export default BlogForm;