import db from '../db.json'
import styled from 'styled-components'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import Head from 'next/head'

export const QuizContainer = styled.div `
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
            <title>Naruto Quiz</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://naruto-quiz.llofyy.vercel.app/" />
            <meta property="og:title" content="NARUTO QUIZ" />
            <meta property="og:description" content="Projeto realizado durante a Imersão React v2." />
            <meta property="og:image" content={db.bg}/>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header><h1>NARUTO QUIZ</h1></Widget.Header>
          <Widget.Content> 
          <p>Teste seus conhecimento nesse quiz sobre um dos animes mais populares do mundo.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>
            <p>Em breve...</p>
            <a href="/quiz">Quiz Page</a>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/llofyy" />
    </QuizBackground>
  )
}
