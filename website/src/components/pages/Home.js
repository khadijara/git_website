import React from 'react';

import Navbar from "../Navbar/Header";
import Video from '../Main/Video';
import Pricing from '../Pricing/pricinghome';
import Game from '../Games/Game';
import Footer from '../Footer/Footer';

export function Home() {
    return (
<>

    <Navbar />
    <Video />
    <Game />
    <Pricing />
    <Footer />
</>

    );

}
export default Home;