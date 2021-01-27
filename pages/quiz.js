import React from 'react';

import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Widget from '../src/components/Widget';
import QuizContainer from '../src/components/QuizContainer';

export default function Quiz() {
    return (
      <QuizBackground backgroundImage="https://images7.alphacoders.com/942/942795.png">
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        LISTA DE QUIZ EM BREVE...
                    </Widget.Header>
                  <Widget.Content>
                      <p>Conteúdo em breve...</p>
                      <a href="/">Voltar a página inicial</a>
                    </Widget.Content>
                </Widget>
            </QuizContainer>
        <GitHubCorner />
      </QuizBackground>
    )
}
