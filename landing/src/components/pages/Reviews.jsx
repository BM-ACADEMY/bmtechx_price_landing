import React, { useState, useEffect } from "react";

const reviews = [
  {
    name: "Kavitha J",
    text: "I’m Kavitha, the Managing Director of JK Coaching Academy. From the very beginning until the handover, my experience with BM TechX has been smooth and seamless. The designs were fantastic, and the vibrant, positive colors truly stood out. Whenever I needed any corrections or changes, I was always met with warmth and a smiling team. I truly appreciate all the support provided.",
    rating: 5,
  },
  {
    name: "Natarajan M",
    text: "BM TechX created my static website in just 4 days, and I am extremely happy with the result. The team understood my requirements perfectly and delivered exactly what I had in mind. Their efficiency and quality of work are truly impressive. Highly recommended.",
    rating: 5,
  },
  {
    name: "FAIYAZ AHAMED",
    text: "BM TechX created my static website in just 4 days, and I am extremely happy with the result. The team understood my requirements perfectly and delivered exactly what I had in mind. Their efficiency and quality of work are truly impressive. Highly recommended.",
    rating: 5,
  },
  {
    name: "Chinna Cleaning Facility",
    text: "I am running a cleaning service in Coimbatore. I decided to design a website for this and contacted them. BM Techx designed a website with the best technology in a way that I liked.",
    rating: 5,
  },
  {
    name: "Prem Anand",
    text: "I am premanand founder of chop chop e-commerce service sector, thanks to BM TECHX For completing our website with in a day with affordable price, best quality and genuine customer service 100 percent worth thank you.",
    rating: 5,
  },
  {
    name: "Rageya Begum",
    text: "I received the best and highest-quality digital marketing service from BM TECHX for my company's product. Thank you, BM TECHX!",
    rating: 5,
  },
];

const avatarColors = [
  "bg-orange-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-red-500",
];

const StarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
      fill="#FF532E"
    />
  </svg>
);

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsToShow(3);
      } else if (width >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsToShow);

  const visibleReviews = reviews
    .slice(currentIndex * cardsToShow, currentIndex * cardsToShow + cardsToShow)
    .concat(
      currentIndex * cardsToShow + cardsToShow > reviews.length
        ? reviews.slice(
            0,
            (currentIndex * cardsToShow + cardsToShow) % reviews.length
          )
        : []
    );

  return (
    <div className="">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Client Testimonial
      </h2>
      <div className="pt-14 px-8 max-w-7xl mx-auto relative">
        <div className="flex gap-6 justify-center flex-wrap">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="text-sm w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 flex flex-col min-h-[300px]"
            >
              <div className="flex flex-col items-center px-5 py-4 relative">
                {/* Avatar with initial */}
                <div
                  className={`h-14 w-14 absolute -top-8 rounded-full text-white flex items-center justify-center text-3xl font-bold shadow-md ${
                    avatarColors[index % avatarColors.length]
                  }`}
                >
                  {review.name.charAt(0)}
                </div>
                <div className="pt-8 text-center">
                  <h1 className="text-lg font-medium text-gray-800">
                {review.name.charAt(0).toUpperCase() + review.name.slice(1).toLowerCase()}
              </h1>

                </div>
              </div>
              <p className="text-gray-500 px-6 text-center flex-1">
                {review.text}
              </p>
              <div className="flex justify-center pt-4">
                <div className="flex gap-0.5">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-3 w-3 rounded-full ${
                currentIndex === i ? "bg-orange-500" : "bg-gray-300"
              } transition-all duration-300`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
