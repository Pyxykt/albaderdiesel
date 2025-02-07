import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900">
      <div className="container space-y-8">
        <div className="grid grid-cols-[30%_20%_20%_30%] gap-8 ">
          <img alt="Arapco" src="/logo.jpg" />
          <div className="flex flex-col text-white">
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/services">Services</Link>
            <Link href="/carrier">Careers</Link>
          </div>
          <div className="flex flex-col text-white">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
