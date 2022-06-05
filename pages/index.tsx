import { Banner, About, Services, CallToMe, Wrapper, Contact, Layout } from 'components';
import { createRef } from 'react';

export default function Home(): JSX.Element {
  const contact = createRef<HTMLDivElement>();

  const goToContact = () => {
    contact.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <Layout.Default title="BH | Головна">
      <Wrapper>
        <Banner
          title="Привіт я Марія"
          desc="Я допоможу тобі зробити твоє волося гарним а тебе щасливою"
          // img="images/maria.png"
          btnText="Написати"
          btnFunc={goToContact}
        />
      </Wrapper>
      <Wrapper>
        <About
          desc={[
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nu pariatur excepteur sint occaecat.',
          ]}
        />
      </Wrapper>
      <Wrapper>
        <Services />
      </Wrapper>
      <Wrapper>
        <CallToMe btnFunc={goToContact} />
      </Wrapper>
      <Wrapper forwardedRef={contact}>
        <Contact />
      </Wrapper>
    </Layout.Default>
  );
}
