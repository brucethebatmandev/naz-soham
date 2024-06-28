const About = () => {
  return (
    <div className="px-14 mt-24 flex flex-col gap-[12rem] items-center mb-20">
      <div className="flex flex-col items-center justify-center gap-8 text-center max-w-3xl">
        <h1 className="text-md uppercase tracking-widest">
          Naz Soham Indian Restaurant
        </h1>
        <h2 className="text-4xl">
          The finest Indian cuisine in the very heart of Soham
        </h2>
        <p className="text-lg">
          The Light of India restaurant is a classNamey and elegant Indian
          restaurant established in 1984. Our culinary philosophy is deceptively
          simple. We celebrate the very best of Indian food. Indian cuisine
          reflects a 5,000-year history of various cultures interacting with the
          subcontinent, leading to its diversity of flavours and regional
          cuisines. The Northern Indian cuisine, which has been influenced by
          the Moguls, consists mainly of dishes & breads cooked in the clay oven
          “tandoor” accompanied by meats and vegetables slowly cooked in sauces,
          which are expertly seasoned according to the type of dish.
        </p>

        <a
          href="#"
          className="border-double border-4 border-slate-700 px-8 py-3.5 text-md font-semibold shadow-sm hover:scale-105 ease-in-out duration-300 transform"
        >
          Book a Table
        </a>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-28">
        <img
          className="h-full w-full max-w-lg md:max-w-xl lg:max-w-md xl:max-w-xl object-cover rounded-md shadow-xl"
          src='/img/food-pic-1.jpg'
          alt=""
        ></img>

        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-xl lg:max-w-md">
          <h1 className="text-4xl">Cooking Style</h1>
          <h2 className="text-md uppercase tracking-widest">
            The finest Indian cuisine in the very heart of Soham
          </h2>
          <p className="text-lg">
            Our cuisine is an extraordinary combination of flavours, delicate
            seasonings, in- house freshly ground spices, marinades, and complex
            tastes. Using only fresh and locally sourced ingredients, Head Chef
            Kumar reinterprets nostalgic Northern Indian dishes with an openness
            towards global techniques and influences, highlighting distinctly
            Indian flavours.
          </p>

          <a
            href="#"
            className="border-double border-4 border-slate-700 px-8 py-3.5 text-md font-semibold shadow-sm hover:scale-105 ease-in-out duration-300 transform"
          >
            View Menus
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-14 lg:gap-28">
        <img
          className="h-full w-full max-w-lg md:max-w-xl lg:max-w-md xl:max-w-xl object-cover rounded-md shadow-xl"
          src='/img/drinks-pic-1.jpg'
          alt=""
        ></img>

        <div className="flex flex-col items-center justify-center gap-8 text-center max-w-xl lg:max-w-md">
          <h1 className="text-4xl">Gallery</h1>
          <h2 className="text-md uppercase tracking-widest">
            The finest Indian cuisine in the very heart of Soham
          </h2>
          <p className="text-lg">
            Our cuisine is an extraordinary combination of flavours, delicate
            seasonings, in- house freshly ground spices, marinades, and complex
            tastes. Using only fresh and locally sourced ingredients, Head Chef
            Kumar reinterprets nostalgic Northern Indian dishes with an openness
            towards global techniques and influences, highlighting distinctly
            Indian flavours.
          </p>

          <a
            href="#"
            className="border-double border-4 border-slate-700 px-8 py-3.5 text-md font-semibold shadow-sm hover:scale-105 ease-in-out duration-300 transform"
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
