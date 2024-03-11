export default function Info(params) {
  return (
    <>
      <section className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-semibold tracking-tight">
          Your Information
        </h1>
        <div className="grid grid-cols-12 gap-4">
          <div class="sm:col-span-6">
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Organisation Name
            </label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div class="sm:col-span-6">
            <label
              for="username"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Owner Name
            </label>
            <div class="mt-2">
              <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="name"
                  class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
