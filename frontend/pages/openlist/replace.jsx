import React, { useState } from 'react';

const App = () => {
  // Step 1: Create state to toggle visibility of the small screen
  const [showSmallScreen, setShowSmallScreen] = useState(false);

  // Step 2: Handle the button click to toggle the small screen
  const handleReplaceClick = () => {
    setShowSmallScreen(!showSmallScreen);
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleReplaceClick}>
        {showSmallScreen ? 'Hide Small Screen' : 'Show Small Screen'}
      </button>

      {/* Step 3: Conditionally render the small screen inside the same screen */}
      <div style={styles.screenContainer}>
        {showSmallScreen ? (
          <SmallScreen />
        ) : (
          <LargeScreen />
        )}
      </div>
    </div>
  );
};

// Large screen (or default screen)
// !!!!!!!!!!!!!!!!!!!change this to the actual main page/ integrate with the main jsx file
const LargeScreen = () => {
  return (
    <div style={styles.largeScreen}>
      <h2>This is the large screen</h2>
      <p>Click the button to bring up a small screen inside this section.</p>
    </div>
  );
};

// Small screen (the screen that will replace the large screen)
const SmallScreen = () => {
  return (
    <div style={styles.smallScreen}>
      <h3>This is the small screen</h3>
      <p>This screen appears inside the larger screen.</p>
    </div>
  );
};


export default App;
