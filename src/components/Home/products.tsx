import Image from "next/image";

const Products = () => {
  const product = [
    {
      src: "/products/crude-oil.jpg",
      title: "Crude Oil",
    },
    {
      src: "/products/base-oil.jpg",
      title: "Base Oil",
    },
    {
      src: "/products/ultra-low-sulphur.jpg",
      title: "Gas Oil - Ultra Low Sulphur",
    },
    {
      src: "/products/gas-oil-low-sulphur.jpg",
      title: "Gas Oil - Low Sulphur",
    },
    {
      src: "/products/gas-oil-high-sulphur.jpg",
      title: "Gas Oil - High Sulphur",
    },
    {
      src: "/products/kerosine.jpg",
      title: "Kerosine",
    },
    {
      src: "/products/furnace-oil.jpg",
      title: "Furnace Oil",
    },
    {
      src: "/products/fuel-oil.jpg",
      title: "Fuel Oil",
    },
    {
      src: "/products/rental-tanker.jpg",
      title: "Rental Tanker",
    },
    {
      src: "/products/storage-tank.jpg",
      title: "Storage Tank",
    },
  ];
  return (
    <section>
      <div className="container space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.map((info, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300 bg-[#3fa7b2] py-10"
            >
              <Image
                src={info.src}
                alt="service"
                className="mx-auto rounded-lg"
                width={75}
                height={75}
              />

              <h2 className="font-bold text-center">{info.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
