//Shows FormFields
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
class SurveyForm extends Component {
  renderFields() {
    const rendercomp = formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          component={SurveyField}
          label={label}
          name={name}
        />
      );
    });
    return rendercomp;
  }
  render() {
    return (
      <div className="SurveyFormContainer">
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text ">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide value of ${name}!!!`;
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm", //this line only naming form reducer as surveyForm
  destroyOnUnmount: false,
})(SurveyForm);
