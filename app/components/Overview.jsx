import Link from "next/link";
import Info from "./Info";

export default function Overview(params) {
  return (
    <>
      <main className="basis-2/3 flex items-center justify-center gap-4 p-6 bg-white rounded-xl shadow-sm">
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
          <hr className="py-2" />
          <Info />
        </div>
      </main>
    </>
  );
}
