import "./carrusel.css";
import { React, useContext, useState, useEffect } from 'react';
import { ImageContext } from '../../context/ImageContext.js'; 
import portada from "../../imgs/port/PORTADA_PRINCIPAL.jpg";
import eventos from "../../imgs/port/EVENTOS_CORPORATIVOS.jpg";
import mkt from "../../imgs/port/TRADE_MKT.jpg";
import ferias from "../../imgs/port/FERIAS_&_CONGRESOS.jpg";
import family from "../../imgs/port/FAMILY_DAY.jpg";
import merchan from "../../imgs/port/MERCHAN.jpg";
import film from "../../imgs/port/FOTO_Y_FILMMAKER.jpg";
import Sweet from "sweetalert2";

function selectImage(imageID){
    switch(imageID){
        case 2: return eventos;
        case 3: return ferias;
        case 4: return family;
        case 5: return merchan;
        case 6: return film;
        case 7: return mkt;
        default: return portada;
    }
}

export default function Carrusel() {
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
    }, [current,setImageID]);

    function previousImage() {
        current === 1 ? setCurrent(7) : setCurrent(current - 1);
    }

    function nextImage() {
        current === 7 ? setCurrent(1) : setCurrent(current + 1);
    }

    function selectImageByNavigation(index) {
        setCurrent(index);
    }

    function check(componentID){
        return Sweet.fire({
            title: 'Component ' + componentID + ', say: its works!',
            text: 'Lets continue',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

    function selectComponents(){
        let a = "somos\nprofesionales";
        let b = "al SERVICIO de PROFESIONALES";

        if(current !== 1 && current <= 7){
            return (
                <div className={styleSelector()}>
                    <h1 className="project_h1" dangerouslySetInnerHTML={{ __html: selectName() }} />
                    <button className="project_button" onClick={()=>{check(current)}}>VER PROYECTO</button>
                </div>
            );
        }
        else{
            return (
                <div className="carrusel-main-img">
                    <h3>{a}</h3>
                    <h2><HighlightedText text={b} /></h2>
                </div>
            );
        }
    }

    function HighlightedText({ text }) {
        const wordsToBold = ["SERVICIO", "PROFESIONALES"];
        const formattedText = text.split(/(\b\S+\b)/).map((word, index) =>
            wordsToBold.includes(word.trim()) ? (
                <span key={index} className="bold-word">{word}</span>
            ) : (
                word
            )
        );
    
        return <p>{formattedText}</p>;
    }

    function styleSelector(){
        switch(current){
            case 2: return "carrusel-component-2";
            case 3: return "carrusel-component-3";
            case 4: return "carrusel-component-4";
            case 5: return "carrusel-component-5";
            case 6: return "carrusel-component-6";
            case 7: return "carrusel-component-7";
            default: return "Invalid ID";
        }
    }

    function selectName(){
        switch(current){
            case 2: return "EVENTOS\nCORPORATIVOS";
            case 3: return "FERIAS &\nCONGRESOS";
            case 4: return "FAMILY\nDAY";
            case 5: return "MERCHANDISING &\nREGALOS EMPRESARIALES";
            case 6: return "FOTOGRAFIA &\nFILMMAKERS";
            case 7: return "TRADE MKT &\nLOGISTICA";
            default: return "Invalid ID";
        }
    }

    return (
        <div className="carrusel-container">
            <div className="carrussel-buttons">
                <div className="bt1">
                    <button onClick={() => previousImage()}>{'<'}</button>
                </div>
                <div className="bt2">
                    <button onClick={() => nextImage()}>{'>'}</button>
                </div>
            </div>
            <div className="carrusel-imgs">
                <img src={selectImage(current)} alt="Carrusel" />
                {selectComponents()}
            </div>
            <div className="navigation">
                {Array.from({ length: 7 }, (_, i) => (
                    <div
                        key={i}
                        className={`nav-dot ${current === i + 1 ? 'active' : ''}`}
                        onClick={() => selectImageByNavigation(i + 1)}
                    ></div>
                ))}
            </div>
        </div>
    );
}

