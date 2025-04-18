import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Our Blog</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className="border rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all"
          >
            <img
              src="./img1.png"
              alt="blog-img"
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">September 24, 2025</p>
              <h2 className="text-lg font-semibold my-2">
                {`Blog Post #${item} - Tips for Growing Healthy Plants`}
              </h2>
              <p className="text-gray-600 text-sm">
                Discover essential tips to keep your plants vibrant and thriving.
              </p>
              <button className="mt-3 text-green-600 hover:underline font-medium">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
