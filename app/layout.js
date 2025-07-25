import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "NoirByte - Full-Stack Development & AI Solutions",
  description:
    "Crafting intelligent solutions in the shadows of complexity. We specialize in web development, mobile apps, AI/ML solutions, and cloud infrastructure.",
  keywords: [
    "web development",
    "AI solutions",
    "full-stack development",
    "mobile apps",
    "cloud infrastructure",
    "SAAS",
  ],
  authors: [{ name: "NoirByte" }],
  creator: "NoirByte",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=TikTok+Sans:opsz,wght@12..36,300..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="icon"
          href="https://res.cloudinary.com/do7axj4vk/image/upload/v1752577309/nb1-cropped_qrail4.svg"
        />

        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "NoirByte",
              url: "https://www.noirbyte.co",
              logo: "https://res.cloudinary.com/do7axj4vk/image/upload/v1752577309/nb1-cropped_qrail4.svg",
              sameAs: ["https://www.linkedin.com/company/noirbyte"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+92-336-6562329",
                  contactType: "Customer Support",
                  areaServed: "PK",
                },
              ],
            }),
          }}
        />
      </head>

      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
