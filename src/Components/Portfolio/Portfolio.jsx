import "./Portfolio.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import React from "react";

import Sidebar from "../../img/sidebar.jpg";
import Name from "../../img/name_it.jfif";
import HOC from "../../img/dianox.jpg";
import Split from "../../img/split.jpg";
import Crypto from "../../img/crypto.jpg";
import Admin from "../../img/admin.jpg";
import Mern from "../../img/mern.jpg";
import MusicApp from "../../img/azure.jpg";
import POT from "../../img/pot3.jpg";
import POT2 from "../../img/pot2.jpg";
import POT3 from "../../img/pot1.jpg";
import POT4 from "../../img/todo.png";
import POT5 from "../../img/weather.jpg";
import Web from "../../img/web.png";
import Github from "../../img/cat.png";

function Portfolio() {
  const handleDragStart = (e) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  const items = [
    <div className="portfolio-1">
      <div>
        <img
          src={HOC}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          href="https://www.dianox.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="portfolio-heading">Dianox</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Full-stack application for Dianox. Developed by using technologies like
        Next.js and Bootstrap for the frontend, and Node.js, MongoDB and AWS for
        the backend.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.dianox.com/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Dianoxbio/dianox-app-v1.7.5/tree/develop/dianox"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">
        Next.js, MongoDB, AWS, Node.js and Bootstrap
      </p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={MusicApp}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          href="https://shan-meals-sharing.azurewebsites.net/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="portfolio-heading">Meals Sharing App</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Full-stack app on Azure that helps users to share good meals with others
        and user can also book meals. The user can also review the meals and
        reserved place for specific meals.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shan-meals-sharing.azurewebsites.net/home"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23/meal-sharing"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, C#/.NET, MySQL, Azure </p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Sidebar}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          href="https://meal-sharing-shan.herokuapp.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="portfolio-heading">Meals App</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Full-stack app that helps users to share good meals with others and user
        can also book meals. The user can also review the meals and reserved
        place for specific meals.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://meal-sharing-shan.herokuapp.com/home"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23/meal-sharing"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, Node.js, Express.js, MySQL</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Name}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://staging-simply-name-it.herokuapp.com/profile"
        >
          <h2 className="portfolio-heading">Simply Name it!</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Simply-name it! is a voting app that helps users to decide together in
        groups. The app is designed in a way that users can invite other users
        to participate in the election of the winning option.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://staging-simply-name-it.herokuapp.com/profile"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, MySQL, Storybook, AWS and Firebase</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Split}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://expenses-spliting-app.vercel.app/"
        >
          <h2 className="portfolio-heading">Expenses App</h2>
        </a>
      </div>
      <p className="portfolio-des">
        React.js based web app for splitting the expenses spent among your
        colleagues and friends. Its full-stack application with the backend at
        MongoDB. Developed as a part of the coding challenge.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://expenses-spliting-app.vercel.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23/expenses-sharing-frontend"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">
        React, SASS, Bootstrap, Node, Express, MongoDB
      </p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Crypto}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://crypto-core.vercel.app/"
        >
          <h2 className="portfolio-heading">Crypto</h2>
        </a>
      </div>
      <p className="portfolio-des">
        React based web app for crypto currency data visualization. The
        application is used dynamic data from external api and display it in
        different chart forms as well as indvisuially.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://crypto-core.vercel.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Crypto</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23/crypto-data"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React.js, Material ui, REST api, and CSS</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Admin}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://admin-panel-shan.vercel.app/"
        >
          <h2 className="portfolio-heading">Admin Panel</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Full-stack application for coding challenge. Developed by using
        technologies like React, Charts.js and Bootstrap for the frontend, and
        Node.js for the backend.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://admin-panel-shan.vercel.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23/React-admin-panel"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, Charts.js, Node.js and Bootstrap</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={POT4}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://distracted-einstein-f6e628.netlify.app/"
        >
          <h2 className="portfolio-heading">ToDo App </h2>
        </a>
      </div>
      <p className="portfolio-des">
        Todo app is a simple app to write and manage to do tasks. This app has
        functionality of drag and drop.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://distracted-einstein-f6e628.netlify.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks </h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, HTML, and CSS</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={Mern}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://heuristic-visvesvaraya-c4c6f8.netlify.app/"
        >
          <h2 className="portfolio-heading">Reparing Applications</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Full-stack application for boat repairing. The app provide users the
        list of mechanics to repair their boats and ships build by using
        technologies like React and Bootstrap for the frontend, and Node.js and
        MongoDB for the backend and database.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://heuristic-visvesvaraya-c4c6f8.netlify.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, MongoDB, Node.js and Bootstrap</p>
    </div>,
    <div className="portfolio-1">
      <div>
        <img
          src={POT}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shan-portfolio.vercel.app/"
        >
          <h2 className="portfolio-heading">Animated Portfolio</h2>
        </a>
      </div>
      <p className="portfolio-des">Animated portfolio</p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shan-portfolio.vercel.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">React, SCSS, Bootstrap</p>
    </div>,

    <div className="portfolio-1">
      <div>
        <img
          src={POT5}
          onDragStart={handleDragStart}
          role="presentation"
          className="portfolio-1mg"
          alt=""
        />
      </div>

      <div className="portfolio-3">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shan-weather.netlify.app/"
        >
          <h2 className="portfolio-heading">Weather app</h2>
        </a>
      </div>
      <p className="portfolio-des">
        Weather app is an app to find weather details of cities and countries.
      </p>
      <div className="portfolio-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://shan-weather.netlify.app/"
        >
          <img src={Web} alt="" className="portfolio-2mg" />
        </a>
        <h2 className="portfolio-heading">Stacks</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/shanhaider23"
        >
          <img src={Github} alt="" className="portfolio-2mg" />
        </a>
      </div>
      <p className="portfolio-sta">HTML, CSS, and JavaScript(DOM)</p>
    </div>,
  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}

      <span className="recent-projects">Projects</span>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        items={items}
        autoPlay
        responsive={responsive}
      />
    </div>
  );
}

export default Portfolio;
