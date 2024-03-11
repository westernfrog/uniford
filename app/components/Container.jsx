export default function Container({ children }) {
  return (
    <>
      <main className="max-w-7xl mx-auto lg:flex lg:flex-row flex-col items-start lg:space-y-0 lg:space-x-6 space-y-6 p-6">
        {children}
      </main>
    </>
  );
}
