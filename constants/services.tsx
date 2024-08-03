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
        <PiMonitor className="size-5 text-blue-600" />
      </div>
    ),
    title: "Website Design",
    description:
      "We build fully responsive websites that look great on all devices. Our websites are designed to convert visitors into customers.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiStorefront className="size-5 text-blue-600" />
      </div>
    ),
    title: "E-commerce Store",
    description:
      "From small stores to large online retailers, we have the expertise to build a store that will help you grow your business.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiLock className="size-5 text-blue-600" />
      </div>
    ),
    title: "Authentication",
    description:
      "Secure authentication solutions for your website or app. We use the latest technology to keep your data safe.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiAppStoreLogo className="size-5 text-blue-600" />
      </div>
    ),
    title: "App Development",
    description:
      "We build custom mobile apps for iOS and Android. Our apps are designed to be user-friendly and performant.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiMegaphone className="size-5 text-blue-600" />
      </div>
    ),
    title: "Social Media",
    description:
      "We offer social media management and ad creation services. We can help you grow your social media presence and reach new customers.",
  },
  {
    icon: (
      <div className="p-4 border rounded-3xl border-text">
        <PiHeadsetFill className="size-5 text-blue-600" />
      </div>
    ),
    title: "Saas",
    description:
      "We build custom software as a service (SaaS) solutions. From MVP to full-scale product, we can help you bring your idea to life.",
  },
];
