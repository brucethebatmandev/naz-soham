"use client";

import { useState, useEffect } from "react";
import { MenuCategory } from "@/menu.types";
import { BsChevronRight } from "react-icons/bs"; // Import icons

interface MenuProps {
  menuList: MenuCategory[];
}

const Menu: React.FC<MenuProps> = ({ menuList }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() =>
    menuList.map((_, index) => index + 1)
  );
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Function to toggle index
  const toggleIndex = (index: number) => {
    if (!openIndexes.includes(index)) {
      setOpenIndexes((prevOpenIndexes) => [...prevOpenIndexes, index]);
    } else {
      setOpenIndexes((prevOpenIndexes) =>
        prevOpenIndexes.filter((i) => i !== index)
      );
    }
  };

  // Function to handle resizing
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Effect hook to handle resizing
  useEffect(() => {
    handleResize(); // Initial resizing

    const handleResizeDebounced = debounce(handleResize, 250); // Debounce resizing to improve performance
    window.addEventListener("resize", handleResizeDebounced); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResizeDebounced); // Cleanup event listener
    };
  }, []); // Empty dependency array to ensure effect runs only once on component mount

  // Function to debounce resize event
  const debounce = (fn: Function, delay: number) => {
    let timeoutId: any;
    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  };

  return (
    <div className="my-24 flex flex-col justify-center items-center">

      <h1 className="text-6xl">Menu</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center">

        {menuList.map((category, index) => (
          <div key={category.id} className="flex flex-col p-10 w-full max-w-xl">

            <div className="flex items-baseline justify-between">
              <h2 className="text-4xl">{category.name}</h2>

              {/* Arrow Icon */}
              <div className="lg:hidden" onClick={() => toggleIndex(index + 1)}>
                <BsChevronRight
                  className={`text-3xl text-gray-500 hover:text-gray-800 transform transition-transform duration-200 hover:cursor-pointer ${
                    openIndexes.includes(index + 1) ? "rotate-90" : "" // Apply rotation if the index is in openIndexes
                  }`}
                />
              </div>
            </div>

            {/* Display category description if it exists */}
            {category.description && (
              <p className="text-sm">{category.description}</p>
            )}

            {/* Menu Items Container */}
            {(windowWidth < 1024 ? openIndexes.includes(index + 1) : true) && (
              <div className="flex flex-col gap-2 mt-4 lg:overflow-y-auto lg:max-h-[50rem] lg:pr-4">
                {category.menu_items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center justify-between"
                  >
                    <div className="w-3/4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                    <p>{item.price}</p>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default Menu;
