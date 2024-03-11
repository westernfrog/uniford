"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import logo from "../../public/logo.png";
import i1 from "../../public/Vector (1).svg";
import i2 from "../../public/Vector (2).svg";
import i3 from "../../public/Vector (3).svg";
import i4 from "../../public/Vector (4).svg";
import i5 from "../../public/Vector (5).svg";
import i6 from "../../public/Vector (6).svg";

const navigation = [
  { name: "Review", href: "/", icon: i1 },
  { name: "Tools", href: "/", icon: i2 },
  { name: "University", href: "/", icon: i3 },
  { name: "Resource", href: "/", icon: i4 },
  { name: "Scholarship", href: "/", icon: i5 },
  { name: "Rewards", href: "/", icon: i6 },
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
                className="w-12 h-12"
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
                  item.href === router ? "font-semibold" : ""
                } hover:font-semibold ease-in-out transition-all duration-300`}
              >
                <Image
                  src={item.icon}
                  width={50}
                  height={50}
                  alt={item.name}
                  className="w-5 h-5"
                />
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
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full bg-white overflow-y-auto p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
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
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <Cross1Icon className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4 mt-6">
              {navigation.map((item) => (
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2 font-semibold flex items-center gap-3 text-xl"
                >
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    alt={item.name}
                    className="w-5 h-5"
                  />
                  {item.name}
                </Link>
              ))}
              <Link
                target="_blank"
                href="/"
                className="rounded-lg px-3 py-3 font-semibold flex items-center justify-center gap-3 text-xl bg-[#B9E390]"
              >
                Donate
              </Link>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
