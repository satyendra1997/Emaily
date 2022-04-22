const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails)=>{
  const invalidEmailsArray=
  emails.split(',')
  .map(email=>email.trim())
  .filter(email=>email.length && emailRegex.test(email)===false)
  if(invalidEmailsArray.length)
  {
      return `These are not valid Emails:- ${invalidEmailsArray}`
  }

  return;
};