'use strict';

import React from 'react';
import QuestionComponent from './QuestionComponent';
import $ from 'jquery';

require('styles//Quiz.scss');

class QuizComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
      userAnswers: []
    }

    $.get(this.props.source, (data) => {
      this.setState({
        questions: data.map( (q, ix) => {
          return(
            <QuestionComponent
              question={q.question}
              answers={q.answers}
              answer={q.correct}
              // scores={q.scores}
              key={ix}
              onQuestionAnswered={this.addAnswer.bind(this)} /> )
        })
      });
    });

    // $.get('../sources/answers.json', (data) => {
    //   this.answers = data;
    // });
  }

  addAnswer(question, answer) {
    var newUserAnswers = this.state.userAnswers;
    newUserAnswers.push(answer);

    this.setState({
      userAnswers: newUserAnswers
    });

    // debugger;
  }

  render() {
    return (
      <div className="quiz-component">
        <h1>Pete Kristeen-Selma Bordon</h1>

        <div className="panes">
          {this.state.questions}
        </div>
      </div>
    );
  }
}

QuizComponent.displayName = 'Quiz';

// Uncomment properties you need
// QuizComponent.propTypes = {};
// QuizComponent.defaultProps = {};

export default QuizComponent;
