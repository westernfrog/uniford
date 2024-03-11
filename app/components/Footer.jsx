import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TriangleUpIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

const socials = [
  { name: "Instagram", href: "/", icon: InstagramLogoIcon },
  { name: "LinkedIn", href: "/", icon: LinkedInLogoIcon },
  { name: "Github", href: "/", icon: GitHubLogoIcon },
  { name: "Discord", href: "/", icon: DiscordLogoIcon },
  { name: "Twitter", href: "/", icon: TwitterLogoIcon },
];

export default function Footer(params) {
  return (
    <>
      <footer className="lg:p-10 p-8 bg-[#DCF1C7] text-[#103310] flex flex-col gap-6">
        <div className="text-center">
          <h1 className="lg:text-3xl text-2xl font-semibold tracking-tight">
            Unlock potential, empower futures. Donate to education today
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-6 border-y border-black/50 py-10 my-2">
          <div className="flex lg:flex-col items-center gap-4">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Uniford Logo"
              className="w-16 h-16"
            />
            <h1 className="font-semibold text-lg">In India, For the world!</h1>
          </div>
          <div className="space-y-4 tracking-tight">
            <button className="font-semibold flex items-center gap-1">
              Back to Top <TriangleUpIcon className="w-6 h-6" />
            </button>
            <h1>Doner Support</h1>
            <Link href="mailto:donate@uniford.org">donate@uniford.org</Link>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:gap-10 gap-x-8 gap-y-4 lg:p-0 p-4">
          {socials.map((item, index) => (
            <Link key={index} target="_blank" href={item.href}>
              <item.icon className="w-7 h-7" />
            </Link>
          ))}
        </div>
      </footer>
    </>
  );
}
