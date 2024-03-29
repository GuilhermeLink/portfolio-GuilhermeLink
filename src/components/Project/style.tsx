import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";

export const StyledDiv = styled("div", {
  display: "flex",
  alignItems: "center",
  marginBottom: "$3"
});

export const ProjectStack = styled(Flex, {
  margin: "1.25rem 0 1.25rem 0",
  "@mobileLittle": {
    flexDirection: "column",
    alignItems: "self-start",
  },
});

export const ProjectStackTech = styled("span", {
  backgroundColor: "$grey1",
  color: "$grey2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey5",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover": {
    color: "$grey5",
  },

  [`& svg`]: {
    marginRight: "$1",
  },
});

export const ProjectTitle = styled(Text, {});

export const Project = styled("article", {
  marginTop: "4rem",
  padding: "20px",
  borderRadius: "var(--radii-1)",
  backgroundColor: "$brand1",
  [`&:first-child`]: {
    [`& ${ProjectTitle}:first-child`]: {
      position: "relative",
      width: "max-content",

      "@mobile": {
        width: "auto",
      },

      "&::before": {
        content: 'New',
        position: "absolute",
        top: "5px",
        right: "-4rem",
        width: "max-content",
        height: "28px",
        backgroundColor: "$brand2",
        padding: "0px 8px",
        borderRadius: "var(--radii-1)",
        fontSize: "14px",
        color: "var(--colors-whiteFixed)",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter",

        "@mobile": {
          letf: 0,
          top: "-2.5rem",
          right: "auto",
        },
      },
    },
  },
});

