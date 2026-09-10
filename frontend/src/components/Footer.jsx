import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">
              © 2026 Your Company. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              className="hover:text-gray-400"
              aria-label="Facebook"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.097 2.796.141v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.115c.733 0 1.324-.593 1.324-1.324V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>

            <a
              href="https://twitter.com"
              className="hover:text-gray-400"
              aria-label="Twitter"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 2.6a9.864 9.864 0 0 1-3.127 1.195A4.92 4.92 0 0 0 16.616.54c-2.73 0-4.946 2.214-4.946 4.944 0 .388.044.765.127 1.124C7.694 6.412 4.066 4.45 1.64 1.422a4.904 4.904 0 0 0-.67 2.487c0 1.716.873 3.23 2.2 4.115a4.904 4.904 0 0 1-2.24-.62v.063a4.947 4.947 0 0 0 3.963 4.848 4.93 4.93 0 0 1-2.234.085 4.949 4.949 0 0 0 4.616 3.433A9.896 9.896 0 0 1 0 17.54a13.955 13.955 0 0 0 7.548 2.212c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.426-.014-.637A10.025 10.025 0 0 0 24 4.557z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V8.999h3.565v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.201 24 24 23.227 24 22.271V1.729C24 .774 23.201 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;