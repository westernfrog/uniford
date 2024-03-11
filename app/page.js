import Container from "./components/Container";
import FAQs from "./components/FAQs";
import Overview from "./components/Overview";

export default function Home(params) {
  return (
    <>
      <Container>
        <Overview />
        <FAQs />
      </Container>
    </>
  );
}
