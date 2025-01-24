import React from "react";

function Bolder({text,toBold}) {
    const formattedText = text.split(/(\b\S+\b)/).map((word, index) =>
        toBold.includes(word.trim()) ? (
            <span key={index} className="bold-word">{word}</span>
        ) : (
            word
        )
    );

    return <p>{formattedText}</p>;
}

export {
    Bolder,
}