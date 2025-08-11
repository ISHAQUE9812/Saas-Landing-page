import React from 'react'

const Princing = () => {
  const plans = [
    {
      title: "Free",
      price: "0",
      buttonText: "Try it for free",
      features: [
        "Some limited features only",
        "400 messaging limits",
        "Limited Projects",
        "20,000 Words",
      ],
    },
    {
      title: "Plus plan",
      price: "20",
      buttonText: "Purchase Now",
      highlight: true,
      features: [
        "Everything in Free",
        "2000 messaging limits",
        "Unlimited Projects",
        "Open AI Key Integration",
        "80,000 Words",
        "Consistent support",
      ],
    },
    {
      title: "Pro plan",
      price: "30",
      buttonText: "Purchase Now",
      features: [
        "Everything in Free",
        "5000 messaging limits",
        "Unlimited Projects",
        "Open AI Key Integration",
        "1,00,000 Words",
        "Consistent support",
      ],
    },
    {
      title: "Enterprise",
      price: "Let's talk",
      buttonText: "Contact Sales",
      features: [
        "Everything in Free",
        "5000 messaging limits",
        "Unlimited Projects",
        "Open AI Key Integration",
        "Unlimited Words",
        "Consistent support",
      ]
    }  
  ]  
  return (
    <section id='pricing' className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <div className="inline-flex gap-3 items-center justify-center mb-4 bg-white rounded-full px-4 py-1 shadow-inner">
          <button className="text-sm font-semibold text-white bg-gray-900 px-4 py-1.5 rounded-full">
            Monthly
          </button>
          <span className="text-sm font-medium text-gray-500">Annually</span>
          <span className="text-xs bg-orange-200 text-orange-800 px-2 py-0.5 rounded-full font-medium">
            Save 20%
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Pricing Plans</h2>
      </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border rounded-lg p-6 flex flex-col justify-between transition duration-300 ease-in-out ${
    plan.highlight
      ? "border-orange-500 bg-orange-50 shadow-lg hover:border-orange-700 hover:shadow-xl"
      : "border-gray-300 bg-white hover:border-gray-600 hover:shadow-lg"
  }`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-600">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4 text-gray-600">
                {plan.price === "0" ? "$0" : plan.price === "Let's talk" ? plan.price : `$${plan.price}`}
              </p>

              <ul className="mb-6 space-y-2 text-gray-500">
                {plan.features.map((texts, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {texts}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-2 rounded text-white font-semibold ${
                plan.highlight ? "bg-orange-600 hover:bg-orange-700" : "bg-gray-900 hover:bg-gray-800"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Princing