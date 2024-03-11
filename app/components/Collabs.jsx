export default function Collabs(params) {
  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-sm h-[40%]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight pb-2">
            For Collabs and Sponserships
          </h1>

          <div class="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Mail ID"
            />
          </div>
          <div class="flex lg:rounded-md rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Phone No."
            />
          </div>
          <div class="flex lg:rounded-md rounded-2xl shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <textarea
              type="text"
              name="name"
              id="name"
              rows={3}
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Description"
            />
          </div>
        </div>
      </section>
    </>
  );
}
