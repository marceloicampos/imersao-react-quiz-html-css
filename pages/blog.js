import React from 'react';

import Head from 'next/head';

import Link from 'next/link';

function Title(props) {
    return (
        <h1 style={{ color: props.color }}>{props.children}</h1>
 )
}

export default function Blog() {
  return (
    <div>
      <Head>
          <title>Blog</title>
      </Head>
      <header>
        <Title color="red">BLOG - PÓS IMERSÃO</Title>
          <p>
            <Link href="/"> 
              <a>LINK PARA HOME</a>
            </Link>
          </p>
      </header>
    </div>
  )
}
