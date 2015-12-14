require('normalize.css');
require('styles/App.css');

import React from 'react';
import QuizComponent from './QuizComponent';


class AppComponent extends React.Component {
  render() {
    return (
      <QuizComponent source="../sources/questionnaire.json" />
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
