"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/util";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center ">
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
      className={cn(
        "fixed top-4 inset-x-0 max-w-6xl mx-auto z-50 px-4 text-md",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <HoveredLink href="/">
            <div className="flex items-center space-x-4">
              <img
                src="/images/nb1-cropped.svg"
                alt="NoirByte Logo"
                className="h-8 w-8 md:h-12 md:w-12"
              />
              <span
                className="text-lg md:text-xl font-bold"
                style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
              >
                noirbyte™
              </span>
            </div>
          </HoveredLink>

          {/* Desktop Navigation Items */}
          <div
            className="hidden lg:flex items-center space-x-8 text-lg"
            style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
          >
            <HoveredLink
              href="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </HoveredLink>

            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="bg-foreground text-md grid grid-cols-1 xl:grid-cols-2 gap-10 p-4 bg-card border border-border rounded-lg shadow-lg">
                <ProductItem
                  title="Xtreim"
                  href="/projects/xtreim"
                  src="/images/Xtreim.png"
                  description="Limousine fleet management made simple."
                  className="hover:bg-muted/50 transition-colors"
                />
                <ProductItem
                  title="Alpine Resort"
                  href="/projects/alpine"
                  src="/images/alpineBoth.svg"
                  description="Promoting tourism through digital resort management."
                  className="hover:bg-muted/50 transition-colors"
                />
                <ProductItem
                  title="CheapfareTravel"
                  href="/projects/cheapfaretravel"
                  src="/images/cheapAirBoth.svg"
                  description="Book flights, hotels, and tours at the best rates."
                  className="hover:bg-muted/50 transition-colors"
                />
                <ProductItem
                  title="Redefine"
                  href="/projects/zentry"
                  src="/images/redefineBoth.png"
                  description="AI-driven, blockchain-enabled metagame platform."
                  className="hover:bg-muted/50 transition-colors"
                />
              </div>
            </MenuItem>

            <HoveredLink
              href="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </HoveredLink>
            <HoveredLink
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </HoveredLink>
          </div>

          {/* Desktop Social Links and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <a
              href="https://www.instagram.com/noirbyte_techsolutions?igsh=MTRlaW1ieWVmdGltbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* CTA Button */}
            <button
              className="bg-primary text-primary-foreground px-3 py-2 lg:px-4 rounded-full text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-sm"
              style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
            >
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
                "block w-6 h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 bg-foreground transition-all duration-300",
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 mt-2 bg-card rounded-lg shadow-lg border border-border transition-all duration-300 overflow-hidden",
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className="p-4 space-y-4"
            style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
          >
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <a
                href="/"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/services"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>

              {/* Mobile Projects Dropdown */}
              <div className="space-y-2">
                <span
                  className="block text-foreground font-medium"
                  style={{ fontFamily: "Bevellier-Medium, sans-serif" }}
                >
                  Projects
                </span>
                <div className="pl-4 space-y-2">
                  <a
                    href="/projects/xtreim"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Xtreim
                  </a>
                  <a
                    href="/projects/alpine"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Alpine Resort
                  </a>
                  <a
                    href="/projects/cheapfaretravel"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CheapfareTravel
                  </a>
                  <a
                    href="/projects/zentry"
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Redefine
                  </a>
                </div>
              </div>

              <a
                href="/about"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            {/* Mobile Social Links and CTA */}
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.instagram.com/noirbyte_techsolutions?igsh=MTRlaW1ieWVmdGltbA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>

                <button
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                  style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
                >
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
