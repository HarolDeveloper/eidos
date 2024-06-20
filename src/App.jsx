import { useState } from 'react'
import './App.css'
import { XFollowCard } from './FollowCard.jsx'
import Header from "./components/Header"
import Hero from "./components/Hero"
import Clients from './components/Clients.jsx'
import Works from './components/Works.jsx'
import Reviews from './components/Reviews.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'

import Spline from '@splinetool/react-spline';




export function App() {


    return (

        <section className='App bg-background'>
            {/* <Spline scene="https://prod.spline.design/i1bh0zY28vxakbU9/scene.splinecode" /> */}
            <Header></Header>
            <Hero></Hero>
            <Clients />
            <Works />
            <Reviews />
            <Services />
            <Footer />



        </section>
    )
}