import HeroSection from '@/components/HeroSection'
import Popular from '@/components/Popular'
import About from '@/components/about'
import React from 'react'

const Home = () => {
    return (
        <div>
            <HeroSection />
            <About />
            <Popular />
        </div>
    )
}

export default Home
