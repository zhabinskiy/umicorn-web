import { Meta, Header, Footer } from "../components";
import { About } from "../components";

export default () => (
  <>
    <Meta title="About" />
    <Header />
    <About.Hero />
    <About.Solutions />
    <About.Testimonial />
    <About.Gallery />
    <Footer />
  </>
);
