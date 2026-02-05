import React from 'react';
import Banner from '../../component/Banner/Banner';
import Doctors from '../../component/Doctors/Doctors';
import Services from '../../component/Services/Services';
import Footer from '../../component/Footer/Footer';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Doctors/>
           <Services/>
           <Footer/>
        </div>
    );
};

export default Home;