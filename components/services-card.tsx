
import { services } from "@/constants/services";
import { ServicesCardEfect } from "./aceternity/services-card-effect";

export function ServicesCards() {
  return (
    <div className="w-full md:max-w-9xl  md:mx-auto md:px-5">
      <ServicesCardEfect items={services} />
    </div>
  );
}
