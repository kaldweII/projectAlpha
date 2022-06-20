import SignUpForm from '../auth/SignUpForm';
import './SignUpPage.css'

function SignUpPage(){
    return(
        <div>
            <SignUpForm/>
            <div className='img'></div>
            <h1 className='signupWelcome'>Welcome to ASARᴴᴿ</h1>
            <h3 className='signupSubWelcome'>Create a contractor account</h3>
            <p className='signupSubWelcome'>Already have an account? Click <a href='/login'>here.</a></p>
        </div>
    )
}

export default SignUpPage;