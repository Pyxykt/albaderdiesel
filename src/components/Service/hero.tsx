"use client";
import React from "react";

export function Hero() {
  return (
    <section className="bg-secondary">
      <div
        className="flex flex-col justify-center rounded-none border-0 bg-cover bg-center h-[800px] text-primary-foreground text-left p-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/carousel/1.jpg')`,
        }}
      >
        <h1 className="mb-4">Services</h1>
        <p className="max-w-[60%]">
          With the kind of experience our team members possess and the overall
          size of construction projects in our company’s portfolio – we are sure
          that any task, even the most complex one is our cup of tea!
        </p>
      </div>
    </section>
  );
}
