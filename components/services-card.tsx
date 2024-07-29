
import { services } from "@/constants/services";
import { ServicesCardEfect } from "./aceternity/services-card-effect";

export function ServicesCards() {
  return (
    <div className="max-w-9xl mx-auto px-5 ">
      <ServicesCardEfect items={services} />
    </div>
  );
}
