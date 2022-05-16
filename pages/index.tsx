import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Scroll from '../components/Scroll'
import Video from '../components/Video'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Pluto tv</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='flex flex-col'>
        <Video/>
        <Scroll/>
      </main>
    </div>
  )
}

export default Home
