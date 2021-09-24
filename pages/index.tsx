import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Sphere from '../icons/Sphere';
import TechIcons from '../icons/technologies';
import BlockchainIcons from '../icons/blockchains';
import UXIcons from '../icons/UX';
import SocialIcons from '../icons/social';

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;

  animation: fade-in 2s cubic-bezier(0.6, 0, 0.4, 1) both 1;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SphereContainer = styled.div`
  margin: 3rem auto 1rem auto;
`;

const TitleContainer = styled.div`
  margin: 3rem auto 1rem auto;
  border-left: 2px solid;
  border-right: 2px solid;
  border-image-source: linear-gradient(90deg, #ff32bb -26.33%, #ff5f58 73.79%);
  border-image-slice: 1;
  animation: border-anim 3s cubic-bezier(0.6, 0, 0.4, 1) both 1;
  border-image-outset: 1px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes border-anim {
    0% {
      border-image-outset: 0px;
    }
    50% {
      border-image-outset: 20px;
    }
    100% {
      border-image-outset: 0px;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-family: basier_circlebold;
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 53px;
  color: #fff;
  display: flex;
  & > h1 {
    font-size: 2.5rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
`;

const Subtitle = styled.div`
  font-family: basier_circleregular;
  font-weight: normal;
  color: #a6a6a8;
  font-size: 1.2rem;
  line-height: 25px;
  display: flex;

  & > h1 {
    font-size: 1.2rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }
`;

const Expertise = styled.div`
  margin: 3rem auto 1rem auto;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`;

const Technologies = styled.div`
  flex: 1;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-size: 1rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto 1rem auto;
  transform: translateX(-300px);
  opacity: 0;
  flex-wrap: wrap;

  animation: simple 3s forwards ease;

  & > svg {
    margin: 0.5rem 0.5rem 0 0.5rem;
    &:hover {
      transform: scale(1.2);
    }
  }

  @keyframes simple {
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }
`;

const Others = styled.div`
  flex-basis: 50%;
  margin: 2rem auto 1rem auto;

  & > h1 {
    font-size: 1rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }
`;

const Footer = styled.footer`
  width: 100%;
  border-bottom: 2px solid;
  border-image-source: linear-gradient(90deg, #ff32bb -26.33%, #ff5f58 73.79%);
  border-image-slice: 1;
  margin-bottom: 2rem;
  margin-top: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SocialLinkContainer = styled.div`
  display: flex;
  margin: 1rem auto 1rem auto;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

const SocialLink = styled.a`
  height: 56px;
  background: linear-gradient(90deg, #ff32bb -26.33%, #ff5f58 73.79%);
  box-shadow: 0px 4px 11px rgba(255, 50, 187, 0.5);
  border-radius: 10px;
  display: flex;
  padding: 1rem;
  margin: auto 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  align-content: center;
  justify-content: center;

  &:hover {
    box-shadow: 0px 4px 28px rgba(255, 50, 187, 0.5);
  }
`;

const Link = styled.a`
  height: 56px;
  font-family: basier_circlebold;
  background: linear-gradient(90deg, #ff32bb -26.33%, #ff5f58 73.79%);
  box-shadow: 0px 4px 11px rgba(255, 50, 187, 0.5);
  border-radius: 10px;
  display: flex;
  padding: 0 1rem;
  margin: auto 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  font-weight: bold;
  justify-content: center;
  align-content: center;

  &:hover {
    box-shadow: 0px 4px 28px rgba(255, 50, 187, 0.5);
  }

  & > h1 {
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    align-self: center;
  }
`;

const ProjectsHeader = styled.span`
  width: 100%;
  margin: 2rem auto 0px auto;

  & > h1 {
    font-size: 1rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }
`;

const ProjectsContainer = styled.div`
  margin: 2rem auto 1rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  transition: all 0.3s linear;
`;

