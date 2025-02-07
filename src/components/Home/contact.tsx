import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin />,
      title: "Address",
      content: "Al Jiddah Street Al Jurf Industrial Area-2, Ajman",
      href: "https://maps.app.goo.gl/CsAB7o2X5F6ayuGz8",
    },
    {
      icon: <Mail />,
      title: "Email",
      content: "albaderdiesel@outlook.com",
      href: "mailto:albaderdiesel@outlook.com",
    },
    {
      icon: <Phone />,
      title: "Phone",
      content: "+971 065460500",
      href: "tel:+971065460500",
    },
  ];
  return (
    <section className="bg-secondary">
      <div className="container space-y-8 flex flex-wrap gap-8">
        <iframe
          title="Company Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21706.3752461224!2d55.51882318756264!3d25.43711339254429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f76203da2fc9%3A0x67d0ab1ca42a221e!2sJurf%20Industrial%20Zone%202!5e0!3m2!1sen!2sin!4v1738962310492!5m2!1sen!2sin"
          width={600}
          height={450}
          loading="lazy"
          id="map"
        ></iframe>
        <div>
          <h1 className="text-center">Contact</h1>
          <div>
            {contactInfo.map((info, index) => (
              <div key={index}>
                <div className="p-4">
                  <h2 className="font-bold flex gap-2 mb-1">
                    {info.icon}
                    {info.title}
                  </h2>
                  <p>
                    <Link href={info.href}>{info.content}</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
