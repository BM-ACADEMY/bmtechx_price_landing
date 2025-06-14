import React from 'react';

const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Best Sellers", href: "#products" },
        { label: "Offers & Deals", href: "#offers" },
        { label: "Contact Us", href: "#contact" },
        { label: "FAQs", href: "#faq" },
      ],
    },
    {
      title: "Need Help?",
      links: [
        { label: "Delivery Information", href: "#delivery" },
        { label: "Return & Refund Policy", href: "#returns" },
        { label: "Payment Methods", href: "#payment" },
        { label: "Track your Order", href: "#track" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Instagram", href: "https://instagram.com", target: "_blank" },
        { label: "Twitter", href: "https://twitter.com", target: "_blank" },
        { label: "Facebook", href: "https://facebook.com", target: "_blank" },
        { label: "YouTube", href: "https://youtube.com", target: "_blank" },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 scroll-smooth">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo and description */}
        <div>
          <img
            className="w-34 md:w-32"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg"
            alt="dummyLogoColored"
          />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Link Sections */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target={link.target || "_self"}
                      rel={link.target === "_blank" ? "noopener noreferrer" : ""}
                      className="hover:underline transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
  Copyright {new Date().getFullYear()} ©{" "}
  <a
    href="https://prebuiltui.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 underline hover:text-black transition"
  >
    PrebuiltUI
  </a>{" "}
  All Rights Reserved.
</p>

    </footer>
  );
};

export default Footer;
