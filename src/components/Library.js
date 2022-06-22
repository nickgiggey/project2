import { useState, useEffect } from 'react';
import '../styles/reset.css';
import Earth from './Earth'
import '../styles/Library.css'
function Library() {
    const [currentEarth, setCurrentEarth] = useState('');
    const processing = {
        key: process.env.REACT_APP_NASA_KEY,
    };
    
    useEffect(() => getEarth(), []);

    function getEarth() {
        let url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${processing.key}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setCurrentEarth(response);
            })
            .catch((err) => console.log(err));
    }
    if (!currentEarth) return <div />;

    return (
        <section className="library-container">
            <div className="library-text">
                {currentEarth.map((data, index) => {
                    return <Earth key={index} {...data} />
                })}
            </div>
        </section>
    );
}

export default Library;