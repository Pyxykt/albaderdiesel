import Image from "next/image";

const Products = () => {
  const product = [
    {
      src: "/products/gasoil.png",
      title: "Gas Oil",
    },
    {
      src: "/products/gasoline.png",
      title: "Gasoline",
    },
    {
      src: "/products/bunker_fuel.png",
      title: "Bunker fuel",
    },
    {
      src: "/products/kerosene.png",
      title: "Kerosene",
    }
  ];
  return (
    <section>
      <div className="container space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {product.map((info, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300 bg-primary py-10"
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
