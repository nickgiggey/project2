import { useState, useEffect } from 'react';
import '../styles/reset.css';

function PicPerDay() {
    const [currentPic, setCurrentPic] = useState('');
    const processing = {
        key: process.env.REACT_APP_NASA_KEY,
    };
    const apiStyleContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "1px solid #d3d3d3",
        padding: 10 + "px",
        boxShadow: "5px 10px 18px lightgrey",
        backgroundClip: "content-box",
        backgroundColor: "#ffffffbf",
        marginTop: 10 + "px",
    };
    const apiStyleExplanation = {
        border: "1px solid #d3d3d3",
        padding: 10 + "px",
        boxShadow: "5px 10px 18px lightgrey",
        backgroundClip: "content-box",
        backgroundColor: "#ffffffbf",
    };
    const apiStyleMain = {
        width: 95 + "vmin",
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
        <div className="pic pic-container" style={apiStyleMain}>
            {currentPic && (
                <article className="pic pic-container-inner" style={apiStyleContainer}>
                    <header className="pic pic-header" style={apiStyleContainer}>
                        {currentPic.title} - <i>{currentPic.date}</i>
                    </header>
                    <img src={currentPic.hdurl} alt="APOD" width="450" height="auto" className="pic-image" />
                    <p className="pic pic-explanation" style={apiStyleExplanation}>{currentPic.explanation}</p>
                </article>
            )}
        </div>
    );
}

export default PicPerDay;