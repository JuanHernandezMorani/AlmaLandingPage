import "./carrusel.css";
import { React, useContext, useState, useEffect } from 'react';
import { ImageContext } from '../../context/ImageContext.js'; 
import portada from "../../imgs/port/PORTADA PRINCIPAL.jpg";
import eventos from "../../imgs/port/EVENTOS CORPORATIVOS.jpg";
import mkt from "../../imgs/port/TRADE MKT.jpg";
import ferias from "../../imgs/port/FERIAS & CONGRESOS.jpg";
import family from "../../imgs/port/FAMILY DAY.jpg";
import merchan from "../../imgs/port/MERCHAN.jpg";
import film from "../../imgs/port/FOTO Y FILMMAKER.jpg";


function selectImage(imageID){
    switch(imageID){
        case 2: return eventos;
        case 3: return mkt;
        case 4: return ferias;
        case 5: return family;
        case 6: return merchan;
        case 7: return film;
        default: return portada;
    }
}

export default function Carrusel({ onImageChange }) {
    const [current, setCurrent] = useState(1);
    const { setImageID } = useContext(ImageContext);

    useEffect(() => {
        setImageID(current);
        if (current > 7 || current < 1) {
            setTimeout(() => {
                setCurrent(1);
                setImageID(1);
            }, 1);
        }
    }, [current, onImageChange]);

    function previousImage() {
        current === 1 ? setCurrent(7) : setCurrent(current - 1);
    }

    function nextImage() {
        current === 7 ? setCurrent(1) : setCurrent(current + 1);
    }

    return (
        <div className="carrusel-container">
            <div className="carrussel-buttons">
                <div className="bt1">
                    <button onClick={() => previousImage()}>{'<'}</button>
                </div>
            </div>
            <div className="carrusel-imgs">
                <img src={selectImage(current)} alt="test" width="100%" />
            </div>
            <div className="carrussel-buttons">
                <div className="bt2">
                    <button onClick={() => nextImage()}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}
