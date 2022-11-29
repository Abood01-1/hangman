import React from "react";
import "./AllLetters.css";

export default function AllLetters({
  appendLetterToArray,
  activeLetters,
  inActiveLetters,
}) {
  let lettersArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function setLetter(letter) {
    appendLetterToArray(letter);
  }
  return (
    <div className='all-letters' style={{}}>
      {lettersArr.map((letter, index) => {
        const active = activeLetters.includes(letter);
        const inActive = inActiveLetters.includes(letter);
        return (
          <button
            onClick={() => setLetter(letter)}
            className={` btn ${active ? "active" : ""} ${
              inActive ? "inActive" : ""
            } `}
            disabled={inActive}
            key={index}
            style={{}}
          >
            {letter.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
