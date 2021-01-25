import Head from 'next/head'
import db from '../../../db.json'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>Naruto Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="NARUTO QUIZ" />
        <meta name="description" content="Projeto realizado durante a Imersão React v2." />
        <meta property="og:image" content={db.bg}/>
      </Head>
    </div>
  )
}

export default IndexPage
