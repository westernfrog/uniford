import Collabs from "./components/Collabs";
import Container from "./components/Container";
import FAQs from "./components/FAQs";
import Overview from "./components/Overview";

export default function Home(params) {
  return (
    <>
      <Container>
        <Overview />
        <section className="flex flex-col md:flex-row xl:flex-col flew-col gap-6">
          <FAQs />
          <Collabs />
        </section>
      </Container>
    </>
  );
}
