import { MouseEvent } from "react";
import "./App.css";

function App() {
  const onclick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentBtn = e.currentTarget.parentElement?.parentNode?.children[1];
    if (currentBtn?.classList.contains("active")) {
      currentBtn.classList.remove("active");
      return;
    }
    currentBtn?.classList.add("active");
  };

  return (
    <main className="container">
      <section className="content">
        {data.map((ele: { question: string; answer: string }) => (
          <div className="wapper-question" key={ele.question}>
            <div className="question">
              <h2>{ele.question}</h2>
              <button className="btn" onClick={onclick}>
                +
              </button>
            </div>
            <div className="answer">
              <p>{ele.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;

const data = [
  {
    question: "how much time will take me to land my first job ?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
    obcaecati amet alias quia nesciunt quis tempora accusamus magnam
    est beatae voluptatum ratione deleniti, fuga minus, cupiditate
    dolorum, consequatur numquam in.`,
  },
  {
    question: "how much time will take me study for my first job ?",
    answer: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
    obcaecati amet alias quia nesciunt quis tempora accusamus magnam
    est beatae voluptatum ratione deleniti, fuga minus, cupiditate
    dolorum, consequatur numquam in.`,
  },
  {
    question: "how much time will take me to be rich ?",
    answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
    obcaecati amet alias quia nesciunt quis tempora accusamus magnam
    est beatae voluptatum ratione deleniti, fuga minus, cupiditate
    dolorum, consequatur numquam in.`,
  },
];
