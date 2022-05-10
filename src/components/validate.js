export default function validate (values) {
    let errors = {}

    if(!values.fullname.trim()){
        errors.fullname ="Username required"
    }

    // email
    if (!values.email) {
        errors.email ="Email required";
    }
    
    if(!values.password) {
        errors.password = 'Password is required';
    }
    else if (values.password.length<8) {
        errors.password = ' Password needs to be 8 characters or longer';
    }
    if (!values.confirm_password) {
        errors.confirm_password = "Password is required"
    }
    else if (values.confirm_password !== values.password)
    {
        errors.confirm_password="password do not match"
    }

    if (!values.contact){
        errors.contact = "Number required"

    }
    else if (values.contact.length >10 || values.contact.length <10 ){
    errors.contact= "Number should be of 10 digits only"
    }
    return errors;
}