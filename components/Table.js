import React from "react";
import styles from "../styles/Table.module.css";

function Table() {
  return (
    <div className={styles.leaderboardWrapper} id='leaderboard'>
      <div>
        <h2 className={styles.leaderboardHeader}>Leaderboard(Colleges)</h2>
      </div>
      <div className={styles.leaderboardInnnerWrapper}>
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shriN8z6JlgkRmxGS?backgroundColor=purple&viewControls=on"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="533"
          style={{ background: "transparent", border: "1px solid #ccc" ,borderRadius:"5px"}}
        ></iframe>
      </div>
    </div>
  );
}

export default Table;
