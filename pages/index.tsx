import Layout from "components/Layout";
import Banner from "components/Banner";
import About from "components/About";
import Services from "components/Services";
import CallToMe from "components/CallToMe";
import Wrapper from "components/Wrapper";
import Contact from "components/Contact";

export default function Home(): JSX.Element {
  return (
    <Layout title="BH | Головна">
      <Banner
        title="Привіт я Марія"
        desc="Я допоможу тобі зробити твоє волося гарним а тебе щасливою"
        img="images/maria.png"
        btnText="Написати"
      />
      <Wrapper light>
        <About
          desc={[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.",
          ]}
        />
      </Wrapper>
      <Wrapper>
        <Services />
      </Wrapper>
      <Wrapper light>
        <CallToMe />
      </Wrapper>

      <Wrapper>
        <Contact />
      </Wrapper>
    </Layout>
  );
}
