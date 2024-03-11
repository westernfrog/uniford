export default function MonthlyDonation(params) {
  return (
    <>
      <section className="grid grid-cols-12 gap-6 py-6 border-t">
        <div className="lg:col-span-6 col-span-12 text-2xl space-y-4">
          <h1>Monthly donation</h1>
          <h1>
            ₹ 3000 <span className="text-xs">Rs</span>
          </h1>
          <div className="flex items-center gap-2">
            <input
              id="comments"
              name="comments"
              type="checkbox"
              class="h-5 w-5 rounded border-black text-[#B9E390] focus:ring-[#B9E390]"
            />
            <p className="text-sm">
              Yes, I&apos;ll cover the transaction fees on Uniford can keep 100%
              of my donation.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 flex flex-col gap-4">
          <h1>Donate to your preferred payment</h1>
          <button className="hover:bg-[#B9E390] ring-1 ring-black hover:ring-0 py-3 rounded-xl hover:shadow-lg hover:shadow-gray-400 transition duration-200 ease-in-out">
            UPI
          </button>
          <button className="hover:bg-[#B9E390] ring-1 ring-black hover:ring-0 py-3 rounded-xl hover:shadow-lg hover:shadow-gray-400 transition duration-200 ease-in-out">
            Credit Card
          </button>
          <button className="hover:bg-[#B9E390] ring-1 ring-black hover:ring-0 py-3 rounded-xl hover:shadow-lg hover:shadow-gray-400 transition duration-200 ease-in-out">
            Bank Transfer
          </button>
        </div>
      </section>
    </>
  );
}
