export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white  py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-100 rounded-3xl shadow-lg p-10 border border-gray-300 dark:border-gray-300">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed mb-6">
          We value your privacy and are committed to protecting your personal
          information. This privacy policy outlines how we collect, use, and
          protect your data when you use our services.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed mb-6">
          We do not sell your data to third parties, and your information is
          only used to improve our platform and provide you with better
          services.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed">
          For any privacy-related concerns, please contact us at{" "}
          <a
            href="mailto:support@yourcompany.com"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            support@yourcompany.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}
