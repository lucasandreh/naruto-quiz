/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';

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
        <Widget 
          as={motion.section}
          transition={{ duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
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
                VAMOS JOGAR {name.toUpperCase()}?
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget 
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da galera</h1>
            {db.external.map((linkExterno) => { 
              const [projectName, userName] = linkExterno.replace('https:', '')
              .replace(/\//g, '')
              .replace('.vercel.app', '')
              .split('.')
              return (
                <div>
                  <ul>
                    <li key={`project__${projectName}`}><Widget.Topic as={Link} href={`/quiz/${projectName}___${userName}`}>
                          {userName}/{projectName}
                      </Widget.Topic></li>
                  </ul>
                </div>
              )
            })}
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/llofyy" />
    </QuizBackground>
  );
}
