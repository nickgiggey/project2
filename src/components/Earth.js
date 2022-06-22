import React from "react";
import '../styles/reset.css';
import "../styles/Earth.css";

function Earth({ identifier, image, date }) {
    let year = identifier.slice(0, 4);
    let month = identifier.slice(4, 6);
    let day = identifier.slice(6, 8);
    let imgUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image}.png`;
    let time = date.slice(12, 19);
    return (
        <section className="container">
            <main className="earth-container">
                <div className="earth-container-inner">
                    <img className="earth" src={imgUrl} alt="Earth picture at {time} on {month}/{day}/{year}" />
                    <h1 className="earth-text">{time} on {month}/{day}/{year}</h1>
                </div>
            </main>
        </section>
    );
};

export default Earth;