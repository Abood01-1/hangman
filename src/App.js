import React, { useState } from "react";
import HangDraw from "./HangMan/HangDraw";
import words from "./HangMan/Words.json";
import "./App.css";
import HangManWord from "./HangMan/HangManWord";
import AllLetters from "./HangMan/AllLetters";

export default function App() {
  const [wordFrom, setWordFrom] = useState("");

  const [wordGuess, setWordGuess] = useState(() => {
    let allKeys = Object.keys(words);
    let randomNum = Math.floor(Math.random() * allKeys.length);
    setWordFrom(allKeys[randomNum]);
    let allWords = words[allKeys[randomNum]];
    return allWords[Math.floor(Math.random() * allWords.length)];
  });

  const [LetterGuess, setLetterGuess] = useState([]);
  const isWinner = wordGuess
    .split("")
    .every((letter) => LetterGuess.includes(letter));

  const incorrectLetters = LetterGuess.filter(
    (letter) => !wordGuess.includes(letter)
  );

  function appendLetterToArray(letter) {
    if (LetterGuess.includes(letter)) return;
    setLetterGuess((previosLetters) => [...previosLetters, letter]);
  }
  let [lose, setLose] = useState("");
  let [win, setWin] = useState("");

  function loseCase(lastDraw) {
    if (lastDraw === 6) {
      setLose("visible");
    }
  }

  function reloadPage() {
    window.location.reload();
  }

  return (
    <div className='countainer'>
      <div className={`overlay ${lose}`}></div>
      <div className={`lose-card ${lose}`}>
        <h1>YOU LOSE</h1>
        <button onClick={reloadPage}>TRY AGAIN</button>
      </div>
      {isWinner && (
        <>
          <div className={`overlay visible`}></div>
          <div className={`win-card visible`}>
            <h1>YOU WIN</h1>
            <button onClick={reloadPage}>TRY AGAIN</button>
          </div>
        </>
      )}
      <div className='word-from'>
        Word From : <span>{wordFrom}</span>
      </div>
      <HangDraw
        loseCase={loseCase}
        incorrectLetters={incorrectLetters.length}
      />
      <HangManWord lose={lose} LetterGuess={LetterGuess} word={wordGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <AllLetters
          appendLetterToArray={appendLetterToArray}
          activeLetters={LetterGuess.filter((letter) => {
            return wordGuess.includes(letter);
          })}
          inActiveLetters={incorrectLetters}
        />
      </div>
    </div>
  );
}
