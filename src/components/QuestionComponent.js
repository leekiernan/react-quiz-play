'use strict';

import React from 'react';
// import classNames from 'classnames';

import AnswerComponent from './AnswerComponent';

require('styles//Question.scss');

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: -1,
      canNext: false
    };

    // this.answer = this.props.answer;
    // this.answers = [];
  }

  handleAnswer(answer) {
    var selectedAnswer = answer.props.answerKey;

    this.setState({
      selected: selectedAnswer,
      canNext: true
    });

    this.props.onQuestionAnswered(this, selectedAnswer);

    return answer;
  }


  render() {
    var answers = this.props.answers.map( (ans, ix) => {
        return (
          <AnswerComponent answer={ans} key={ix} answerKey={ix}
            correctAnswer={this.props.answer == ix && this.state.selected > -1}
            selectedAnswer={this.state.selected == ix}
            onSelectAnswer={this.handleAnswer.bind(this) } />
        );
    });

    return (
      <div className="question-component">
        <h2>{this.props.question}</h2>

        <div className="lines">
            {answers}
        </div>

        <button disabled={!this.state.canNext}>Next</button>
      </div>
    );
  }
}

QuestionComponent.displayName = 'QuestionComponent';

// Uncomment properties you need
// QuestionComponent.propTypes = {};
// QuestionComponent.defaultProps = {};

export default QuestionComponent;
