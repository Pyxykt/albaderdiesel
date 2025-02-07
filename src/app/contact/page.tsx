import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const ContactHome = () => {
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
    <>
      <div
        className="bg-cover bg-center h-[400px] text-primary-foreground text-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/hero.jpeg)`,
        }}
      >
        <h1 className="pl-24">Contact</h1>
      </div>
      <iframe
        title="Company Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.041454419947!2d55.51205050000001!3d25.470291200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9004d049197%3A0x9c15ee68562e6f88!2salbaderdiesel%20FZE!5e0!3m2!1sen!2sin!4v1714216361315!5m2!1sen!2sin"
        width={600}
        height={450}
        loading="lazy"
        id="map"
        className="w-full"
      ></iframe>

      <div className="flex flex-wrap gap-8 container items-center">
        <div>
          <h1>Contacts</h1>
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
    </>
  );
};

export default ContactHome;
