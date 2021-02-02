import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// import Link from 'next/link';
import db from './db.json';
import Widget from '../src/components/Widget';
import Link from '../src/components/Link';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Head>
          <title>{db.title}</title>
        </Head>
        <QuizLogo />
        <Widget
        as={motion.section}
        transition={{ delay: 0, duration: 0.5 }}
        variants={{
          show: { opacity: 1, y: '0' },
          hidden: { opacity: 0, y: '100%' },
        }}
        initial="hidden"
        animate="show"
      >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                // console.log('submissão por meio do react');
              }}
              >
                <Input
                  // onChange={function (infosDoEvento) {
                    // setName(infosDoEvento.target.value);
                    // console.log(infosDoEvento.target.value); - não ative
                    // State - código não original
                    // name = infosDoEvento.target.value; - código não original
                  // }}
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  value={name}
                  placeholder="Diz ai seu nome"
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
              </form>
            </Widget.Content>
         </Widget>

         <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
              <Widget.Content>
                <h1>Quiz da Galera</h1>
                
                <ul>
                  {db.external.map((linkExterno) => {
                    const [projectName, githubUser] = linkExterno
                      .replace(/\//g, '')
                      .replace('https:', '')
                      .replace('.vercel.app', '')
                      .split('.');

                  return (
                    <li key={linkExterno}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })}
              </ul>
            </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
          <p>
            <Link href="/blog"> 
              <a>LINK PARA O BLOG</a>
            </Link>
          </p>
          <p>
            <Link href="/quiz"> 
              <a>LINK PARA O QUIZ</a>
            </Link>
          </p>
          <p>
            <Link href="/live"> 
              <a>LINK PARA PAGE CODE DA LIVE</a>
            </Link>
          </p>
          <p>
            <ul>
            AULAS REALIZADAS
            <li>01 OK</li>
            <li>02 OK</li>
            <li>03 OK</li>
            <li>04 OK</li>
            <li>05 OK</li>
            TODAS AS AULAS
            <p>REALIZADAS</p>
          </ul>
        </p>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marceloicampos/imersao-react-quiz-html-css" />
    </QuizBackground>
  );
}
