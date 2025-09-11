import { MortgageSection } from "@/components/mortgage/mortgage-section";
import React from "react";

interface Props {}

const MortgagePage: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <div className="bg-gray-100">
        <MortgageSection />

      </div>
    </React.Fragment>
  );
};

export default MortgagePage;
