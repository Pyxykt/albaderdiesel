import Image from "next/image";

const OverView = () => {
  return (
    <section className="bg-primary">
      <div className="container flex flex-col md:flex-row gap-8 ">
        <div className="space-y-8">
          <h1 className="text-primary-foreground">Overview</h1>
          <p className="text-primary-foreground">
          Arapco FZE was established in 2018 by a group of seasoned industry professionals with expertise in oil trading and logistics. Initially focused on regional markets, Arapco has steadily expanded its operations to become a prominent player in the global oil trading arena.
          </p>

          <p className="text-primary-foreground">
          Arapco fze is committed to delivering superior value to its clients through efficient and transparent oil trading practices. Integrity, reliability, and sustainability are at the core of its operations, ensuring long-term partnerships and mutual success.
          </p>
        </div>

        <Image
          src="/hero.jpeg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default OverView;
