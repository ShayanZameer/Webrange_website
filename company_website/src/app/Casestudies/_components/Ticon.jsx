import Image from "next/image";
import React from "react";

const Ticon = ({ url, text }) => {
  return (
    <Image src={url} alt={text} width={40} height={40} className="w-10 h-10" />
  );
};

export default Ticon;
