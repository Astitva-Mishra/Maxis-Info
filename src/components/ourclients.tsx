"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const ourClientsData = [
  {
    quote: "",
    image: "/bajaj-motors-logo.png",
    alt: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/converge_logo.jpg",
    alt: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/edify-logo.png",
    alt: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/lg-logo.jpg",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/mi-logo.svg",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "NHAI-logo.png",
    alt: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/tecsidel-logo.png",
    alt: "",
    name: "",
    title: "",
  },
  {
    quote: "",
    image: "/unify-logo.png",
    alt: "",
    name: "",
    title: "",
  },
];

function OurClients() {
  return (
    <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 relative flex flex-col items-center justify-center overflow-x-hidden">
      <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">Our Clients </h2>
      <div className="w-screen overflow-x-hidden">
        <InfiniteMovingCards
          items={ourClientsData}
          direction="right"
          speed="fast"
          className="w-screen"
        />
      </div>
    </div>
  );
}

export default OurClients;
