const Contact = () => {
    return (
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```


<div className="mt-20 mb-20 flex flex-col">

  <div className="flex flex-col items-center mb-5 lg:mb-20">
    <h1 className="text-6xl">Contact Us</h1>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2">
    
    
    <div className="flex flex-col justify-center md:bg-cover md:bg-center mx-8 lg:mx-12 rounded-md">

      <div className="flex flex-col gap-4 justify-center items-center relative bg-[#fafaed] h-full rounded-md py-12 tracking-wide">
        
        <div className="flex flex-col gap-3">          

          {/* Phone */} 
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <a href="" className="hover:cursor-pointer">
              <p>(+) 01353 721777</p>
            </a>
          </div>

          {/* Email */}
          <div className="flex gap-4">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <div className="flex flex-col items-center justify-center">
              <a href="" className="hover:cursor-pointer">
                <p>info@nazsoham.co.uk</p>
              </a>
            </div> 
          </div>
        
          {/* Address */} 
          <div className="flex gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <a href="" className="hover:cursor-pointer">
              <p>14-16 High Street, Soham, CB7 5HD</p>
            </a>
          </div>

        </div>


        {/* <!-- Opening Hours --> */}
        <div className="mx-auto w-56">
          <h2 className="mt-8 mb-2  text-lg">Opening Hours</h2>

          <div className="">
            <p className="flex justify-between gap-3">
              <span>Mon:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Tues:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Weds:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Thurs:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Fri:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Sat:</span>
              <span>5pm - 10pm</span>
            </p>
            <p className="flex justify-between gap-3">
              <span>Sun:</span>
              <span>5pm - 10pm</span>
            </p>
          </div>
        </div>

      </div>

    </div>


    {/* <!-- Contact Form --> */}
    <form action="#" method="POST"
      className="mx-auto mt-3 xl:mt-0 max-w-2xl sm:mt-20 lg:mt-0 px-10 md:px-0 w-full">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-gray-900">

        <div>
          <label className="block text-sm font-semibold leading-6">First name</label>
          <div className="mt-2.5">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name"
              className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold leading-6">Last name</label>
          <div className="mt-2.5">
            <input type="text" name="last-name" id="last-name" autoComplete="family-name"
              className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6">Email</label>
          <div className="mt-2.5">
            <input type="email" name="email" id="email" autoComplete="email"
              className="block w-full border-1 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6">Message</label>
          <div className="mt-2.5">
            <textarea name="message" id="message"  
            // rows="6"
              className="block w-full border-1 px-3.5 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>

      </div>

      <div className="mt-10">
        <button type="submit"
          className="block w-full px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 border-double border-4 border-slate-700 hover:border-slate-600">Send
          Message</button>
      </div>
    </form>

  </div>
</div>
    )
}

export default Contact