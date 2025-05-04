import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "The Growth of Mental Health Awareness",
    excerpt: "Exploring how mental health understanding has evolved over the decades",
    author: "Dr. Sarah Chen",
    date: "15 Mar 2023",
    readTime: "5 min read",
    category: "Mental Wellness"
  },
  {
    id: 2,
    title: "Building Resilience: The Science of Mental Strength",
    excerpt: "How modern psychology helps us develop stronger coping mechanisms",
    author: "Dr. Rachel Wong",
    date: "22 Apr 2023",
    readTime: "7 min read",
    category: "Expert Advice"
  },
  {
    id: 3,
    title: "The Digital Age of Mental Health Support",
    excerpt: "How technology is expanding access to psychological care globally",
    author: "TechHealth Team",
    date: "5 May 2023",
    readTime: "7 min read",
    category: "Expert Advice"
  }
];

export default function Posts() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Explore Our Featured Insights</h1>
          <Link to="#" className="text-[#006989] hover:underline">View all</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-[#006989] bg-[#e6f2fa] rounded-full mb-2">
                  {post.category}
                </span>
                <Link to={`/posts/${post.id}`} className="block">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#006989]">{post.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mb-12">
          {['Mental Wellness', 'Self-Care Tips', 'Community Stories', 'Expert Advice'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}