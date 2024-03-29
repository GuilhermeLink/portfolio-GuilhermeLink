import {
  Project as ProjectWrapper,
  ProjectTitle,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
  StyledDiv
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { AiFillFolder } from "react-icons/ai";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      const latestRepositories = json.slice(0, 4);

      setRepositories(latestRepositories);

      return latestRepositories;
    };

    fetchData();
  }, []);

  return (
    <>
      {repositories &&
        repositories.map((repository) => (
          <ProjectWrapper key={repository.id}>
            <StyledDiv>
              <AiFillFolder style={{ color: 'F8F9FA', fontSize: '24px', marginRight: '8px' }} />
              <ProjectTitle
                as="h2"
                type="heading3"
                color="grey5"
                >
                {repository.name}
              </ProjectTitle>
            </StyledDiv>

            <ProjectStack>
              <Text type="body2" color="grey5">
                Primary Language:
              </Text>
              {repository.language ? (
                <ProjectStackTech>
                  <Text color="grey5" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              ) : (
                <ProjectStackTech>
                  <Text color="grey5" type="body2">
                    Primary language not identified
                  </Text>
                </ProjectStackTech>
              )}
            </ProjectStack>

            <Text type="body1" color="grey2">
              {repository.description?.substring(0, 129)}
            </Text>
            <ProjectLinks>
              <ProjectLink target="_blank" href={repository.html_url}>
                <FaGithub /> Github Code
              </ProjectLink>
              {repository.homepage && (
                <ProjectLink
                  target="_blank"
                  href={`${repository.homepage}`}
                >
                  <FaShare /> See demo
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectWrapper>
        ))}
    </>
  );
};
