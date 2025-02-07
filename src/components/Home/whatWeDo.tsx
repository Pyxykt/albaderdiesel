import Image from "next/image";

const WhatWeDo = () => {
  const companyInfo = [
    {
      src: "/expertise/exploration-and-extraction.jpg",
      title: "Exploration and Extraction",
      content:
        "Leveraging cutting-edge technology, we explore and extract energy resources efficiently and responsibly",
    },
    {
      src: "/expertise/refining-distribution.jpg",

      title: "Refining and Distribution",
      content:
        "From refining processes to streamlined distribution, we ensure top-notch quality at every step of the way",
    },
    {
      src: "/expertise/trade-relations.jpg",

      title: "Trade Relations",
      content:
        "Our strong and successful trade relations with key players in both state and private sectors position us as a reliable partner in the industry.",
    },
    {
      src: "/expertise/supply-chain-solutions.jpg",

      title: "Supply Chain Solutions",
      content:
        "We add value at every stage of the supply chain – accessing hard-to-reach locations, offering technical advice, and ensuring on-time delivery of commodities globally.",
    },
  ];
  return (
    <section>
      <div className="container space-y-8">
        <h1 className="text-center">What We Do</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companyInfo.map((info, index) => (
            <div
              key={index}
              className="space-y-4 rounded-xl border shadow-lg hover:scale-105 transition ease-in-out delay-150 duration-300"
            >
              <Image
                src={info.src}
                alt="service"
                className="w-full h-80 object-cover rounded-t-xl"
                width={250}
                height={250}
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

export default WhatWeDo;
