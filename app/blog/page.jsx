

import Link from "next/link";


const blogPosts = [
  {
    slug: "smart-workflow-automation",
    title: "Smart Workflow Automation",
    excerpt:
      "Boost productivity with automated workflows that save time and reduce manual effort.",
    date: "August 1, 2025",
    tag: "Automation",
  },
  {
    slug: "advanced-reporting-insights",
    title: "Advanced Reporting & Insights",
    excerpt:
      "Get detailed analytics and reporting to make data-driven decisions for your business.",
    date: "August 5, 2025",
    tag: "Analytics",
  },
  {
    slug: "seamless-team-collaboration",
    title: "Seamless Team Collaboration",
    excerpt:
      "Enhance team productivity with real-time communication and project tracking.",
    date: "August 8, 2025",
    tag: "Collaboration",
  },
];

export default function BlogPage() {
  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-400 via-blue-500 to-pink-200 bg-clip-text text-transparent">
          Our Blog
        </h1>
        <p className="max-w-3xl mx-auto text-center text-gray-900 dark:text-gray-500 text-lg mb-14">
          Insights, trends, and tips to help you get the most out of your workflow,
          collaboration, and business analytics.
        </p>

        <div className="grid gap-12 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="bg-white dark:bg-gray-700 rounded-3xl shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-900 flex flex-col justify-between"
            >
              {/* Tag */}
              <div className="p-5 flex justify-start">
                <span className="inline-block bg-gradient-to-r from-pink-300 via-red-300 to-yellow-300 text-yellow-900 dark:text-yellow-100 font-semibold text-xs uppercase px-4 py-1 rounded-full tracking-wide drop-shadow-md">
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-indigo-300 cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <time
                  className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wider mb-4"
                  dateTime={post.date}
                >
                  {post.date}
                </time>
                <p className="text-gray-600 dark:text-gray-300 flex-grow leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-semibold hover:underline hover:gap-3 transition-all"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
