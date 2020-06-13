import React from "react";
import WelcomeScreen from "./welcome-screen.jsx";
import renderer from "react-test-renderer";

it(`Rendering is ok`, () => {
  const tree = renderer
      .create(<WelcomeScreen
        errorCount={3}
        onWelcomeButtonClick={() => {}}
      />)
        .toJSON();

  expect(tree).toMatchSnapshot();
});
