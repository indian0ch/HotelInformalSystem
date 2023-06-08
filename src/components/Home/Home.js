import React from "react";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.homeContainer}>
      <h2>Welcome to a Hotel system</h2>
      <div className={styles.textContainer}>
        <article>
          This hotel system is a software application implemented using
          TypeScript and the React framework. It incorporates various design
          patterns to achieve a well-structured and maintainable codebase. The
          system focuses on managing hotel operations and providing a seamless
          user experience for both guests and staff members.<br></br>
          <br></br>
          The development of this hotel system was undertaken as part of a
          course work project. It served as an opportunity to apply theoretical
          knowledge and practical skills in software development using design
          patterns. <br></br><br></br>
          At the top of the page, there is a user-friendly menu that
          allows easy navigation throughout the system. This menu provides
          access to different sections and features of the hotel system,
          enabling users to quickly find the information they need and perform
          various tasks. Whether it's making reservations, managing guest
          profiles, or accessing reports, users can effortlessly navigate
          through the system using the intuitive menu.
        </article>
        <p>&copy; Powered by Andrii Fesiuk KP-12</p>
      </div>
    </div>
  );
};

export default Home;
