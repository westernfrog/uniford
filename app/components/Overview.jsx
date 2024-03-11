"use client";

import Link from "next/link";
import OrganInfo from "./OrganInfo";
import MonthlyDonation from "./MonthlyDonation";
import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import IndivInfo from "./IndivInfo";

export default function Overview(params) {
  return (
    <>
      <main className="lg:basis-2/3 p-6 bg-white rounded-xl shadow-sm">
        <div className="space-y-4">
          <h1 className="lg:text-3xl text-2xl tracking-tight font-semibold">
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
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#B9E390]">
                <label>HHH</label>
                <input
                  id="push-nothing"
                  name="push-notifications"
                  type="radio"
                />
              </div>
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
