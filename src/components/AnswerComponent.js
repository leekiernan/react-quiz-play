'use strict';

import React from 'react';
import classNames from 'classnames';

require('styles//Answer.scss');

class AnswerComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   selected: false,
    //   disable: false
    // }
  }

  onClick() {
    // if(this.state.disable) { return false; }
    // this.setState({ selected: true });

    this.props.onSelectAnswer(this);
  }

  render() {
    return (
      <div className={ classNames('answer-component',
        {
          selected: this.props.selectedAnswer,
          correct: this.props.correctAnswer
        } )}
        disabled={this.props.selectedAnswer >= 0}
        onClick={this.onClick.bind(this)} >
        {this.props.answer}
      </div>
    );
  }
}

AnswerComponent.displayName = 'AnswerComponent';

// Uncomment properties you need
// AnswerComponent.propTypes = {};
// AnswerComponent.defaultProps = { state:};

export default AnswerComponent;
