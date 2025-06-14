import React from "react";

const plans = [
  {
    name: "Basic",
    price: 1999,
    popular: false,
    bgColor: "bg-white",
    textColor: "text-gray-800/80",
    btnStyle: "bg-indigo-500 text-white hover:bg-indigo-600",
    features: [
      "Free Hosting",
      "1 Year Domain",
      "1 Year SSL",
      "1 Business Email",
      "5 Static Pages (5 sections max)",
      "Single Page (10 sections)",
      "WhatsApp Chat",
      "3 Months Support",
    ],
  },
  {
    name: "Standard",
    price: 2999,
    popular: false,
    bgColor: "bg-white",
    textColor: "text-gray-800/80",
    btnStyle: "bg-indigo-500 text-white hover:bg-indigo-600",
    features: [
      "Free Hosting",
      "1 Year Domain",
      "1 Year SSL",
      "2 Business Emails",
      "10 Static Pages (Custom)",
      "Basic Contact Form",
      "WhatsApp Chat",
      "Social Media Integration",
      "Google Analytics",
      "3 Months Support",
    ],
  },
  {
    name: "Advanced",
    price: 3999,
    popular: true,
    bgColor: "bg-white",
    textColor: "text-gray-800/80",
    btnStyle: "bg-indigo-500 text-white hover:bg-indigo-600",
    features: [
      "Free Hosting",
      "1 Year Domain",
      "1 Year SSL",
      "3 Custom Emails",
      "Upto 15 Custom Pages",
      "Advanced Contact Form",
      "WhatsApp Chat",
      "Social Links Integration",
      "Google Analytics",
      "Basic Blog Section",
      "3 Custom Modules",
      "Basic SEO",
      "6 Month Support",
    ],
  },
  {
    name: "Premium ",
    price: 6999,
    popular: false,
    bgColor: "bg-white",
    textColor: "text-gray-800/80",
    btnStyle: "bg-indigo-500 text-white hover:bg-indigo-600",
    features: [
      "Free Hosting",
      "1 Year Domain",
      "1 Year SSL",
      "5 Custom Emails",
      "20 Custom Pages",
      "Advanced Contact Form",
      "Basic Chatbot",
      "WhatsApp Chat",
      "Social Links Integration",
      "Google Analytics",
      "Advanced Blog",
      "Advanced SEO",
      "PWA Enabled",
      "3 Custom Modules",
      "1 Year Support",
    ],
  },
];

const Services = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h2>
      <div className="flex flex-wrap items-start justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-72 ${plan.bgColor} relative text-center ${plan.textColor} border border-gray-500/30 p-6 rounded-lg flex flex-col justify-between`}
          >
            {plan.popular && (
              <p className="absolute px-3 text-sm -top-3.5 left-3.5 py-1 bg-[#8789FB] text-white rounded-full">
                Most Popular
              </p>
            )}
            <div>
              <p className="font-semibold pt-2">{plan.name}</p>
              <h1 className="text-3xl font-semibold">₹{plan.price}</h1>
              <ul
                className={`list-none text-sm mt-6 space-y-1 text-gray-500
                }`}
              >
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.162 13.5 2.887 9.225l1.07-1.069 3.205 3.207 6.882-6.882 1.069 1.07z"
                        fill={plan.popular ? "#009c00" : "#009c00"}
                      />
                    </svg>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="button"
              className={`${plan.btnStyle} text-sm w-full py-2 rounded font-medium mt-7 transition-all`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
