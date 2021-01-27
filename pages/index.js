/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState: ', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
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
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => {
                  console.log(infosDoEvento.target.value);
                  setName(infosDoEvento.target.value);
                }}
                placeholder="Como você se chama?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Vamos jogar, {name}!
              </Button>
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
