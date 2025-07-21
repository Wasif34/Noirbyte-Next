"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import Link from "next/link";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Cheapfaretravel",
    thumbnail: "/images/cft.png",
    link: "https://www.noirbyte.co/projects/cheapfaretravel",
  },
  {
    title: "Xtreim",
    link: "https://www.noirbyte.co/projects/xtreim",
    thumbnail:"/images/Xtreim.png",
  },
  {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine1.png",
  },

 {
    title: "Xtreim",
    link: "https://www.noirbyte.co/projects/xtreim",
    thumbnail:"/images/xtreimDash.png",
  },
  {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine.png",
  },
  {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine6.png",
  },
  {
    title: "Redefine",
    link: "https://www.noirbyte.co/projects/zentry",
    thumbnail: "/images/zentry.png",
  },
  {
    title: "Cheapfaretravel",
    thumbnail: "/images/cft1.png",
    link: "https://www.noirbyte.co/projects/cheapfaretravel",
  },
 {
    title: "Xtreim",
    link: "https://www.noirbyte.co/projects/xtreim",
    thumbnail:"/images/xtreimDash.png",
  },
  {
    title: "Redefine",
    link: "https://www.noirbyte.co/projects/zentry",
    thumbnail: "/images/zentry2.png",
  },
  {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine6.png",
  },
 {
    title: "Cheapfaretravel",
    thumbnail: "/images/cft.png",
    link: "https://www.noirbyte.co/projects/cheapfaretravel",
  },
  {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine4.png",
  },
 {
    title: "Alpine Resort",
    link: "https://www.noirbyte.co/projects/alpine",
    thumbnail: "/images/alpine3.png",
  },
];

const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 bg-black overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="overflow-hidden"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20 overflow-hidden">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 overflow-hidden">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 overflow-hidden">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={`${product.title}-${index}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="font-TikTok text-2xl md:text-6xl font-bold dark:text-white">
        We Design. We Develop. We Deliver.
      </h1>
      <p className="font-TikTok text-neutral-500 dark:text-neutral-300 mt-4 md:mt-8 text-lg md:text-xl">
        At NoirByte, we specialize in building cutting-edge web, mobile, and
        AI-powered solutions that drive innovation, efficiency, and growth.
        Whether you're a startup or an enterprise, we turn your ideas into
        beautifully engineered realities.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
       <Link
            href={product.link}
            className="flex space-x-2"
          >

      {/* <a href={product.link} className="block group-hover/product:shadow-sm"> */}
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
          />
      {/* </a> */}
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-20 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 text-white">{product.title}</h2>
          </Link>
    </motion.div>
  );
};
