import type { NextPage } from 'next'
import Head from 'next/head'
import Header from "../components/header";
import Preview from '../components/preview';
import AboutUs from "./about-us";
import Previously from "../components/previously";
import Speakers from "./speakers";
import Schedule from "./schedule";
import Tickets from "./tickets";
import Buns from "./buns";
import Venue from "./venue";
import Sponsors from "./sponsors";
import Footer from "../components/footer";


const Home: NextPage = () => {
  return (
    <div className='mt-8 mx-6'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
          <link href="/dist/output.css" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                  <link
                      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Montserrat:wght@300;600&display=swap"
                      rel="stylesheet" />
      </Head>


        <Header />
        <Preview />
        <AboutUs />
        <Previously />
        <Speakers />
        <Schedule />
        <Tickets />
        <Buns />
        <Venue />
        <Sponsors />
        <Footer />
    </div>
  )
}

export default Home
