import { Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

export const contactInfo = [
  {
    icon: MapPin, // Store function reference, not JSX
    title: "Address",
    content: "Al Jiddah Street Al Jurf Industrial Area-2, Ajman",
    href: "https://maps.app.goo.gl/CsAB7o2X5F6ayuGz8",
  },
  {
    icon: Mail,
    title: "Email",
    content: "albaderdiesel@outlook.com",
    href: "mailto:albaderdiesel@outlook.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+971 065460500",
    href: "tel:+971065460500",
  },
  {
    icon: MessageCircleMore,
    title: "WhatsApp",
    content: "+971 502201975",
    href: "tel:+971502201975",
  },
];
