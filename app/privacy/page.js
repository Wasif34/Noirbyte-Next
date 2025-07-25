import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy - NoirByte",
  description:
    "Read NoirByte's privacy policy to understand how we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavbarDemo />
      <main className="bg-black text-white font-TikTok min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-zinc-900 to-black py-20 text-center px-4">
          <h1 className="text-5xl font-extrabold text-teal-400 mb-4 pt-8">
            Privacy Policy
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Learn how NoirByte collects, uses, and safeguards your personal
            information.
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-12 mt-[-30px]">
          <div>
            <h2 className="text-2xl font-semibold text-teal-300 mt-2 mt-[-60px]">
              Data Collection
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              We may collect personal information including your name, email
              address, and phone number when you fill out forms on our website.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Use of Data
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Your information is used solely to respond to inquiries, deliver
              our services, and improve user experience.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Third-Party Services
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              We do not sell or rent your information to third parties. We may
              share data with trusted tools (e.g., analytics or email) to
              improve our services.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">Cookies</h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              We use cookies to understand how you interact with our site and
              improve functionality.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Your Rights
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              You have the right to access, update, or delete your personal
              data. Reach out to us at{" "}
              <a
                href="mailto:info@noirbyte.com"
                className="text-teal-400 underline hover:text-teal-300"
              >
                info@noirbyte.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
