export default function Collabs(params) {
  return (
    <>
      <section className="bg-white p-6 rounded-xl shadow-sm h-[40%]">
        <h1 className="text-2xl font-semibold tracking-tight">
          For Collabs and Sponserships
        </h1>
        <form className="space-y-4 mt-4">
          <div class="flex lg:rounded-full rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-3 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Mail ID"
            />
          </div>
          <div class="flex lg:rounded-full rounded-full shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <input
              type="tel"
              name="name"
              id="name"
              autocomplete="tel"
              class="block flex-1 border-0 bg-transparent py-3 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Phone No."
            />
          </div>
          <div class="flex rounded-2xl shadow-sm ring-1 ring-inset ring-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390]">
            <textarea
              type="text"
              name="name"
              id="name"
              rows={5}
              autocomplete="name"
              class="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Description"
            />
          </div>
          <button
            type="submit"
            className="bg-[#B9E390] w-full py-3 rounded-xl font-semibold shadow-lg shadow-neutral-400 uppercase"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
