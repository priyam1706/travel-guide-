import React from 'react';
import { Link } from 'react-router-dom';

const BudgetFriendlyBlogPage = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Budget-Friendly Travel',
      description: 'Learn how to travel on a budget with these helpful tips.',
      imageUrl: 'https://imgs.search.brave.com/dqMrsgn5N5NwGvPVRS8ccVfOsfH4Ds3-AKkutPBjLHw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aGVi/bG9uZGVhYnJvYWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzA5L0J1ZGdl/dC1GcmllbmRseS1E/ZXN0aW5hdGlvbnMt/My5qcGc',
    },
    {
      id: 2,
      title: 'Budget-Friendly Meal Ideas',
      description: 'Discover delicious meal ideas that won\'t break the bank.',
      imageUrl: 'https://imgs.search.brave.com/dXNWdED-bS30dBTRsN65E6y3UeB-kUyHTK9vUhX4QMA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9jaGVh/cC1kaW5uZXItaWRl/YXMtNjVhMDE5YzY3/M2JmNC5qcGVnP2Ny/b3A9MS4wMHh3OjEu/MDB4aDswLDAmcmVz/aXplPTY0MDoq',
    },
    {
      id: 3,
      title: 'Affordable Accommodation Options',
      description: 'Find budget-friendly accommodation options for your next trip.',
      imageUrl: 'https://imgs.search.brave.com/4h706SEODRWa-0ikPfv2trutWWKqAEChg3QYHHjkMMw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU5/NDBmMjcyNTAxNmUx/Yzc5ZTQ2OTQ3MC8x/NTEyMTQ2NTcwMDQ0/LTFaVTUzSlFYT05V/VzA3NkxPTTZZL2hv/dGVsLW1pbi5qcGc',
    },
    {
      id: 4,
      title: 'Saving Money on Transportation',
      description: 'Tips and tricks for saving money on transportation costs while traveling.',
      imageUrl: 'https://imgs.search.brave.com/UeR-XzBXfRbUM3RAZabPaZQXAY0pJ2ge62oOFra6Xc4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dHdvYmlyZHNicmVh/a2luZ2ZyZWUuY29t/L2ZpbGVzL1B1Ymxp/Y190cmFuc3BvcnRf/aW5fSW5kaWElMjAo/MSkuanBn',
    },
    {
      id: 5,
      title: 'Exploring Free Attractions',
      description: 'Discover fun and free attractions to visit during your travels.',
      imageUrl: 'https://imgs.search.brave.com/FWQs1lHu-jm-lOlg-zD8dvEAMoE5YZAkNM-KdDNBK6c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9iMjky/MDQ0MS5zbXVzaGNk/bi5jb20vMjkyMDQ0/MS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8xMS9mcmVlLXRo/aW5ncy10by1kby1p/bi1uZXcteW9yay1j/aXR5LTUtMzMwLmpw/Zz9sb3NzeT0xJnN0/cmlwPTEmd2VicD0w',
    },
    {
      id: 6,
      title: 'Accommodation Options',
      description: 'Find budget-friendly accommodation options for your next trip.',
      imageUrl: 'https://imgs.search.brave.com/roC0Ielx3LWal_4Ye2DUTt4L05v3eXAiY-0ib4QX9xs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90b3Vy/aXNtdGVhY2hlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDgvY290dGFn/ZS1tYWluLmpwZw',
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Budget Friendly Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Render blog posts */}
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600">{post.description}</p>
              <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 block">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetFriendlyBlogPage;
