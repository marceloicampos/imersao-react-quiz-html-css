import React from 'react';

import Head from 'next/head';

import Link from 'next/link';

function Quiz(props) {
return (
<h1 style={{ color: props.color }}>{props.children}</h1>
)
}

export default function QuizPage() {
  return (
    <div>
      <Head>
          <title>Quiz</title>
      </Head>
      <Quiz color="red">Página de Quiz</Quiz>
          <p>
            <Link href="/"> 
              <a>LINK PARA HOME</a>
            </Link>
          </p>
    </div>
  );
}