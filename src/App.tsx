import { useMemo, useState } from "react";
import "./App.css";

import askImg from "./assets/ask.png"
import yesImg from "./assets/yes.gif"

export default function App() {
  const [noCount, setNoCount] = useState<number>(0);
  const [accepted, setAccepted] = useState<boolean>(false);

  const noTexts: string[] = [
    "No",
    "Plss 🥺",
    "Sure na ba talaga yon ako na to oh",
    "Wait naman huhu 😭",
    "aray ko po 💔",
    "It's me who invited you 😢",
    "PLEASEEEE 😭🙏",
    "Last chance 😤",
    "Okay you're mean 😭",
    "Just click YES 😡💖",
  ];

  const currentNoText = noTexts[Math.min(noCount, noTexts.length - 1)];

  const yesScale = useMemo(() => 1 + noCount * 0.35, [noCount]);

  function handleNo() {
    setNoCount((prev) => prev + 1);
  }

  function handleYes() {
    setAccepted(true);
  }

  return (
    <div className="page">
      {!accepted ? (
        <>
          <div className="card">
            <img src={askImg} alt="ask" className="valentine-img" />
            <h2
              className="question"
              style={{
                marginBottom: `${20 + noCount * 10}px`,
              }}
            >
              Will you be my valentine?
            </h2>

            <div className="buttons">
              <button
                className="yesBtn"
                onClick={handleYes}
                style={{
                  transform: `scale(${yesScale})`,
                  zIndex: 999 + noCount,
                }}
              >
                Yes
              </button>

              <button className="noBtn" onClick={handleNo}>
                {currentNoText}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="accepted">
          <img src={yesImg} alt="yes" className="valentine-img" />
          <h1>YAYYY 😭💖</h1>
          <p>I know you're going to say yes Alipott 😜😜</p>
        </div>
      )}
    </div>
  );
}
