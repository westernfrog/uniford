import Link from "next/link";

const faqs = [
  "Is this donation tax deductible",
  "How do I give by check?",
  "Do you accept employee matching gifts?",
  "Can I donate stock or make my donation by wire transfer?",
  "Do you accept cryptocurrency donations?",
  "Can I donate in a currency other than US dollars?",
  "How do I manage my recurring donation?",
  "How do I edit or cancel my recurring donation?",
  "Do you have an annual report?",
  "What is the Learner's Fund",
  "I have a question about my donation or financially supporting Uniford?",
  "Is there someone I can talk to if I am interested in becoming a corporate partner?",
  "Can I talk to someone on the phone?",
];

export default function FAQs(params) {
  return (
    <>
      <section className="basis-1/3 p-6 bg-white rounded-xl shadow-sm">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">FAQ&apos;s</h1>
          <ul className="space-y-4 list-disc px-4">
            {faqs.map((item, index) => (
              <li key={index}>
                <Link href="/">{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1 font-medium pt-4">
            <h1>Have an account?</h1>
            <Link href="/" className="text-[#40C640]">
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
