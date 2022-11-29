import React, { useEffect } from "react";
import "./HangmanDraw.css";

const HEAD = <div className='head' />;

const BODY = <div className='body' />;

const LEFTARM = <div className='left-arm' />;

const RIGHTARM = <div className='right-arm' />;

const LEFTLEG = <div className='left-leg' />;

const RIGHTLEG = <div className='right-leg' />;

const DRAW = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

export default function HangDraw({ incorrectLetters, loseCase }) {
  useEffect(() => {
    loseCase(DRAW.slice(0, incorrectLetters).length);
  }, [DRAW.slice(0, incorrectLetters).length]);

  return (
    <div className='hangman-draw'>
      {DRAW.slice(0, incorrectLetters)}
      <div className='short-stick'></div>
      <div className='right-stick'></div>
      <div className='stick'></div>
      <div className='base'></div>
    </div>
  );
}
