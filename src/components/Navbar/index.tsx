import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
  Buttons,
  NavBtn
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="btLink" className="navBtn" as="a" color="grey4" href={`#home`}>
      <NavBtn>
        Home
      </NavBtn>
      </Button>
      <Button type="btLink" className="navBtn" as="a" color="grey4" href={`#aboutme`}>
      <NavBtn>
        About Me
      </NavBtn>  
      </Button>
      <Button type="btLink" className="navBtn" as="a" color="grey4" href={`#projects`}>
      <NavBtn>
        Projects
      </NavBtn>
      </Button>
      <Button type="btLink" className="navBtn" as="a" color="grey4" href={`#contact`}>
      <NavBtn>
        Contact
      </NavBtn>  
      </Button>
      <Button type="btLink" className="navBtn" as="a" color="grey4" href={`#social-media`}>
      <NavBtn>
        Social Media
      </NavBtn>  
      </Button>
    </NavbarLinks>
  );
};
