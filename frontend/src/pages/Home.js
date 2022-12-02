import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import './Home.scss'

const Home = () => {

    return (
        <>
        <Header className="landing-page"/>
            <div className="landing-page">
                <h2>Landing Page</h2>   
            </div>
        <Footer className="landing-page"/>
        </>
    )
}

export default Home
