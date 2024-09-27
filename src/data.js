import img1 from "./assets/tour-1.jpeg";
import img2 from "./assets/tour-2.jpeg";
import img3 from "./assets/tour-3.jpeg";
import img4 from "./assets/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    title: "Saving Money",
    icon: "fas fa-wallet fa-fw",
    text: "Travel further for less. Enjoy great deals and budget-friendly options without sacrificing the experience.",
  },
  {
    id: 2,
    title: "Amazing Comfort",
    icon: "fas fa-socks fa-fw",
    text: "Relax in style. We ensure your comfort every step of the way, so you can focus on the journey.",
  },
  {
    id: 3,
    title: "Tailored Experiences",
    icon: "fas fa-tree fa-fw",
    text: "Your trip, your way. Every detail is personalized to fit your unique travel style.",
  },
];

export const tours = [
  {
    id: 1,
    title: "Tibet Adventure",
    img: img1,
    date: "august 26th, 2024",
    text: "Discover Tibet’s spiritual heart and stunning mountain landscapes. From ancient monasteries to breathtaking peaks, this adventure is one-of-a-kind.",
    country: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    title: "Best of java",
    img: img2,
    date: "october 1th, 2024",
    text: "Experience Java’s rich culture, ancient temples, and dramatic volcanoes. A perfect mix of history, nature, and adventure awaits you.",
    country: "indonesia",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    title: "explore hong kong",
    img: img3,
    date: "september 15th, 2024",
    text: "Uncover Hong Kong’s blend of modern skyscrapers and ancient traditions. Explore its lively streets, serene temples, and local flavors.",
    country: "hong kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    title: "kenya highlights",
    img: img4,
    date: "december 5th, 2024",
    text: "Get up close with Kenya’s incredible wildlife. From safaris to savannas, witness Africa’s beauty and experience unforgettable moments.",
    country: "kenya",
    duration: 20,
    price: 3300,
  },
];
