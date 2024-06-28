const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Descriptive text goes here"
      ></img>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="px-6 pt-14 lg:px-8 text-[#e7e5e4]">
          <div className="mx-auto max-w-lg py-32 sm:py-48 lg:py-56">
            <div>
              <div className="text-center">
                <p className="mt-6 text-base leading-8 font-light uppercase tracking-widest">
                  Welcome to Naz Soham
                </p>
                <h1 className="text-7xl font-semibold tracking-tight sm:text-6xl">
                  Fine Indian
                </h1>
                <h1 className="text-7xl font-semibold tracking-tight sm:text-6xl">
                  Dining
                </h1>
                <p className="mt-6 text-lg leading-8 tracking-wide">
                  Finest Indian Restaurant in Soham
                </p>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="border-double border-4 border-white px-8 py-3.5 text-md font-semibold shadow-sm hover:scale-105 ease-in-out duration-300 transform"
                >
                  Book a Table
                </a>

                <a
                  href="#"
                  className="border-double border-4 border-white px-8 py-3.5 text-md font-semibold leading-6 hover:scale-105 ease-in-out duration-300 transform"
                >
                  View Menus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;