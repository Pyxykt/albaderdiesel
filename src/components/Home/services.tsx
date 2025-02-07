import Image from "next/image";

const Services = () => {
  const data = [
    {
      src: "/whatwedo/gas-oil.jpg",
      title: "Gas Oil",
      content:
        "Gas oil, also known as diesel fuel or diesel oil,throughout these years arapco has a reputation for providing the best quality gas oil as per customer demand.",
    },
    {
      src: "/whatwedo/export.jpg",
      title: "Export",
      content:
        "Arapco supply gas oil on demand including meeting domestic demand, supplying foreign markets, and participating in international trade.",
    },
    {
      src: "/whatwedo/storage-tank.jpeg",
      title: "Fuel Storage Rental",
      content:
        "At Arapco, we provide a cost-effective alternative to permanent storage facilities. Storage tank rental services provide businesses with access to temporary or long-term storage solutions.",
    },
    {
      src: "/whatwedo/marine-oil.jpg",
      title: "MARINE GAS OIL",
      content:
        "Marine oil, also known as marine fuel oil or bunker fuel, is a type of fuel used to power ships and vessels.Marine oil is specifically formulated to meet the unique requirements of marine diesel engines and Arapco is one of the best provider with most significant operating costs for maritime transport.",
    },
  ];

  return (
    <section className="bg-secondary">
      <div className="container space-y-8">
        <h1 className="text-center">Services</h1>
        <div className="flex flex-wrap gap-8">
          {data.map((info, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300 flex"
            >
              <Image
                src={info.src}
                alt="service"
                className="object-cover rounded-xl"
                width={250}
                height={75}
              />
              <div className="p-4">
                <h2 className="font-bold mb-2">{info.title}</h2>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
