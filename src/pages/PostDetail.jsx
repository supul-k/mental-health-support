import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "The Growth of Mental Health Awareness",
    excerpt: "Exploring how mental health understanding has evolved over the decades",
    content: [
      {
        type: "paragraph",
        text: "Mental health awareness has undergone a remarkable transformation in recent years. What was once a taboo subject is now at the forefront of public health discussions, representing significant progress in our collective understanding."
      },
      {
        type: "heading",
        text: "Historical Perspective"
      },
      {
        type: "paragraph",
        text: "In the early 20th century, mental health was poorly understood and often stigmatized. Treatments were primitive, focusing more on containment than healing. The deinstitutionalization movement of the 1960s marked the first major shift toward community-based care."
      },
      {
        type: "heading",
        text: "Modern Breakthroughs"
      },
      {
        type: "paragraph",
        text: "The last two decades have seen exponential growth in mental health research. Neuroscience advancements have revealed how therapies actually change brain structure, while telehealth has made treatment more accessible than ever before."
      },
      {
        type: "image",
        src: "/growth-timeline.jpg",
        alt: "Timeline of mental health awareness growth",
        caption: "Fig 1. Key milestones in mental health awareness"
      }
    ],
    author: "Dr. Sarah Chen",
    date: "15 Mar 2023",
    readTime: "8 min read",
    category: "Mental Wellness"
  },
  {
    id: 2,
    title: "Building Resilience: The Science of Mental Strength",
    excerpt: "How modern psychology helps us develop stronger coping mechanisms",
    content: [
      {
        type: "paragraph",
        text: "Resilience isn't an innate trait but a skill that can be cultivated. Recent studies show that specific practices can rewire our neural pathways to handle stress more effectively."
      },
      {
        type: "heading",
        text: "Neuroplasticity and Growth"
      },
      {
        type: "paragraph",
        text: "The discovery of neuroplasticity revolutionized our understanding of mental growth. Contrary to old beliefs, adult brains can form new connections, meaning we can literally grow our capacity for resilience throughout life."
      },
      {
        type: "quote",
        text: "Mental strength grows in the spaces between comfort and challenge",
        author: "Dr. Michael Tanaka"
      },
      {
        type: "heading",
        text: "Practical Strategies"
      },
      {
        type: "paragraph",
        text: "Cognitive Behavioral Therapy techniques have shown particular promise in resilience-building. Simple daily practices like gratitude journaling and mindfulness meditation can create measurable changes within weeks."
      }
    ],
    author: "Dr. Rachel Wong",
    date: "22 Apr 2023",
    readTime: "6 min read",
    category: "Self-Care Tips"
  },
  {
    id: 3,
    title: "The Digital Age of Mental Health Support",
    excerpt: "How technology is expanding access to psychological care globally",
    content: [
      {
        type: "paragraph",
        text: "Digital platforms have democratized mental health support, breaking down geographical and financial barriers that once limited access to care."
      },
      {
        type: "heading",
        text: "Teletherapy Revolution"
      },
      {
        type: "paragraph",
        text: "Video counseling sessions grew by 300% during the pandemic, proving that effective therapy doesn't require physical proximity. This shift has made specialists accessible to rural communities worldwide."
      },
      {
        type: "heading",
        text: "App-Based Interventions"
      },
      {
        type: "paragraph",
        text: "Clinically-validated apps now deliver CBT, DBT, and other evidence-based therapies through smartphones. These tools provide 24/7 support between professional sessions."
      },
      {
        type: "image",
        src: "/mental-health-apps.jpg",
        alt: "Screenshots of mental health apps",
        caption: "Fig 2. Leading mental health applications"
      }
    ],
    author: "TechHealth Team",
    date: "5 May 2023",
    readTime: "7 min read",
    category: "Expert Advice"
  }
];

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/posts" className="text-[#006989] hover:underline">← Back to all posts</Link>
        </div>

        <span className="inline-block px-3 py-1 text-xs font-semibold text-[#006989] bg-[#e6f2fa] rounded-full mb-4">
          {post.category}
        </span>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <span>{post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="prose max-w-none">
          {post.content.map((section, index) => (
            <div key={index}>
              {section.type === "heading" ? (
                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{section.text}</h2>
              ) : (
                <p className="text-gray-700 mb-4">{section.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {posts.filter(p => p.id !== post.id).slice(0, 2).map(relatedPost => (
              <Link 
                key={relatedPost.id} 
                to={`/posts/${relatedPost.id}`}
                className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <h4 className="font-medium text-gray-900">{relatedPost.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}