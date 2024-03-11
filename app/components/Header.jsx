"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  EyeClosedIcon,
  GlobeIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "../../public/logo.png";

const navigation = [
  { name: "Review", href: "/", icon: GlobeIcon },
  { name: "Tools", href: "/", icon: GlobeIcon },
  { name: "University", href: "/", icon: GlobeIcon },
  { name: "Resource", href: "/", icon: GlobeIcon },
  { name: "Scholarship", href: "/", icon: GlobeIcon },
  { name: "Rewards", href: "/", icon: GlobeIcon },
];

export default function Header() {
  const router = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="p-6 bg-white shadow">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="sr-only">Uniford</span>
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Uniford Logo"
                className="w-14 h-14"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HamburgerMenuIcon className="w-8 h-8 stroke-[#5F8638]" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10 flex flex-row items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center text-sm leading-6 ${
                  item.href == router ? "font-semibold" : ""
                }   hover:font-semibold ease-in-out transition-all duration-300`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            ))}
            <Link
              target="_blank"
              href="/"
              className="font-semibold bg-[#B9E390] hover:bg-emerald-200 transition-colors duration-200 shadow py-2 px-10 rounded-xl"
            >
              Donate
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full bg-white overflow-y-auto p-5 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="sr-only">Uniford</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-base leading-7 flex items-center gap-3"
                    >
                      <item.icon />
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    target="_blank"
                    href="/"
                    className="font-semibold bg-[#B9E390] hover:bg-emerald-200 transition-colors duration-200 shadow py-2 px-10 rounded-xl"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
