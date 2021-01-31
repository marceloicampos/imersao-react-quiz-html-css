import React from 'react';

import Head from 'next/head';

import Link from 'next/link';

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
        padding-left: 100px;
    }
    p {
        color: black;
        font-size: 20px;
    }
`;

function Title(props) {
    return (
        <h1 style={{ color: props.color }}>{props.children}</h1>
 )
}

export default function Blog() {
  return (
    <div>
    <GlobalStyle />
      <Head>
          <title>Blog</title>
      </Head>
      <header>
        <Title color="red">BLOG - PÓS IMERSÃO</Title>
          <p>Depois da imersão faço o Blog !</p>
          <p>
            <Link href="/"> 
              <a>LINK PARA HOME</a>
            </Link>
          </p>
      </header>
    </div>
  )
}
