export default function OrganInfo(params) {
  return (
    <>
      <section className="flex flex-col gap-4 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          Your Information
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-6 col-span-12">
            <label
              htmlFor="username"
              className="xl:block hidden text-sm font-medium leading-6"
            >
              Organisation Name
            </label>
            <div className="mt-2">
              <div className="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
                <input
                  type="text"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-2.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder=" Organisation Name"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <label
              htmlFor="username"
              className="xl:block hidden text-sm font-medium leading-6"
            >
              Owner Name
            </label>
            <div className="mt-2">
              <div className="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
                <input
                  type="text"
                  autoComplete="name"
                  className="block flex-1 border-0 bg-transparent py-2.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Owner Name"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12">
            <label
              htmlFor="username"
              className="xl:block hidden text-sm font-medium leading-6"
            >
              Organisation Mail ID
            </label>
            <div className="mt-2">
              <div className="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
                <input
                  type="email"
                  autoComplete="tel"
                  className="block flex-1 border-0 bg-transparent py-2.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Organisation Main ID"
                />
              </div>
              <p className="text-xs py-2">your receipt will be emailed here.</p>
              <h1 className="text-sm">
                By donating you agree our terms and conditions.
              </h1>
            </div>
          </div>
          <div className="lg:col-span-6 col-span-12 lg:block hidden"></div>
          <div className="lg:col-span-6 col-span-12">
            <label
              htmlFor="username"
              className="xl:block hidden text-sm font-medium leading-6"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <div className="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
                <input
                  type="tel"
                  autoComplete="tel"
                  className="block flex-1 border-0 bg-transparent py-2.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
