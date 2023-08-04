import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

export const Navbar = styled("nav", {
  background: "$grey0",
  borderBottom: "2px solid $brand1",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});

export const Buttons = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.75rem 1.5rem",
  borderRadius: "0.375rem",
  fontWeight: 500,
  cursor: "pointer",
  backgroundColor: "$brand1",
  color: "$white",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "$brand1",
  },
});

export const NavBtn = styled("div", {
  border: "solid 1px",
  padding: "10px",
  borderRadius: "8px",
  "&:hover": {
    color: "$brand1",
  },
});


