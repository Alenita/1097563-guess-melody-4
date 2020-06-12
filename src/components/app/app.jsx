import React from "React";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {errorCount} = props;
  return <WelcomeScreen errorCount={errorCount} />;
};

export default App;

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};
