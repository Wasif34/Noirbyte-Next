import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service - NoirByte",
  description:
    "Review the terms and conditions that govern the use of NoirByte’s website and services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <NavbarDemo />
      <main className="bg-black text-white font-TikTok min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-zinc-900 to-black py-20 text-center px-4">
          <h1 className="text-5xl font-extrabold text-teal-400 mb-4 pt-8">
            Terms of Service
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Review the terms and conditions that govern the use of NoirByte’s
            website and services.
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 space-y-12 mt-[-30px]">
          <div>
            <h2 className="text-2xl font-semibold text-teal-300 mt-[-60px]">
              Acceptance of Terms
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              By accessing and using the NoirByte website and services, you
              accept and agree to be bound by these Terms. If you do not agree
              with these terms, please discontinue use.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Use of Services
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              You agree to use NoirByte’s services only for lawful purposes. Any
              unauthorized use, tampering, or attempts to disrupt the service
              are prohibited.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Intellectual Property
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              All content including logos, designs, code, and graphics are the
              property of NoirByte, unless stated otherwise. Reproduction or
              distribution without permission is not allowed.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              NoirByte shall not be held liable for any indirect or incidental
              damages arising from your use of the site or services.
            </p>
          </div>

          <hr className="border-gray-700" />

          <div>
            <h2 className="text-2xl font-semibold text-teal-300">
              Modifications
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              NoirByte reserves the right to change or update these terms at any
              time. Your continued use of the service constitutes acceptance of
              those changes.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-8">
            Last updated: July 25, 2025
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
