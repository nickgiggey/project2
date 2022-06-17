import { useState, useEffect } from 'react';

function PicPerDay() {
    const [currentPic, setCurrentPic] = useState(null);
    const processing = {
        key: process.env.REACT_APP_NASA_KEY,
    };
    useEffect(() => getPic());

    function getPic() {
        let url = `https://api.nasa.gov/planetary/apod?api_key=${processing.key}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setCurrentPic(response);
                console.log(currentPic)
            })
            .catch((err) => console.log(err));
    }
    return (
        <div className="pic-container">
            {currentPic && (
                <article className="pic-container-inner">
                    <header className="pic-header">
                        {currentPic.title} - <i>{currentPic.date}</i>
                    </header>
                    <img src={currentPic.hdurl} alt="APOD" width="800" height="auto" />
                    <p className="pic-explanation">{currentPic.explanation}</p>
                </article>
            )}
        </div>
    );
}

export default PicPerDay