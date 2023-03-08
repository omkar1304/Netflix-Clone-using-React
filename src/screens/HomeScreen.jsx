import React from 'react'
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../request'
import Row from '../Row'
import './homescreen.css'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
        <Nav />
        <Banner />

        <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOrginals} isLargeRow={true}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchURL={requests.fetchHorroMovies}/>
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen