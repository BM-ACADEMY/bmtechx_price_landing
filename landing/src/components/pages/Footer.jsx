import React from 'react';
import Logo1 from '/logo1.png'
const Footer = () => {
  const linkSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Service", href: "#Service" },
      ],
    },
    {
      title: "Our Services?",
      links: [
        { label: "Static Website" },
        { label: "Dynamic Website" },
        { label: "E-Commerce" },
      ],
    },
    {
      title: "Follow Us",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/bmtechxpondy_/", target: "_blank" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/bm-techx-pondy/?original_referer=https%3A%2F%2Fbmtechx.in%2F", target: "_blank" },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61567695654956", target: "_blank" },
        { label: "YouTube", href: "https://www.youtube.com/@BMtechx-abm", target: "_blank" },
      ],
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 scroll-smooth" id='contact'>
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo and description */}
        <div>
          <img
            className="w-14 md:w-16"
            src={Logo1}
            alt="dummyLogoColored"
          />
          <p className="max-w-[410px] mt-6">
           Innovate, Accelerate, and Grow Your Revenue. Our services are tailored to ensure that businesses can effectively establish and grow their online visibility.
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
      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">&copy;
 {new Date().getFullYear()} {" "}
  <a
    href="https://portfolio-of.bmtechx.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 underline hover:text-black transition"
  >
    BMTechx.in
  </a>{" "}
  All Rights Reserved.
</p>

    </footer>
  );
};

export default Footer;
