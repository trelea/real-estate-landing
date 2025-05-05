import React from "react";

interface Props {
  children: React.ReactNode;
}

export const LandingSections: React.FC<Props> = ({ children }) => {
  return (
    <section className="px-6 sm:px-11 lg:px-20 w-full flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-16 sm:gap-24 lg:gap-36 py-12 sm:py-20">
        {children}
      </div>
    </section>
  );
};
