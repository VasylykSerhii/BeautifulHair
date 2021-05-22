import Heading from "components/Heading";
import React from "react";
import { Container } from "@material-ui/core";
import {
  EmailRounded,
  LocationOn,
  Phone,
  Telegram,
  Instagram,
} from "@material-ui/icons";
import {
  Grid,
  InfoDesc,
  InfoItem,
  InfoLink,
  InfoLinksWrap,
  InfoTitle,
  InfoWrap,
} from "./styled-components";

function Contact() {
  return (
    <Container>
      <Heading title="Зв'яжіться зі мною" />
      <Grid>
        <InfoWrap>
          <InfoTitle>Мої дані:</InfoTitle>
          <InfoItem>
            <LocationOn />
            <InfoDesc>Самбірський р-н., с.Бісковичі</InfoDesc>
          </InfoItem>
          <InfoItem>
            <InfoLink href="mailto:vasylyk97@gmail.com">
              <EmailRounded />
              <InfoDesc>vasylyk97@gmail.com</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink href="tel:+380988803187">
              <Phone />
              <InfoDesc>+38 098 88 03 187</InfoDesc>
            </InfoLink>
          </InfoItem>
          <InfoTitle>В мережах:</InfoTitle>
          <InfoLinksWrap>
            <InfoLink href="tg://resolve?domain=masha_bukliv" target="_blank">
              <Telegram fontSize="small" />
            </InfoLink>
            <InfoLink
              href="http://instagram.com/_u/vasylyk_marusia/"
              target="_blank"
            >
              <Instagram fontSize="small" />
            </InfoLink>
          </InfoLinksWrap>
        </InfoWrap>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
          consequatur non dolores iure qui, nisi officia necessitatibus iste
          earum similique commodi voluptatum repellendus fugiat! Dolorem libero
          placeat numquam. Commodi, voluptatibus. Blanditiis, atque id? Aut
          deserunt, ipsam quos quasi minus sit, iste laudantium minima rerum
          quas iure vel. Libero reprehenderit magnam nobis totam neque ipsam,
          sunt eaque hic qui commodi unde. Temporibus amet architecto autem eos
          eaque quo cum nulla alias. Aut quis corporis rem voluptates maiores
          cumque dignissimos doloremque amet, illum repellendus harum nesciunt
          saepe. Autem aut atque hic voluptatibus. Id rem consectetur ducimus
          sunt quia delectus dolores fugiat voluptatibus necessitatibus?
          Voluptatum, accusamus ad sed quaerat iusto placeat facere! At, sequi
          accusamus. Magnam placeat quibusdam voluptate reprehenderit eaque
          tenetur voluptates!
        </div>
      </Grid>
    </Container>
  );
}

export default Contact;
