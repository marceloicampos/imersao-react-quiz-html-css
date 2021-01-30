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

export const QuizContainer = styled.div`
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
                // console.log('Submissão por meio do react');
              }}
              >
                <input
                  onChange={function (infosDoEvento) {
                    setName(infosDoEvento.target.value);
                    // console.log(infosDoEvento.target.value);
                    // State
                    // name = infosDoEvento.target.value;
                  }}
                  placeholder="Diz ai seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
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
          <p>AULA - 01 OK, 02 OK, 03 em DESENVOLVIMENTO</p>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marceloicampos/imersao-react-quiz-html-css" />
    </QuizBackground>
  );
}
