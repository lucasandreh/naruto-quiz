import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz'

export default function QuizDaGaleraPage({ dbExterno }) {
    return (
            <ThemeProvider theme={dbExterno.theme}>
                <QuizScreen 
                    externalQuestions={dbExterno.questions}
                    externalBg={dbExterno.bg}
                />
            </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
    const [projectName, userName] = context.query.id.split('___', )
    const dbExterno = await fetch(`https://${projectName}.${userName}.vercel.app/api/db`)
    .then((respostaDoServer) => {
        if(respostaDoServer.ok) {
            return respostaDoServer.json()
        }

        throw new Error('Falha ao recuperar os dados.')
    })
    .then((respostaConvertidaEmObjeto) => {
        return respostaConvertidaEmObjeto
    })
    .catch((err) => {
        console.error(err)
    })
    return {
        props: {
            dbExterno,
        },
    }
}