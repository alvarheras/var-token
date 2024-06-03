import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import Marquee2 from '../../components/Marquee2';
import Marquee3 from '../../components/Marquee3';


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <Marquee2 /> 
            <InfoSection {...homeObjThree} />
            <Marquee3 /> 
            <Pricing />

        </>
    )
}

export default Home;