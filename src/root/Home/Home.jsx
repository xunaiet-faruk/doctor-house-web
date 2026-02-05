import React from 'react';
import Banner from '../../component/Banner/Banner';
import Doctors from '../../component/Doctors/Doctors';
import Services from '../../component/Services/Services';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Doctors/>
           <Services/>
        </div>
    );
};

export default Home;