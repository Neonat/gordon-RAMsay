// // src/components/Home.js
// import React from 'react';

// function Home() {
//     return (
//         <div style={{ textAlign: "center", marginTop: "50px" }}>
//             <h2>Welcome to Gordon-RAMsay</h2>
//             <h2>Log in and lock in a healthier you.</h2>
//         </div>
//     );
// }

// export default Home;

import React from "react";
import "./Home.css"; // Import the stylesheet

function Home() {
    return (
        <div className="home-container">
            <h2 className="home-heading">Welcome to Gordon-RAMsay</h2>
            <h2 className="home-heading">Log in and lock in a healthier you.</h2>
        </div>
    );
}

export default Home;
