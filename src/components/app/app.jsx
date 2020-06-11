import React from "React";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorCount} = props;
  return <WelcomeScreen errorCount={errorCount} />;
};

export default App;
