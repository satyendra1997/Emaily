//SurveyNew shows SurveyForm and SurveyReview
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import { reduxForm } from "redux-form";
class SurveyNew extends Component {
  // constructor(props)
  // {
  //     super(props);
  // this.state={isFormReview:false}
  // }
  state = { isReviewForm: false };
  renderContent() {
    if (this.state.isReviewForm) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ isReviewForm: false })}
        />
      );
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ isReviewForm: true })}
      />
    );
  }
  render() {
    return <div className="surveyForm">{this.renderContent()}</div>;
  }
}
export default reduxForm({
  form: "surveyForm",
})(SurveyNew);
