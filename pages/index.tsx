import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Row from '../components/Row'
import { Movie } from '../typings'
import requests from '../utils/requests'

// PROPS TYPESCRIPT TYPE FOR Home
interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

// SSR (FETCH MOVIE DATA)

export const getServerSideProps = async () => {
  // USING PROMISE ALL WAITS FOR EVERY SINGLE ASYNC FUNCTION
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  // RETURN PROPS TO HOME PAGE
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  };

}; 


const Home: NextPage<Props> = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
        {/* BANNER */}
        <Banner
          netflixOriginals={netflixOriginals}
        />


        <section>
          {/* TRENDING */}
          <Row title="Trending Now" movies={trendingNow}/>
          {/* TOP RATED */}
          <Row title="Top Rated" movies={topRated}/>
          
          {/* //TODO MY LIST */}

          {/* ACTION THRILLERS */}
          <Row title="Action Thrillers" movies={actionMovies}/>
          {/* COMEDIES */}
          <Row title="Comedies" movies={comedyMovies}/>
          {/* SCARY MOVIES */}
          <Row title="Horror" movies={horrorMovies}/>
          {/* ROMANCE MOVIES */}
          <Row title="Romance" movies={romanceMovies}/>
          {/* DOCUMENTARIES */}
          <Row title="Documentaries" movies={documentaries}/>
        </section>

      </main>

      {/* MODAL (FOR WHEN CLICKING A MOVIE CARD TO GET DETAILS) */}

    </div>
  )
}

export default Home;




