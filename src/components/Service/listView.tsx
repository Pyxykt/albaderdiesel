import React from "react";
import Image from "next/image";

const serviceInfo = [
  {
    src: "/whatwedo/gas-oil.jpg",
    title: "Gas Oil",
    content:
      "Gas oil, also known as diesel fuel or diesel oil,throughout these years albaderdiesel has a reputation for providing the best quality gas oil as per customer demand.",
  },
  {
    src: "/whatwedo/export.jpg",
    title: "Export",
    content:
      "albaderdiesel supply gas oil on demand including meeting domestic demand, supplying foreign markets, and participating in international trade.",
  },
  {
    src: "/whatwedo/storage-tank.jpeg",
    title: "Fuel Storage Rental",
    content:
      "At albaderdiesel, we provide a cost-effective alternative to permanent storage facilities. Storage tank rental services provide businesses with access to temporary or long-term storage solutions.",
  },
  {
    src: "/whatwedo/marine-oil.jpg",
    title: "MARINE GAS OIL",
    content:
      "Marine oil, also known as marine fuel oil or bunker fuel, is a type of fuel used to power ships and vessels.Marine oil is specifically formulated to meet the unique requirements of marine diesel engines and albaderdiesel is one of the best provider with most significant operating costs for maritime transport.",
  },
];

const listView = () => {
  return (
    <section className="bg-secondary">
      <div className="container space-y-8">
        <h1 className="text-center">Services</h1>
        <p className="text-center">
          With the kind of experience our team members possess and the overall
          size of construction projects in our company’s portfolio – we are sure
          that any task, even the most complex one is our cup of tea!
        </p>
        <div className="grid grid-cols-3  md:grid-cols-3 lg:grid-cols-3 gap-8">
          {serviceInfo.map((service) => (
            <div
              key={service.title}
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300"
            >
              <Image
                src={service.src}
                alt="service"
                className="w-full h-80 object-cover rounded-t-xl"
                width={250}
                height={250}
              />
              <div className="p-4">
                <h2 className="font-bold mb-2">{service.title}</h2>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default listView;
