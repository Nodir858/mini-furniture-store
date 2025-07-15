import React from "react";
import { footer } from "../data/Data";
const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="w-[80%] m-auto">
        <div className="flex justify-between py-14 gap-8">
          {footer.map((value, index) => (
            <div className="text-gray-100 w-[30%]" key={index}>
              <h1 className="text-2xl mb-5 text-white">{value.header}</h1>
              <p>{value.content1}</p>
              <p>{value.content2}</p>
              <p>{value.content3}</p>
              <p>{value.content4}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