const Project = styled.a`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 2rem 0 2rem;
  min-height: 160px;
  width: 45%;
  animation: simple 3s forwards ease;
  margin-bottom: 1rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  &:hover {
    background: rgba(255, 255, 255, 0.06);

    & > div > span {
      transform: scale(1.2);
    }
  }
  & > h1 {
    font-size: 1rem;
    background: radial-gradient(50% 50% at 50% 50%, #ff32bb 21.35%, #ff5f58 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: left;
  }
  & > p {
    font-weight: 500;
    font-size: 0.8rem;
    letter-spacing: -0.4px;
    color: #fff;
    text-align: left;
  }
  & > div {
    margin: auto 1rem 1rem 1rem;
    display: flex;
    justify-content: flex-end;
    height: 24px;
  }
`;

const ProjectShowMore = styled.span`
  margin: 1rem auto 1rem auto;
  width: 30%;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem 2rem;
  text-align: center;

  &:hover {
    background: rgba(255, 255, 255, 0.06);

    & > div > span {
      transform: scale(1.2);
    }
  }
`;

const projectsNames = ['cosmos'];

interface Repo {
  name: string;
  // eslint-disable-next-line camelcase
  html_url: string;
  description: string;
}

const Home: NextPage = () => {
  const [projects, setProjects] = useState<Repo[]>([]);
  const [showMore, setShowMore] = useState(false);

  const filterRepos = (repos: Repo[]) =>
    projectsNames.map((name) => repos.filter((repo) => repo.name.includes(name))).flat();

  useEffect(() => {
    const fetchRepos = async () => {
      const githubRepos = await (await fetch('https://api.github.com/users/Lumene98/repos')).json();

      if (githubRepos) {
        setProjects(filterRepos(githubRepos));
      }
    };

    fetchRepos();
  }, []);

  return (
    <Container>
      <Head>
        <title>Portofolio-v2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <SphereContainer>
          <Sphere />
        </SphereContainer>
        <TitleContainer>
          <Title>
            Hi, I&apos;m&nbsp; <h1>Lumene</h1>
          </Title>
          <Subtitle>
            I work as a&nbsp; <h1>fullstack</h1>
            &nbsp;developer
          </Subtitle>
        </TitleContainer>
        <Expertise>
          <Technologies>
            <h1>Technologies</h1>

            <IconsContainer>
              {TechIcons.map((Icon) => (
                <Icon key={Icon.name} />
              ))}
            </IconsContainer>
          </Technologies>
          <Others>
            <h1>Blockchains</h1>

            <IconsContainer>
              {BlockchainIcons.map((Icon) => (
                <Icon key={Icon.name} />
              ))}
            </IconsContainer>
          </Others>
          <Others>
            <h1>Design</h1>

            <IconsContainer>
              {UXIcons.map((Icon) => (
                <Icon key={Icon.name} />
              ))}
            </IconsContainer>
          </Others>
        </Expertise>
        <ProjectsHeader>
          <h1>Projects</h1>
        </ProjectsHeader>
        <ProjectsContainer>
          {(showMore ? projects : projects.slice(0, 4)).map((project) => (
            <Project href={project.html_url} target="_blank" rel="noreferrer">
              <h1>{project.name}</h1>
              <p>{project.description}</p>
              <div>
                <span>{SocialIcons.map(({ Icon }) => (Icon.name === 'Github' ? <Icon /> : null))}</span>
              </div>
            </Project>
          ))}
        </ProjectsContainer>
        {projects.length > 4 && (
          <ProjectShowMore onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show less' : 'Show more'}
          </ProjectShowMore>
        )}
      </Main>

      <Footer>
        <SocialLinkContainer>
          {SocialIcons.map(({ Icon, url }) => (
            <SocialLink href={url} target="_blank" key={Icon.name}>
              <Icon />
            </SocialLink>
          ))}
          <Link
            href="https://drive.google.com/file/d/17ufJbDztyHgCb2sCPOwiOsA1MACXzUV5/view?usp=sharing"
            target="_blank"
          >
            <h1>Get my CV!</h1>
          </Link>
        </SocialLinkContainer>
      </Footer>
    </Container>
  );
};

export default Home;
