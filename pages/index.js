/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }`;

const NameInput = styled.input`
    width: 300px;
    height: 30px;

    text-align: center;
    border: 2px solid #010101;

    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};

    font-size: 16px;
`;

const PlayButton = styled.button`
      width: 300px;
      height: 40px;

      margin-top: 20px;

      background-color: ${({ theme }) => theme.colors.primary};

      color: #fff;
      border: 2px solid #010101;

      transition: 0.5s;

      font-size: 16px;
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState: ', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header><h1>NARUTO QUIZ</h1></Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              console.log('Submissão por meio do react.');
              // router manda pra próxima página.
              router.push(`/quiz?name=${name}`);
            }}
            >
              <NameInput
                onChange={(infosDoEvento) => {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Como você se chama?"
              />
              <PlayButton type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Seja bem vindo(a): {name}
              </PlayButton>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Em breve mais quizes pra você testar seus conhecimentos.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/llofyy" />
    </QuizBackground>
  );
}
