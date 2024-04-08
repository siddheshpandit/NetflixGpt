export const checkValidData=(email,password,firstname)=>{
    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(firstname && firstname.length===0) return 'Please enter valid first name'
    if(!isEmailValid) return 'Please enter a valid email address'
    if(!isPasswordValid) return 'Your password is not valid'
    return null;
}