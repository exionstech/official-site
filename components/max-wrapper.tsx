export const MaxWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="pt-[5rem] flex flex-col gap-36 px-20 overflow-x-hidden max-w-screen-xl mx-auto">
      {children}
    </div>
  );
};
