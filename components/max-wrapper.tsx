export const MaxWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="pt-10 md:pt-[5rem] flex flex-col gap-10 md:gap-24 px-5  md:px-14 lg:px-20 overflow-x-hidden max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};
