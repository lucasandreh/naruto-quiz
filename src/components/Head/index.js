import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
          <head>
            <title>Naruto Quiz</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://naruto-quiz.llofyy.vercel.app/" />
            <meta property="og:title" content="NARUTO QUIZ" />
            <meta property="og:description" content="Projeto realizado durante a Imersão React v2." />
            <meta property="og:image" content={db.bg}/>
          </head>
      </Head>
    </div>
  )
}

export default IndexPage
