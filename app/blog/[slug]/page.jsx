import Link from "next/link";

const blogContent = {
  "smart-workflow-automation": {
    title: "Smart Workflow Automation",
    date: "2025-08-01",
    content: `
      Workflow automation is the backbone of efficient SaaS systems.
      By automating repetitive tasks, your team can focus on strategic growth
      instead of mundane work. In this article, we'll explore tools and
      strategies to automate workflows effectively.
    `,
  },
  "advanced-reporting-insights": {
    title: "Advanced Reporting & Insights",
    date: "2025-08-05",
    content: `
      Data is the new oil, and reporting systems are the refinery.
      Advanced reporting in SaaS applications gives you clear visibility into
      performance metrics, trends, and predictions. Learn how to leverage
      analytics to improve your business.
    `,
  },
  "seamless-team-collaboration": {
    title: "Seamless Team Collaboration",
    date: "2025-08-08",
    content: `
      Effective communication is key to success.
      In this article, we discuss tools and practices for real-time collaboration,
      ensuring your team stays connected and productive.
    `,
  },
};

export default function BlogDetail({ params }) {
  const post = blogContent[params.slug];

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-orange-600 hover:underline">
          Go back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-orange-600 hover:underline">
        ← Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mt-4 mb-2">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.date}</p>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
  );
}
