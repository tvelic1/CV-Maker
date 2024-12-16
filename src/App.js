import React from "react";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <title>CV - Tarik Velić</title>
      <link rel="stylesheet" href="index.css" />
      <div className="container">
        <div className="sidebar">
          <img src="profile.jpg" alt="Profile Picture" />
          <h2>Tarik Velić</h2>
          <div className="personal-info">
            <p className="icon-title">
              <strong>
                <i className="fas fa-phone-alt" /> Phone number:
              </strong>{" "}
              061/528-896
            </p>
            <p className="icon-title">
              <strong>
                <i className="fas fa-envelope" /> E-mail:
              </strong>{" "}
              <a
                style={{ color: "aliceblue" }}
                href="mailto:tarikvelic575@gmail.com"
              >
                tarikvelic575@gmail.com
              </a>
            </p>
            <p className="icon-title">
              <strong>
                <i className="fas fa-map-marker-alt" /> Address:
              </strong>{" "}
              Gazi Mehmed-paše Fidahića 34, Sarajevo
            </p>
            <p className="icon-title">
              <strong>
                <i className="fas fa-birthday-cake" /> Date of birth:
              </strong>{" "}
              27.12.2001
            </p>
            <p className="icon-title">
              <strong>
                <i className="fas fa-mars" /> Gender:
              </strong>{" "}
              Male
            </p>
            <p className="icon-title">
              <strong>
                <i className="fab fa-github" /> GitHub:
              </strong>{" "}
              <a
                style={{ color: "aliceblue" }}
                href="https://github.com/tvelic1"
                target="_blank"
              >
                tvelic1
              </a>
            </p>
            <p className="icon-title">
              <strong>
                <i className="fab fa-linkedin" /> LinkedIn:
              </strong>{" "}
              <a
                style={{ color: "aliceblue" }}
                href="https://www.linkedin.com/in/tarik-veli%C4%87-99b743272/"
                target="_blank"
              >
                Tarik Velić
              </a>
            </p>
          </div>
          <div className="interests">
            <h3>INTERESTS</h3>
            <ul>
              <li className="interests-icon-title">
                <i className="fas fa-laptop-code" /> Web application development
              </li>
              <li className="interests-icon-title">
                <i className="fas fa-mobile-alt" /> Mobile application
                development
              </li>
              <li className="interests-icon-title">
                <i className="fas fa-square-root-alt" /> Mathematics
              </li>
              <li className="interests-icon-title">
                <i className="fas fa-dumbbell" /> Fitness
              </li>
              <li className="interests-icon-title">
                <i className="fas fa-chess" /> Chess
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content">
          <h1>Tarik Velić</h1>
          <p style={{ textAlign: "justify" }}>
            As a BSc in Computer Science I had an opportunity to build
            applications in numerous programming languages. Although I possess
            many skills which are necessary for various parts of software
            development, I can say that my greatest strength is frontend
            development, particularly ReactJS library. I have also earned
            certificates for completing courses in ReactJS, React Native, and
            Node.js. While I have a preference for frontend development, I also
            have experience and proficiency in backend development.
            Additionally, I have been tutoring elementary and high school
            students in mathematics for four years, and for the last two years,
            I have also been tutoring university students in Engineering
            Mathematics 1 and Engineering Mathematics 2. For sure, it was my
            love for mathematics that led me to programming. I am constantly
            motivated to learn new things about software engineering and
            artificial intelligence. Also, I enjoy participating in socially
            useful projects and solving challenging problems. Below are most of
            the projects I have worked on. The projects are also available on
            GitHub which you can access by clicking the link in the personal
            information paragraph. For better experience please checkout
            interactive page by clicking{" "}
            <a href="https://tarikvelic.netlify.app/">HERE.</a>
          </p>
          <div className="experience-section">
            <h2>
              <i className="fas fa-briefcase" /> EXPERIENCE
            </h2>

            <div className="experience-item">
              <h3>
                <i className="fas fa-laptop" /> Full Stack Developer Intern{" "}
                <span>– ZIRA d.o.o., Sarajevo</span>
              </h3>
              <p className="experience-dates">September 2024 – Present</p>
              <p>
                I am currently completing a software engineering internship at
                <strong> ZIRA</strong>, a software company where I am gaining
                valuable experience in web development. I am working on projects
                that strengthen my knowledge in <strong>Java - Spring</strong>{" "}
                and <strong>Angular</strong>, providing me with hands-on
                experience in building real-world applications.
              </p>
            </div>

            <div className="experience-item">
              <h3>
                <i className="fas fa-chalkboard-teacher" /> Teaching Assistant
                (Demonstrator){" "}
                <span>
                  – Faculty of Electrical Engineering, University of Sarajevo,
                  Data Science and Artificial Intelligence
                </span>
              </h3>
              <p className="experience-dates">October 2024 – Present</p>
              <p>
                I serve as a demonstrator for two courses:{" "}
                <strong>Programming in Python</strong> and{" "}
                <strong>Fundamental Concepts of Artificial Intelligence</strong>{" "}
                for the Data Science and AI (DSAI) program. My responsibilities
                include assisting students with programming tasks, organizing
                lab sessions, and providing support during lectures.
              </p>
            </div>
            <div className="experience-item">
              <h3>
              <i class="fa-solid fa-school"></i> Teacher{" "}
                <span>
                  High School for the Blind and Visually Impaired, Sarajevo
                </span>
              </h3>
              <p className="experience-dates">September 2024 – November 2024</p>
              <p>
                I was teaching five subjects: Telephony Practicum,
                Telecommunications Traffic, Telecommunications Law, Fundamentals
                of Telecommunications and Communication and Information
                Technology Practicum.
              </p>
            </div>
          </div>

          <h2>
            <i className="fas fa-graduation-cap" /> EDUCATION AND QUALIFICATIONS
          </h2>
          <p
            style={{
              textAlign: "justify",
              lineHeight: "1.6",
              marginBottom: "10px",
            }}
          >
            <strong>Bachelor of Electrical Engineering</strong>
            <br />
            Faculty of Electrical Engineering Sarajevo&nbsp;–&nbsp;
            <em>Computer Science &amp; Informatics, University of Sarajevo</em>
          </p>
          <p style={{ textAlign: "justify", marginTop: "10px" }}>
            <strong>GPA for final year:</strong> 9.6 <br />
            <strong>Total GPA:</strong> 8.5
          </p>
          <h2>
            <i className="fas fa-lightbulb" /> SKILLS
          </h2>
          <div className="skills">
            <div className="skill">
              <strong>ReactJS</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>JavaScript</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>TypeScript</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Java</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>C, C++</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>React Native</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Python</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>HTML, CSS</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Node.js</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>C#</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>.NET</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Angular</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Testing (White Box + Black Box)</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>SQL</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Blender</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Unity</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Artificial intelligence</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>OOP</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star empty">★</span>
              </span>
            </div>
            <div className="skill">
              <strong>Teamwork</strong>{" "}
              <span className="stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </span>
            </div>
          </div>
          <h2>
            <i className="fas fa-tasks" /> PROJECTS
          </h2>
          <div className="projects">
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/TravelAgency-React",
                  "_blank"
                );
              }}
            >
              <h3>Travel Agency</h3>
              <p style={{ textAlign: "justify" }}>
                Web application made for users to be able to reserve their
                tickets for wanted destinations. For development of this project
                I was using <strong>ReactJS</strong> for frontend,{" "}
                <strong>Node.js</strong> for backend and <strong>MySQL</strong>{" "}
                database. Besides reserving tickets users have access to other
                functionalities which can be seen in source code on GitHub.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/RealEstateExplorer",
                  "_blank"
                );
              }}
            >
              <h3>Real Estate Explorer</h3>
              <p style={{ textAlign: "justify" }}>
                Web application built in <strong>JavaScript</strong> and{" "}
                <strong>Node.js</strong>. Application was designed for exploring
                real estate, seeing their details and impressions of other
                users. Additionally, users can write their experiences and
                impressions linked to specific real estate. Those are only few
                functionalities that this application has.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/Cinema-C-.Net-MVC-project",
                  "_blank"
                );
              }}
            >
              <h3>C# .NET MVC Cinema Project</h3>
              <p style={{ textAlign: "justify" }}>
                Web application designed as a part of group project at Faculty
                of Electrical Engineering Sarajevo. It offers most of
                functionalities that one cinema needs. It was built in{" "}
                <strong>C#</strong> and <strong>.NET</strong>, using{" "}
                <strong>MVC</strong> architecture.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/u/0/folders/1AXrMS55EDE3ZxxQM5dgSaTSLWT7n1SmC",
                  "_blank"
                );
              }}
            >
              <h3>AR Mobile Application - Visualizing ramp in physics</h3>
              <p style={{ textAlign: "justify" }}>
                This project was created as a part of group project for the
                subject of Electrical Engineering Sarajevo. It was built using{" "}
                <strong>Unity</strong>, <strong>Vuforia</strong> library and{" "}
                <strong>C#</strong>. It offers visualizations of physics
                problems for elementary and high school students. Shapes and
                models were created using <strong>Blender</strong>.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/BlackBoxTesting",
                  "_blank"
                );
              }}
            >
              <h3>Black box Testing</h3>
              <p style={{ textAlign: "justify" }}>
                Test automation using <strong>Selenium IDE</strong>,{" "}
                <strong>NUnit Selenium</strong> automation framework, load and
                stress testing using <strong>Loadster</strong>, API testing
                using <strong>Postman</strong>. This was part of individual
                faculty project.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/Unit-Testing",
                  "_blank"
                );
              }}
            >
              <h3>Unit Testing</h3>
              <p style={{ textAlign: "justify" }}>
                I was testing units of application built by my colleagues, also
                as a part of individual faculty project. In general, unit
                testing is something that I always do, for all my projects,
                because I want to improve my QA skills.{" "}
                <strong>Testing Library</strong> and <strong>Jest</strong> were
                used most of the time.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/rpr_kino_projekat",
                  "_blank"
                );
              }}
            >
              <h3>Java - JavaFX Cinema Application</h3>
              <p style={{ textAlign: "justify" }}>
                Cinema application built using <strong>Java</strong> and{" "}
                <strong>JavaFX</strong>. It is basic application for cinema
                which allows users to reserve their tickets, choose their seats
                and see list of all movies currently available. Application also
                offers other functionalities that cinemas need. For more details
                feel free to visit my GitHub.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open("https://github.com/tvelic1/SI-web-app", "_blank");
              }}
            >
              <h3>Field Logistic Control</h3>
              <p style={{ textAlign: "justify" }}>
                Complex group project for managing records made by users of
                application. Project is divided in two applications, mobile
                application for users which is built in{" "}
                <strong>React Native</strong> and web application for
                administrators and superadministrators which is built as a
                combination of <strong>ReactJS</strong> and{" "}
                <strong>.NET Web API</strong>. Basically, we have two roles on
                web application - superadmin and admin. Superadmins are
                responsible for creating companies and admins for companies,
                while on the other hand admins are responsible for creating
                campaigns for companies and locations for campaigns.
                Additionally, admins can create users and assign them two
                campaigns. User can accept that assignment and make record about
                his location. Location will be displayed on Maps via Google Maps
                API, also OCR is possibility for making records. More details
                are available on my GitHub.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open("https://github.com/tvelic1/CV-Maker", "_blank");
              }}
            >
              <h3>CV Maker</h3>
              <p style={{ textAlign: "justify" }}>
                Since it is hard to find very good CV maker that is free, I
                decided to make my own CV maker so I do not have to pay every
                time for good quality CV. This CV is made using my own CV maker
                application. I used <strong>Node.js</strong> for backend and
                exporting data to PDF. <strong>ReactJS</strong> is used for
                frontend. This CV maker will be public soon, so anyone can make
                its own CV. Users will be able to choose which of the given
                designs they want to use.
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/Dijkstra-algorithm",
                  "_blank"
                );
              }}
            >
              <h3>Dijkstra's algorithm experimental evaluation</h3>
              <p style={{ textAlign: "justify" }}>
                For my final thesis at Faculty of Electrical Engineering
                Sarajevo, I had to research about various implementations of
                Dijkstra algorithm, because I wanted to compare performances of
                various ways of implementation. Through this project I got
                familiar with new data structures such as Fibonacci heaps and
                buckets and I implemented algorithm on two different ways in{" "}
                <strong>C++</strong> and compared results for my project.
              </p>
            </div>
            <div
              className="project1"
              onClick={() => {
                window.open(
                  "https://github.com/tvelic1/movies-tvshows",
                  "_blank"
                );
              }}
            >
              <h3>Movies and TV shows</h3>
              <p style={{ textAlign: "justify" }}>
                Application built using <strong>TypeScript</strong> and{" "}
                <strong>ReactJS</strong> offers functionalities like sorting by
                many criteria, recommending, filtering, watching trailers,
                viewing overviews and comments from other users. It allows user
                to have insight in all necessary details from which user can
                decide whether a movie or TV show is worth watching. Those details are:
                vote count, average grade and other real data. Those are only
                some of functionalities which application offers. It is deployed
                on <strong>Netlify</strong> so you can check it out - you can
                find link on my GitHub or you can click{" "}
                <a
                  href="https://ubiquitous-praline-adfb82.netlify.app/"
                  onClick={(event) => {
                    event.preventDefault();
                    window.open(
                      "https://ubiquitous-praline-adfb82.netlify.app/",
                      "_blank"
                    );
                  }}
                >
                  HERE.
                </a>
              </p>
            </div>
            <div
              className="project"
              onClick={() => {
                window.open("https://github.com/tvelic1/medic_web", "_blank");
              }}
            >
              <h3>MedicLab</h3>
              <p style={{ textAlign: "justify" }}>
                Full Stack application built for a clinic in order to manage
                patients and optimize their experience. App is built using{" "}
                <strong>React - TypeScript</strong> for frontend and{" "}
                <strong>Node.js</strong> for backend. Admins of lab (doctors)
                can access the web application where they have insight into
                details about patients and their needs. Additionally, doctors
                can register, update, block or delete patients. On the other
                hand, patients have access to a mobile app that is built using{" "}
                <strong>React Native</strong>. Patients can notify doctors
                (admins) about their condition or potential problem, so they can
                schedule an appointment. Data is stored in{" "}
                <strong>PostgreSQL</strong> database and app is deployed on{" "}
                <strong>Vercel</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
