import React from "react";
import "./HangManWord.css";

export default function HangManWord({ LetterGuess, word, lose }) {
  let spanWord = word.split("").map((letter, index) => {
    if (letter === " ") return <p></p>;
    return (
      <span
        className='letter'
        key={index}
        style={{
          textTransform: "capitalize",
          borderBottom: "0.25rem solid #333",
          width: "fit-content",
          padding: "5px",
        }}
      >
        <span
          style={{
            visibility:
              lose === ""
                ? LetterGuess.includes(letter)
                  ? ""
                  : "hidden"
                : "visible",
            color: lose === "" ? "black" : "red",
          }}
        >
          {letter}
        </span>
      </span>
    );
  });
  return <div className='letter-container'>{spanWord}</div>;
}
