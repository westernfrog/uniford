"use client";

import Link from "next/link";
import OrganInfo from "./OrganInfo";
import MonthlyDonation from "./MonthlyDonation";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import IndivInfo from "./IndivInfo";
import { InfoCircledIcon, TriangleDownIcon } from "@radix-ui/react-icons";

export default function Overview(params) {
  return (
    <>
      <main className="lg:basis-2/3 p-6 bg-white rounded-xl shadow-sm">
        <div className="space-y-4">
          <h1 className="text-3xl tracking-tight font-semibold">
            Help us to do more
          </h1>
          <p>
            We&apos;ll get right to the point: we&apos;re asking you to help
            support Uniford. We&apos;re a nonprofit that relies on support from
            people like you. If everyone reading this gives $2 monthly, Uniford
            can continue to thrive for years. Please help keep Uniford free, for
            anyone, anywhere forever.
          </p>
          <h1 className="font-medium">
            Did you know you might be able to double your gift?{" "}
            <Link
              href="/"
              className="underline underline-offset-4 italic font-semibold"
            >
              Check to see if your employer mathces
            </Link>
          </h1>
          <div className="flex items-center gap-1 italic font-semibold pb-5">
            <Link href="/" className="underline underline-offset-4">
              What to know about tax benefits?
            </Link>
            <span>Check FAQ&apos;s</span>
          </div>
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
w-[50%] rounded-sm py-3 font-semibold 
                      ${
                        selected
                          ? "bg-[#B9E390] text-black"
                          : "bg-transparent text-[#B9E390] border border-neutral-500"
                      }`}
                  >
                    Individual
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`
w-[50%] rounded-sm py-3 font-semibold
                      ${
                        selected
                          ? "bg-[#B9E390] text-black"
                          : "bg-transparent text-[#B9E390] border border-neutral-500"
                      }`}
                  >
                    Organisation
                  </button>
                )}
              </Tab>
            </Tab.List>
            <div className="py-4">
              <label htmlFor="country" className="block font-medium leading-6">
                How often would you like to donate?
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#B9E390] sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Monthly</option>
                  <option>Yearly</option>
                  <option>Quaterly</option>
                </select>
              </div>
            </div>
            <div className="">
              <h1>Choose a monthly amount</h1>
              <div className="flex flex-wrap items-center gap-3 my-3">
                <button className="bg-[#B9E390] px-7 py-2 rounded-lg shadow-lg">
                  ₹ 3000
                </button>
                <button className="ring-1 ring-black px-7 py-2 rounded-lg">
                  ₹ 5000
                </button>
                <button className="ring-1 ring-black px-7 py-2 rounded-lg">
                  ₹ 9000
                </button>
                <div className="flex rounded-lg shadow-sm ring-1 ring-inset ring-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#B9E390] sm:max-w-md">
                  <span className="flex select-none items-center pl-3 sm:text-sm">
                    Rs.
                    <TriangleDownIcon className="w-5 h-5" />
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 rounded-r-lg bg-transparent py-2 pl-1 text-gray-900 placeholder:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Others"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                class="h-4 w-4 rounded border-black text-[#B9E390] focus:ring-[#B9E390]"
              />
              <h1 className="text-sm">
                Dedicate my donation in honor or in memory of someone
              </h1>
            </div>
            <hr className="py-2" />
            <Tab.Panels>
              <Tab.Panel>
                <OrganInfo />
              </Tab.Panel>
              <Tab.Panel>
                <IndivInfo />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
          <MonthlyDonation />
        </div>
      </main>
    </>
  );
}
