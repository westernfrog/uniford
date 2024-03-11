export default function Container({ children }) {
  return (
    <>
      <main className="max-w-7xl mx-auto flex lg:flex-row flex-col items-start gap-4 p-6">
        {children}
      </main>
    </>
  );
}
