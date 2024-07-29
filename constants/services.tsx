import {
  PiAppStoreLogo,
  PiHeadsetFill,
  PiLock,
  PiMegaphone,
  PiMonitor,
  PiStorefront,
} from "react-icons/pi";
export const services = [
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiMonitor className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiStorefront className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiLock className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiMegaphone className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiAppStoreLogo className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiHeadsetFill className="w-8 h-8 text-blue-600" />
      </div>
    ),
    title: "Support",
    description:
      "We offer support for all our clients. We are here to help you with any issues or questions you may have.",
  },
];
