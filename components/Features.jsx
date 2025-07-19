import { cn } from "@/lib/util";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Custom Software Development",
      description:
        "From idea to execution — we craft scalable web and mobile apps tailored to your needs.",
      icon: <IconTerminal2 />,
      color: "blue",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "We integrate cutting-edge AI and machine learning to future-proof your digital products.",
      icon: <IconCpu />,
      color: "indigo",
    },
    {
      title: "Cloud & DevOps Expertise",
      description:
        "Streamline your infrastructure with secure, automated, and efficient DevOps pipelines.",
      icon: <IconCloud />,
      color: "cyan",
    },
    {
      title: "End-to-End Project Ownership",
      description:
        "From design to deployment, we handle every step with precision and accountability.",
      icon: <IconLayoutDashboard />,
      color: "green",
    },
    {
      title: "Cross-Platform Excellence",
      description:
        "Deliver consistent experiences across web, iOS, and Android with modern, responsive designs.",
      icon: <IconDeviceMobileCode />,
      color: "purple",
    },
    {
      title: "Agile & Transparent Workflow",
      description:
        "Stay in the loop — we work in agile sprints with full visibility and regular updates.",
      icon: <IconTimeline />,
      color: "orange",
    },
    {
      title: "Secure by Design",
      description:
        "We build with best-in-class security practices to keep your data and users safe.",
      icon: <IconShieldCheck />,
      color: "red",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We don’t just ship and vanish. Count on us for continuous improvements and long-term support.",
      icon: <IconLifebuoy />,
      color: "pink",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index, color }) => {
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "group-hover/feature:bg-blue-500/20",
        border: "group-hover/feature:bg-blue-500",
        icon: "group-hover/feature:text-blue-400",
        title: "group-hover/feature:text-blue-300",
      },
      green: {
        bg: "group-hover/feature:bg-green-500/20",
        border: "group-hover/feature:bg-green-500",
        icon: "group-hover/feature:text-green-400",
        title: "group-hover/feature:text-green-300",
      },
      purple: {
        bg: "group-hover/feature:bg-purple-500/20",
        border: "group-hover/feature:bg-purple-500",
        icon: "group-hover/feature:text-purple-400",
        title: "group-hover/feature:text-purple-300",
      },
      cyan: {
        bg: "group-hover/feature:bg-cyan-500/20",
        border: "group-hover/feature:bg-cyan-500",
        icon: "group-hover/feature:text-cyan-400",
        title: "group-hover/feature:text-cyan-300",
      },
      orange: {
        bg: "group-hover/feature:bg-orange-500/20",
        border: "group-hover/feature:bg-orange-500",
        icon: "group-hover/feature:text-orange-400",
        title: "group-hover/feature:text-orange-300",
      },
      pink: {
        bg: "group-hover/feature:bg-pink-500/20",
        border: "group-hover/feature:bg-pink-500",
        icon: "group-hover/feature:text-pink-400",
        title: "group-hover/feature:text-pink-300",
      },
      yellow: {
        bg: "group-hover/feature:bg-yellow-500/20",
        border: "group-hover/feature:bg-yellow-500",
        icon: "group-hover/feature:text-yellow-400",
        title: "group-hover/feature:text-yellow-300",
      },
      red: {
        bg: "group-hover/feature:bg-red-500/20",
        border: "group-hover/feature:bg-red-500",
        icon: "group-hover/feature:text-red-400",
        title: "group-hover/feature:text-red-300",
      },
    };
    return colorMap[color] || colorMap.blue;
  };

  const colorClasses = getColorClasses(color);

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none",
            colorClasses.bg
          )}
        />
      )}
      {index >= 4 && (
        <div
          className={cn(
            "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none",
            colorClasses.bg
          )}
        />
      )}
      <div
        className={cn(
          "mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 transition-colors duration-200",
          colorClasses.icon
        )}
      >
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={cn(
            "absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 transition-all duration-200 origin-center",
            colorClasses.border
          )}
        />
        <span
          className={cn(
            "group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100",
            colorClasses.title
          )}
        >
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

// import React from "react";
// import { useId } from "react";

// export function FeaturesSectionDemo() {
//   return (
//     <div className="py-20 lg:py-40">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
//         {grid.map((feature, index) => (
//           <div
//             key={feature.title}
//             className={`relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden group transition-all duration-300 hover:scale-105 ${getHoverColors(
//               index
//             )}`}
//           >
//             <Grid size={20} />
//             <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20 group-hover:text-white transition-colors duration-300">
//               {feature.title}
//             </p>
//             <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20 group-hover:text-neutral-200 transition-colors duration-300">
//               {feature.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const getHoverColors = (index) => {
//   const colors = [
//     "hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-700", // Blue
//     "hover:bg-gradient-to-br hover:from-green-500 hover:to-green-700", // Green
//     "hover:bg-gradient-to-br hover:from-purple-500 hover:to-purple-700", // Purple
//     "hover:bg-gradient-to-br hover:from-cyan-500 hover:to-cyan-700", // Cyan
//     "hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-700", // Orange
//     "hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-700", // Pink
//     "hover:bg-gradient-to-br hover:from-yellow-500 hover:to-yellow-700", // Yellow
//     "hover:bg-gradient-to-br hover:from-red-500 hover:to-red-700", // Red
//   ];
//   return colors[index % colors.length];
// };

// const grid = [
//   {
//     title: "HIPAA and SOC2 Compliant",
//     description:
//       "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
//   },
//   {
//     title: "Automated Social Media Posting",
//     description:
//       "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
//   },
//   {
//     title: "Advanced Analytics",
//     description:
//       "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
//   },
//   {
//     title: "Content Calendar",
//     description:
//       "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
//   },
//   {
//     title: "Audience Targeting",
//     description:
//       "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
//   },
//   {
//     title: "Social Listening",
//     description:
//       "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
//   },
//   {
//     title: "Customizable Templates",
//     description:
//       "Create stunning social media posts with our customizable templates, designed to fit your brand's unique style and voice.",
//   },
//   {
//     title: "Collaboration Tools",
//     description:
//       "Work seamlessly with your team using our collaboration tools, allowing you to assign tasks, share drafts, and provide feedback in real-time.",
//   },
// ];

// export const Grid = ({ pattern, size }) => {
//   const p = pattern ?? [
//     [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
//     [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
//     [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
//     [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
//     [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
//   ];
//   return (
//     <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
//       <div className=" bg-gray-500 absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
//         <GridPattern
//           width={size ?? 20}
//           height={size ?? 20}
//           x="-12"
//           y="4"
//           squares={p}
//           className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
//         />
//       </div>
//     </div>
//   );
// };

// export function GridPattern({ width, height, x, y, squares, ...props }) {
//   const patternId = useId();

//   return (
//     <svg aria-hidden="true" {...props}>
//       <defs>
//         <pattern
//           id={patternId}
//           width={width}
//           height={height}
//           patternUnits="userSpaceOnUse"
//           x={x}
//           y={y}
//         >
//           <path d={`M.5 ${height}V.5H${width}`} fill="none" />
//         </pattern>
//       </defs>
//       <rect
//         width="100%"
//         height="100%"
//         strokeWidth={0}
//         fill={`url(#${patternId})`}
//       />
//       {squares && (
//         <svg x={x} y={y} className="overflow-visible">
//           {squares.map(([x, y]) => (
//             <rect
//               strokeWidth="0"
//               key={`${x}-${y}`}
//               width={width + 1}
//               height={height + 1}
//               x={x * width}
//               y={y * height}
//             />
//           ))}
//         </svg>
//       )}
//     </svg>
//   );
// }
