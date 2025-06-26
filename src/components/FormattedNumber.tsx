
import React from "react";
import { formatNumber } from "@/utils/numberFormatter";

interface FormattedNumberProps {
  value: number | string;
  className?: string;
}

const FormattedNumber: React.FC<FormattedNumberProps> = ({ value, className = "" }) => {
  return (
    <span className={className}>
      {formatNumber(value)}
    </span>
  );
};

export default FormattedNumber;
