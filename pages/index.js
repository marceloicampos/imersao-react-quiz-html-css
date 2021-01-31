import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Link from 'next/link';
import db from './db.json';
import Widget from '../src/components/Widget';
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
          <title>Quiz CSS - Imersão React</title>
        </Head>
        <QuizLogo />
        <Widget>
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

        <Widget>
              <Widget.Header>
                <h1>Quiz da Galera</h1>
              </Widget.Header>
              <Widget.Content>
                <p>Olha a Galera</p>
            </Widget.Content>
        </Widget>
        <Footer />
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
          <p>AULA - 01 OK, 02 OK, 03 OK, 04 em DESENVOLVIMENTO</p>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marceloicampos/imersao-react-quiz-html-css" />
    </QuizBackground>
  );
}
