'use client';

import { useState } from 'react';

export default function CreateBookPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    authorName: '',
    authorEmail: '',
    coverImage: '',
    file: '',
    genre: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const payload = {
      title: formData.title,
      description: formData.description,
      author: {
        name: formData.authorName,
        email: formData.authorEmail,
      },
      coverImage: formData.coverImage,
      file: formData.file,
      genre: formData.genre,
    };

    try {
      const res = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create book');

      setSuccess(true);
      setFormData({
        title: '',
        description: '',
        authorName: '',
        authorEmail: '',
        coverImage: '',
        file: '',
        genre: '',
      });
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Create New Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block font-medium">Author Name</label>
          <input
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Author Email</label>
          <input
            name="authorEmail"
            type="email"
            value={formData.authorEmail}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Cover Image URL</label>
          <input
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">File URL</label>
          <input
            name="file"
            value={formData.file}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium">Genre</label>
          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">Book created successfully!</p>}
      </form>
    </div>
  );
}
