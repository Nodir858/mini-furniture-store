import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <>
      <div className="w-full p-2 md:w-[80%] md:m-auto">
        <div className="flex-col md:flex md:flex-row">
          {category.map((category, key) => (
            <div className=" md:h-auto md:w-auto" key={key}>
              <div className="relative">
                {category.img && (
                  <div className="md:overflow-hidden mb-7 p-5 md:p-1 md:w-full md:relative md:rounded-3xl">
                    <img
                      src={category.img}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-3xl hover:scale-110  transition-all ease-in-out duration-700"
                    />
                    <p className="bottom-5 absolute md:absolute rounded-full rounded-s-none p-3 border-white bg-white md:bottom-0 md:left-0 text-xl capitalize">
                      {category.name}
                    </p>
                  </div>
                )}
                {category.imgs && category.imgs.length > 0 && (
                  <div>
                    {category.imgs.map((image, index) => (
                      <div
                        key={index}
                        className="relative mb-4 overflow-hidden p-5 md:p-0 md:rounded-3xl"
                      >
                        <img
                          src={image.img}
                          alt={image.name}
                          className="rounded-3xl w-full h-full object-cover hover:scale-110  transition-all ease-in-out duration-700"
                        />
                        <p className="absolute rounded-3xl rounded-s-none p-3 border-white bg-white bottom-0 text-xl capitalize">
                          {image.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
