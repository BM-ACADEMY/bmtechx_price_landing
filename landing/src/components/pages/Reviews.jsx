import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Donald Jackman',
    role: 'Content Creator',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
    alt: 'userImage1',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    rating: 5,
  },
  {
    name: 'Richard Nelson',
    role: 'Instagram Influencer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
    alt: 'userImage2',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    rating: 5,
  },
  {
    name: 'James Washington',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
    alt: 'userImage3',
    text: "I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
    rating: 5,
  },
  {
    name: 'Jane Cooper',
    role: 'Brand Strategist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200',
    alt: 'userImage4',
    text: "Imagify made it easy for us to create compelling visuals without design experience. Love it!",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalSlides = Math.ceil(reviews.length / cardsToShow);

  const visibleReviews = reviews
  .slice(currentIndex * cardsToShow, currentIndex * cardsToShow + cardsToShow)
  .concat(
    currentIndex * cardsToShow + cardsToShow > reviews.length
      ? reviews.slice(0, (currentIndex * cardsToShow + cardsToShow) % reviews.length)
      : []
  );


  return (
    <div className="pt-14 px-8 max-w-7xl mx-auto relative">
      <div className="flex gap-6 justify-center flex-wrap">
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className="text-sm w-full sm:w-[80%] md:w-[45%] lg:w-[30%] border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 flex flex-col min-h-[300px]"
          >
            <div className="flex flex-col items-center px-5 py-4 relative">
              <img
                className="h-24 w-24 absolute -top-14 rounded-full"
                src={review.image}
                alt={review.alt}
              />
              <div className="pt-8 text-center">
                <h1 className="text-lg font-medium text-gray-800">{review.name}</h1>
                <p className="text-gray-800/80">{review.role}</p>
              </div>
            </div>
            <p className="text-gray-500 px-6 text-center flex-1">{review.text}</p>
            <div className="flex justify-center pt-4">
              <div className="flex gap-0.5">
                {Array(review.rating).fill().map((_, i) => (
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
              currentIndex === i ? 'bg-orange-500' : 'bg-gray-300'
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
