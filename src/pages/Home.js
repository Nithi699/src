import React from 'react';
import Header from '../components/Header';
import './main.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <h1>Welcome to My Portfolio</h1>
            <section className="projects">
                <h2>Projects</h2>
                {/* Add project details here */}
            </section>
            <section className="skills">
                <h2>Skills</h2>
                {/* Add skills details here */}
            </section>
        </div>
    );
};

export default Home;