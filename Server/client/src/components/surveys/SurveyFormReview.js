import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
const SurveyFormReview=({onCancel,formValues,submitSurvey,history})=>{
    //console.log(props);
 const reviewFields=formFields.map((field)=>{
     return(
      <div key={field.name}>
          <label 
    style={{fontSize: "16px",fontWeight: "bold",color: "darkcyan"}}>{field.label}</label>
          <div style={{fontSize: "14px",marginBottom:"5px",color:"darkslategrey"}}>
              {formValues[field.name]}
          </div>
      </div>
     );
 })

    return (
    <div>
    <h5 style={{fontFamily:"Roboto",color:"maroon"}}>Please Review Your Survey Details Before Send.</h5>
    {reviewFields}
     <button className='yellow darken-3 btn-flat' onClick={onCancel}>Back</button>
     <button className='green white-text btn-flat right' onClick={()=>submitSurvey(formValues,history)}>
     Send Survey
     <i className='material-icons right' >email</i>
     </button>
    </div>)
}
function mapStateToProps(state){
    //console.log(state);
    return{
        formValues:state.form.surveyForm.values
    };
}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));