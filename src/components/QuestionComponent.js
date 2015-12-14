'use strict';

import React from 'react';
// import classNames from 'classnames';

import AnswerComponent from './AnswerComponent';

require('styles//Question.scss');

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        selected: -1
    };

    // this.answer = this.props.answer;
    // this.answers = [];
  }

  handleAnswer(answer) {
    var selectedAnswer = answer.props.answerKey;

    this.setState({ selected: selectedAnswer });
    this.props.onQuestionAnswered(this, selectedAnswer);

    return answer;
  }

  render() {
    var answers = this.props.answers.map( (ans, ix) => {
        return (
          <AnswerComponent answer={ans} key={ix} answerKey={ix}
            correctAnswer={this.state.selected == this.props.answer}
            selectedAnswer={this.state.selected}
            onSelectAnswer={this.handleAnswer.bind(this) } />
        );
    });

    return (
      <div className="question-component">
        <h2>{this.props.question}</h2>

        <div className="lines">
            {answers}
        </div>
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
// QuestionComponent.propTypes = {};
// QuestionComponent.defaultProps = {};

export default QuestionComponent;
