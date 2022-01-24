import TypeTestWrapper from "./TypeTestWrapper";
import {shuffle, speak} from "../../functions/functions";
import {useEffect, useState} from "react";

const TypeTest = ({ test, setSubmit }) => {

  const [active, setActive] = useState(null)
  const [myAnswer, setMyAnswer] = useState("");

  useEffect(() => {
    let { words } = test;
    setActive(null);

    shuffle(words);
  }, [test])

  useEffect(() => {
    setSubmit(myAnswer === test.answer)
  }, [myAnswer])

  return (
    <TypeTestWrapper>
      <div className="container">
        <div className="question-block">
          <div className="question my-5">
            <h2><span className="word">"{test.question}"</span> soz qanday tarjima qilinadi ?</h2>
          </div>

          <div className="variants">
            <ul>
              {test.words.map((word, item) => (
                <li
                  key={word}
                  className={item === active ? "active" : ""}
                  onClick={() => {
                    speak(word);
                    setActive(item);
                    setMyAnswer(word);
                  }}
                >
                  {word}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TypeTestWrapper>
  );
};

export default TypeTest;
