import loginBkg from '../../assets/LoginArt.png'
import LoginForm from '../auth/LoginForm';
import './LoginPage.css'




function LoginPage(){
    return(
        <div>
            <LoginForm/>
            <div className='img'></div>
            <h1 className='loginWelcome'>Welcome to ASARᴴᴿ</h1>
            <h3 className='loginSubWelcome'>Log in to access your account</h3>
            <p className='loginSubWelcome'>Are you a contractor? Click <a href='/sign-up'>here</a> to sign up.</p>
        </div>
    )
}

export default LoginPage;