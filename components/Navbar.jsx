"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/util";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={cn("fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4", className)}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src="/images/nb1-cropped.svg"
              alt="NoirByte Logo"
              className="h-8 w-8 md:h-12 md:w-12"
            />
            <span className="text-lg md:text-xl font-bold text-white">
              noirbyte™
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex items-center space-x-8">
            <HoveredLink to="/">Home</HoveredLink>
            <HoveredLink to="/services">Services</HoveredLink>

            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="text-sm grid grid-cols-1 xl:grid-cols-2 gap-10 p-4 bg-slate-900">
                <ProductItem
                  title="Xtreim"
                  to="/projects/xtreim"
                  external={false}
                  src="/images/Xtreim.png"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Alpine Resort"
                  to="/projects/alpine"
                  external={false}
                  src="/images/alpineBoth.svg"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="CheapfareTravel"
                  to="/projects/cheapfaretravel"
                  external={false}
                  src="/images/cheapAirBoth.svg"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Redefine"
                  to="/projects/zentry"
                  external={false}
                  src="/images/redefineBoth.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>

            <HoveredLink href="/about">About</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>

          {/* Desktop Social Links and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <a
              href="https://www.instagram.com/noirbyte_techsolutions?igsh=MTRlaW1ieWVmdGltbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-70 transition-opacity"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a> */}

            {/* CTA Button */}
            <button className="bg-black dark:bg-white text-white dark:text-black px-3 py-2 lg:px-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              Get noirbyte™
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300",
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-black dark:bg-white transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="p-4 space-y-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <a
                href="/"
                className="block text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/services"
                className="block text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              
              {/* Mobile Projects Dropdown */}
              <div className="space-y-2">
                <span className="block text-white font-medium">Projects</span>
                <div className="pl-4 space-y-2">
                  <a
                    to="/projects/xtreim"
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Xtreim
                  </a>
                  <a
                    to="/projects/alpine"
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Alpine Resort
                  </a>
                  <a
                    to="/projects/cheapfaretravel"
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CheapfareTravel
                  </a>
                  <a
                    to="/projects/zentry"
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Redefine
                  </a>
                </div>
              </div>

              <a
                href="/about"
                className="block text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            {/* Mobile Social Links and CTA */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/noirbyte_techsolutions?igsh=MTRlaW1ieWVmdGltbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  {/* <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:opacity-70 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a> */}
                </div>

                <button className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                  Get noirbyte™
                </button>
              </div>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}

