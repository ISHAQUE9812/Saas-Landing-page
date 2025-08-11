export default function TermsOfService() {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-100 rounded-3xl shadow-lg p-10 border border-gray-200 dark:border-gray-400">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed mb-6">
          By accessing or using our services, you agree to comply with and be bound
          by these terms. Please read them carefully before using our platform.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed mb-6">
          Our services are provided <span className="font-semibold">"as is"</span> without warranties of any kind. 
          We reserve the right to update or modify these terms at any time.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-500 leading-relaxed">
          If you do not agree with these terms, you should not use our services.
        </p>
      </div>
    </section>
  );
}
