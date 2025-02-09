import Image from "next/image";

const OverView = () => {
  return (
    <section className="bg-primary">
      <div className="container flex flex-col md:flex-row gap-8 ">
        <div className="space-y-8">
          <h1 className="text-primary-foreground">Overview</h1>
          <p className="text-primary-foreground">
            Founded in 2014, Al Bader Diesel Trading LLC has been a trusted name
            in fuel distribution across the UAE. Serving all Emirates, we supply
            high-quality petroleum products to large industries, Government
            sector, civil construction projects, and transportation companies,
            ensuring seamless operations for businesses that drive the nation’s
            progress.
          </p>

          <p className="text-primary-foreground">
            With a dedicated fleet of delivery vehicles, we guarantee efficient,
            timely, and cost-effective fuel supply to meet our clients' growing
            demands. Our commitment to quality, reliability, and competitive
            pricing makes us the preferred partner for industries that depend on
            uninterrupted energy solutions.
          </p>
          <p className="text-primary-foreground">
            At Al Bader Diesel Trading LLC, we don’t just deliver our products,
            we power businesses, drive efficiency, and success.
          </p>
        </div>

        <video
          src="/albadar.mp4" // Ensure the video file is placed in the public folder
          className="rounded-lg w-[500px] h-[500px] object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default OverView;
