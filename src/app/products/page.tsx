import Products from "@/components/Home/products";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[400px] text-primary-foreground text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/carousel/1.jpg)`,
        }}
      >
        <div className="flex flex-col gap-8 container">
          <h1 className="pl-24">Products</h1>
          <p>
            albaderdiesels success as a trader of physical commodities is built
            upon a foundation of excellence. We are recognized as a key trading
            partner by refiners, end-users, shipping firms, financial
            organizations, and other product trading companies.
          </p>
        </div>
      </div>

      <Products />
    </div>
  );
};

export default page;
