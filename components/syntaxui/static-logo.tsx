import { cn } from "@/lib/utils";

const logos = [
  {
    name: "Techtonic Community",
    url: "/logo/techtonic.png",
    imgSize: "w-28 h-auto",
  },
];

const StaticLogo = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="flex w-full items-center justify-center">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={logo.url}
              className={cn(
                "brightness-0  dark:invert pointer-events-none select-none",
                logo.imgSize
              )}
              alt={`${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticLogo;
