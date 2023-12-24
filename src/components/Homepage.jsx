import React from "react";
import reactImage from "../images/react.png";
import jsImage from "../images/js.png";
import firebaseImage from "../images/firebase.jpg";
import nodejsImage from "../images/nodejs.png";
import profile from "../images/profile-img.JPG";
import htmlCss from "../images/htmlCss.png";
import redux from "../images/redux.jpg";
const Homepage = () => {
  return (
    <div className="container text-center">
      <h1>Code Code</h1>

      <img src={profile} className="profileImage" />

      <p>
        「シンプル」 をコンセプトに様々なアプリケーションを作成しました。
        <br></br>より多くの知見と知識を得るために個人開発を進めています。
        <br />
        何卒よろしくお願いいたします。
      </p>

      <section className="page-section" id="services">
        <div className="service">
          <div className="text-center">
            <h2 className="section-heading text-uppercase fw-normal">
              PORTFOLIO
            </h2>
            <h3 className="section-subheading text-muted mb-5 fw-lighter">
              私が作った作品一覧です
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <a href="https://schedule-app-ten.vercel.app/" target="_blank">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-tasks fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/ToDo-App"
                target="_blank"
              >
                <h4 className="my-3 text-black">ToDo App</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://line-app-ebon.vercel.app/" target="_blank">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-commenting fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/line-app"
                target="_blank"
              >
                <h4 className="my-3 text-black">Chat App</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://pokemon-app-pi.vercel.app/" target="_blank">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/pokemon-app"
                target="_blank"
              >
                <h4 className="my-3 text-black">Pokedex</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://bulletin-board-three.vercel.app/"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-pencil fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/BulletinBoard"
                target="_blank"
              >
                <h4 className="my-3 text-black">Bulletin Board</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://note-app-liart.vercel.app/" target="_blank">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-file-text fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/Schedule-List-App"
                target="_blank"
              >
                <h4 className="my-3 text-black">Schedule List</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a href="https://typing-vanilla.vercel.app/" target="_blank">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-black"></i>
                  <i className="fas fa-keyboard fa-stack-1x fa-inverse"></i>
                </span>
              </a>
              <a
                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                href="https://github.com/kansyashimasu/typing-vanilla-"
                target="_blank"
              >
                <h4 className="my-3 text-black">Typing Game</h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div className="text-center">
          <h1 className="title">My Skills</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={htmlCss} />
              <h4>HTML & CSS</h4>
            </div>
            <div className="col-md-4 services">
              <img src={jsImage} />
              <h4>JavaScript</h4>
            </div>
            <div className="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
            </div>
            <div className="col-md-4 services">
              <img src={nodejsImage} />
              <h4>Node.js</h4>
            </div>
            <div className="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
            </div>
            <div className="col-md-4 services">
              <img src={redux} />
              <h4>Redux</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
