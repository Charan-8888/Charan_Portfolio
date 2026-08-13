import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import FeaturedProjects from '../sections/FeaturedProjects';
import Journey from '../sections/Journey';
import CurrentlyLearning from '../sections/CurrentlyLearning';
import GitHubActivity from '../sections/GitHubActivity';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Journey />
        <CurrentlyLearning />
        <GitHubActivity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
