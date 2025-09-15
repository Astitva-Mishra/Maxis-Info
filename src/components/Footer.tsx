"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#143a52] via-[#17405a] to-[#1a4662]">
      {/* Main footer content */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Logo Section */}
            <div className="col-span-1 flex items-center">
              <img
                src="/logo.png"
                alt="Maxis Logo"
                style={{ width: "200px", height: "auto" }}
              />
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Services"
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-white mb-3">
                Contact Info
              </h3>
              <div className="space-y-1 text-xs text-gray-300">
                <p>208, Vardhman Key Point Plaza</p>
                <p>Sector - 6, Dwarka</p>
                <p>New Delhi - 110075, INDIA</p>
                <div className="mt-2 space-y-1">
                  <p className="text-orange-400">sales@MaxisInfo.net</p>
                  <p className="text-orange-400">+ 91 1145540318</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="col-span-1">
              <h3 className="text-sm font-semibold text-white mb-3">
                Follow us
              </h3>
              <div className="space-y-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="block text-xs text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Facebook
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="block text-xs text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - stuck to bottom */}
      <div className="bg-black/80 text-center py-2">
        <p className="text-xs text-gray-400">
          © 2022 MIPL. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
