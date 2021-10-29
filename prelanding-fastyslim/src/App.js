import React, { useState } from "react";
import "./App.css";
import ModalPage from "./components/ModalPage";
import Axios from "axios";

function App() {
  let [questions, setQuestions] = useState([{}]);
  const [isOpen, setIsOpen] = useState(true);

  const loadData = async () => {
    let url = `http://localhost:3001/read`;

    await Axios.get(url).then((response) => {
      setQuestions(response.data.data);
    });
  };
  return (
    <>
      <section className="banner">
        <div className="overlay">
          <video
            className={isOpen ? "blur-background" : ""}
            src="pexels-karolina-grabowska-5726626.mp4"
            muted
            loop
            autoPlay
          ></video>
        </div>
        <div className="text-and-logo-container">
          <div className={isOpen ? "text blur-background" : "text"}>
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
          <ModalPage
            questions={questions}
            loadData={loadData}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <div
            className={
              isOpen ? "logo-container blur-background" : "logo-container"
            }
          >
            <img
              className="logo"
              src="https://fastyslim.de/wp-content/uploads/2020/12/fastyslim-blister.png"
            />
          </div>
        </div>

        <ul className={isOpen ? "sci blur-background" : "sci"}>
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
