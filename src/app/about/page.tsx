import Image from "next/image";

const page = () => {
  const data = [
    {
      src: "/about/collaboration.jpg",
      src2: "/about/collaboration.jpg",
      title: "Our Mission",
      content:
        "Our Mission is truly aligned with our vision. We are committed to providing our clients with top-of-the-line customer services at par with the best industry standards and practices. Backed by high moral and integrity values, we fulfil all our commitments without any compromises on quality from the beginning of the project to the end.",
    },
    {
      src: "/about/fuel-refinery.jpg",
      title: "Our Vision",
      content:
        "The core of everything we do is powered by our vision to be an esteemed organization, driven by the right product and client-centric approach and to be in a commanding position in the local oil industry while spreading our wings in the global arena. It inspires our efforts to grow our businesses,customers and partners",
    },
    {
      src: "/about/quality.jpg",
      title: "Our Story",
      content:
        "Founded in 2014, Al Bader Diesel Trading LLC has been a trusted name in fuel distribution across the UAE. Serving all Emirates, we supply high-quality petroleum products to large industries, Government sector, civil construction projects, and transportation companies, ensuring seamless operations for businesses that drive the nation’s progress. With a dedicated fleet of delivery vehicles, we guarantee efficient, timely, and cost-effective fuel supply to meet our clients' growing demands. Our commitment to quality, reliability, and competitive pricing makes us the preferred partner for industries that depend on uninterrupted energy solutions.At Al Bader Diesel Trading LLC, we don’t just deliver our products, we power businesses, drive efficiency, and success.",
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center h-[400px] text-primary-foreground text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero.jpeg)`,
        }}
      >
        <h1 className="pl-24">about us</h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((info, index) => (
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
  );
};

export default page;
