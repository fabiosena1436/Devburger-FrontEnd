import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import React from "react"

import LogoImg from "../../assets/logo-image.svg"
import {
  Container,
  Img,
  LinkStyle,
  P,
  ContainerIcons,
  Line,
  Rights,
} from "./styles"

export function Footer() {
  return (
    <>
      <Container>
        <Img src={LogoImg} />
        <P>
          Este é apenas um projeto-piloto de uma hamburgueria fictícia com fins
          de aprendizado. Nenhuma das informações deste site são reais.
        </P>
        <ContainerIcons>
          <LinkStyle
            href="https://www.instagram.com/renan_jrrrr/"
            target="blank_"
          >
            <InstagramIcon style={{ height: 40, width: 40 }} />
          </LinkStyle>
          <LinkStyle
            href="#"
            target="blank_"
          >
            <FacebookIcon style={{ height: 40, width: 40 }} />
          </LinkStyle>
          <LinkStyle
            href="https://www.linkedin.com/in/fabio-vicente-de-sena/"
            target="blank_"
          >
            <LinkedInIcon style={{ height: 40, width: 40 }} />
          </LinkStyle>
        </ContainerIcons>
        <Line></Line>
      </Container>

      <Rights>
        <p>
          Copyrights © 2024 All Rights Reserved by <b>Fabio Sena</b>
        </p>
      </Rights>
    </>
  )
}
