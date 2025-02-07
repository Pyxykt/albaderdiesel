import Image from "next/image";

const page = () => {
  const data = [
    {
      src: "/about/collaboration.jpg",
      src2: "/about/collaboration.jpg",
      title: "Core Values",
      content:
        "Accountability - We take responsibility for meeting corporate objectives and our customers' needs. We are accountable to ourselves and our customers, and we are committed to continuous improvement.\n\nIntegrity- We pride ourselves on our ethical standards when conducting our business, and we act with integrity and abide by all the rules, regulations and standards that have been put in place for and by our industry.\n\nExcellence- We drive for the best results and are agile when addressing new challenges. We set challenging goals, and foster creativity and innovation in meeting our customers' needs. We believe that excellence is not a destination but a journey that we are committed to.\n\nSafety- The safety and wellbeing of our workforce is our utmost priority, involving everyone at ATC. We operate the highest safety standards and reward outstanding safety achievements. Cause no accidents, no harm to people and no damage to the environment.",
    },
    {
      src: "/about/fuel-refinery.jpg",
      title: "OUR BUSINESS PRINCIPLES",
      content:
        "As a global energy trading company, we operate in a challenging and dynamic world. We set high standards for performance and ethical behaviour, and we are judged by how we act and live up to our core values of honesty, integrity, and respect for people. Our Business Principles are grounded in these values and promote trust, openness, teamwork, professionalism, and pride in our work and conduct.",
    },
    {
      src: "/about/quality.jpg",
      title: "Quality Assurance",
      content:
        "At albaderdiesel, quality assurance is a cornerstone of our operations. We are committed to maintaining the highest standards of quality in every aspect of our business, ensuring that our services and products consistently meet and exceed the expectations of our clients and stakeholders. Our robust quality assurance framework is designed to promote excellence, reliability, and continuous improvement.",
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
