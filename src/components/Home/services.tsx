import Image from "next/image";

const Services = () => {
  const data = [
    {
      src: "/whatwedo/gas-oil-1.jpeg",
      title: "Gasoil (10 PPM, MGO, 5000 PPM)",
      content:
        "Premium-grade diesel fuel suitable for industrial, marine, and automotive applications. We offer multiple specifications to meet various operational needs.",
    },
    {
      src: "/whatwedo/export.jpg",
      title: "Gasoline",
      content:
        "A high-performance fuel that ensures optimal engine efficiency and reduced emissions for transportation and industrial use.",
    },
    {
      src: "/whatwedo/storage-tank-1.jpeg",
      title: "Bunker Fuel",
      content:
        "A reliable and efficient marine fuel for ships, offshore vessels, and bunkering operations, ensuring compliance with IMO regulations.",
    },
    {
      src: "/whatwedo/marine-oil.jpg",
      title: "Kerosene",
      content:
        "A versatile, clean-burning fuel ideal for aviation, heating, and industrial applications.",
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
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300 flex w-full"
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
