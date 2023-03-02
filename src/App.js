import React from 'react';
import './App.css';
import HandleName from './Profile/Profile';
import Photo from './photo.jpeg';


function App() {
let fullName = "Joseph Leclerc";
 return (
    < div className="App">
        <HandleName fullName={fullName} bio="I'm a funly people, I've a family of 3 childrens and I'm living in Marcory, GFCI quarter. I've no professional experience, I want start now Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor ratione officia sunt cumque fugiat facilis iste molestiae quae, nulla atque aspernatur placeat! Nulla amet, ipsum repudiandae asperiores ullam inventore." profession={"Teacher"}><img src={Photo} alt ="Pic"/></HandleName>
        </div>
 )};


export default App;
