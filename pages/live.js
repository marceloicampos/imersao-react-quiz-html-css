import React from 'react';

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

import Head from 'next/head';

import Link from 'next/link';

const Text = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`;

const Login = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.colors.primary};
`;

const Name = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.colors.primary};
`;

const Location = styled.div`
font-size: 20px;
color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(props) {
    console.log('props recebidos na página', props)
    console.log ('dadosDoGitHub', props.dadosDoGitHub);
    
    /**
    const [dadosDoGitHub, setDadosDoGitHub] = React.useState({});
    // didMount
    React.useEffect(() => {
    fetch ('https://api.github.com/users/marceloicampos')
    .then ((respostaDoServer) => {
        return respostaDoServer.json();
    })
    .then ((respostaConvertida) => {
        console.log ('respostaConvertida', respostaConvertida)
        setDadosDoGitHub(respostaConvertida);
    })
    .catch ((err) => {
        console.log(err);
    })
    .finally (() => {
        console.log('deu certo');
    },)
},  []);
 */

    return (
        <div>
        <GlobalStyle />
        <Head>
            <title>Live</title>
        </Head>
        
        <Text>CODE DA LIVE - FINAL</Text>
        <p>Dados extraídos da API do meu Git Hub</p>
        <Login>
            LOGIN - {props.dadosDoGitHub.login}
        </Login>
        
        <Name>
            NAME USER - {props.dadosDoGitHub.name}
        </Name>

        <Location>
            LOCATION - {props.dadosDoGitHub.location}
        </Location>
        
        <p>
            <Link href="/"> 
                <a>LINK PARA HOME</a>
            </Link>
        </p>
        
        </div>
    )
}

export async function getStaticProps() {
    console.log('rodando somente no server')


    try {
            const retornoDaAPIinicial = await fetch ('https://api.github.com/users/marceloicampos')
            const retornoDaAPI = await retornoDaAPIinicial.json();
    
            // const acima substitui o const abaixo

            // const retornoDaAPI = await fetch ('https://api.github.com/users/marceloicampos')
            // .then ((respostaDoServer) => {
            //     return respostaDoServer.json();
            // });

            return {
            props: {
                dadosDoGitHub: retornoDaAPI
                //dadoViaStaticProps: 'Dado simples vindo do Static Props'
            }, // will be passed to the page component as props
        }
    } 
    catch(err) {
        throw new Error ('Deu ruim :(')
    }
  }
  