import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const welcomeButtonHandler = () => {};

const App = (props) => {
  const {errorCount} = props;
  return <WelcomeScreen
    errorCount={errorCount}
    onWelcomeButtonClick={welcomeButtonHandler} />;
};

export default App;

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};
