import "./App.css";
import ModalPage from "./components/ModalPage";
import MotivationText from "./components/MotivationText";

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  return (
    <>
      <section className="banner">
        <div className="overlay">
          <video
            className={questions ? "blur-background" : ""}
            src="pexels-karolina-grabowska-5726626.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div>
        <div className="text-and-logo-container">
          <div className={questions ? "text blur-background" : "text"}>
            <h2>Lose Weight</h2>
            <h3>Like Crazy</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s when an unknown printer took a galley of type
              and scrambled it to make a type specimen book.
            </p>

            <a href="https://fastyslim.de/">Find Out More</a>
          </div>
          <ModalPage questions={questions} />

          <div
            className={
              questions ? "logo-container blur-background" : "logo-container"
            }
          >
            <img
              className="logo"
              src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
            />
          </div>
        </div>

        <ul className={questions ? "sci blur-background" : "sci"}>
          <li>
            <a href="#">
              <img src="facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="instagram.png" />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
