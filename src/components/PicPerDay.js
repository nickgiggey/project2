import { useState, useEffect } from 'react';
import '../styles/reset.css';
import '../styles/PicPerDay.css'

function PicPerDay() {
    const [currentPic, setCurrentPic] = useState('');
    const processing = {
        key: process.env.REACT_APP_NASA_KEY,
    };
    
    useEffect(() => getPic(), []);

    function getPic() {
        let url = `https://api.nasa.gov/planetary/apod?api_key=${processing.key}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setCurrentPic(response);
            })
            .catch((err) => console.log(err));
    }
    if (!currentPic) return <div />;

    return (
        <div className="pic pic-container">
            {currentPic && (
                <article className="pic pic-container-inner">
                    <header className="pic pic-header">
                        {currentPic.title} - <i>{currentPic.date}</i>
                    </header>
                    <img src={currentPic.hdurl} alt="APOD" width="450" height="auto" className="pic-image" />
                    <p className="pic pic-explanation">{currentPic.explanation}</p>
                </article>
            )}
        </div>
    );
}

export default PicPerDay;