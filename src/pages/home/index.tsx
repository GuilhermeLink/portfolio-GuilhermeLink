// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutMeArea,
  AboutMeSpace
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Welcome everyone here is {userData.nameUser}.</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
            Fullstack Developer, {" "}
              <Text as="span" type="heading1" color="brand1">
              Changing the World,
              </Text>{" "}
              One Line of Code at a Time{" "}{" "}
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <AboutMeArea id="aboutme">
        <Container>
          <AboutMeSpace>
            <Text as="h2" type="heading4" color="grey4">
              About Me:
            </Text>
            <Text as="h3" type="body1" color="grey3">
            Professional in career transition from Veterinary to the technology area. After 2 years working as a quality supervisor in a food industry, I realized that technology was my area, as it presented the challenges that I wanted so much and the opportunities that I was looking for, and every day I seek to improve myself in new technologies to become a complete professional.
            </Text>  
            <Text as="h3" type="heading4" color="grey3">
            Languages:  
            </Text>
            <Text as="h3" color="grey3">
            English - Advanced
            </Text>
            <Text as="h3" color="grey3">
            Italian - Intermediary
            </Text>
            <Text as="h3" color="grey3">
            Spanish - Intermediary
            </Text>
            <Text as="h3" color="grey3">
            Portuguese - Native
            </Text>
          </AboutMeSpace>
        </Container>
      </AboutMeArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Some of my projects:
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
