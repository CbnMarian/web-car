import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    title: "What makes it essential to compare different car rental deals?",
    text: "Comparing car rental deals is crucial to finding the most suitable option that aligns with your budget and preferences. This process ensures you receive the best value for your money. By exploring various deals, you may discover options with lower costs, added services, or superior car models. Research online and compare prices from various rental companies to make an informed decision.",
  },
  {
    title: "How can I discover the latest car rental deals?",
    text: "Uncovering car rental deals is made easy through online research and comparison of prices from different rental companies. Websites like Expedia, Kayak, and Travelocity provide platforms for comparing prices and exploring available rental options. To stay updated on special deals or promotions, consider subscribing to email newsletters and following rental car companies on social media.",
  },
  {
    title: "How can I find budget-friendly car rental rates?",
    text: "Discover cost-effective rental options by booking in advance, comparing prices online, utilizing discount codes, and exploring off-airport locations for potential savings.",
  },
];

export default function FAQ({ data }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  const [curOpen, setIsOpen] = useState(null);
  return (
    <section className="faq-section" data-aos="fade-up">
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setIsOpen}
            title={el.title}
            text={el.text}
            num={i}
            key={el.title}
          />
        ))}
      </div>
    </section>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export { faqs };
