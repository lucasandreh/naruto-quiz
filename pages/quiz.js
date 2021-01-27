/* eslint-disable react/prop-types */
import React from 'react';

import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import db from '../db.json';

import Button from '../src/components/Button';

function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h1>{ question.title }</h1>
        <p>{question.description}</p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            console.log('Para de reclamar um poquin só');
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input
                  // style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {/* <pre>
          {JSON.stringify(question, null, 4)}
        </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  const imageLoading = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j4j0-df87620c-070f-4896-990c-c444944041a1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDFqNGowLWRmODc2MjBjLTA3MGYtNDg5Ni05OTBjLWM0NDQ5NDQwNDFhMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5JXAeWUpVCcXFAO6DkE9iAc_z24v2kmKqfpQHbJV0ZU',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd1j5lj-78b4c4eb-7185-4cbd-8aab-f1734b527ac2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvODRkYzEzYjctYTJlNy00YjQ1LTgzZWMtMzExZTcyZTgyOTAwXC9kZDFqNWxqLTc4YjRjNGViLTcxODUtNGNiZC04YWFiLWYxNzM0YjUyN2FjMi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.K0RKjGFtqpInVAnW_tlyXyyGJmVadOJectKW71zLLog',
  ];
  const randomImageLoading = Math.floor(Math.random() * imageLoading.length);
  return (
    <Widget>
      <Widget.Header>
        CARREGANDO
      </Widget.Header>

      <Widget.Content>
        <img
          style={{
            width: '100%',
          }}
          src={imageLoading[randomImageLoading]}
          alt="Imagem de Loading"
        />
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[currentQuestion];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 3 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage="https://images7.alphacoders.com/942/942795.png">
      <QuizContainer>
        <QuizLogo />
        {/*  eslint-disable-next-line max-len */}
        {screenState === screenStates.QUIZ && <QuestionWidget question={question} totalQuestions={totalQuestions} questionIndex={questionIndex} onSubmit={handleSubmitQuiz} />}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
