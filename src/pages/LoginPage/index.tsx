import login from '../../assets/login-background.png'
import logo from '../../../public/logo.png'
import style from './styles.module.css'
import LoginInput from '../../components/LoginInput'

export default function LoginPage() {
    

    return(
        <>
            <div className={style.box}>
                <div className={style.background}>
                <img src={login} alt="foto de livros e uma luminária"/> 
                </div>
                <div className={style.login}>
                    <img src={logo} alt="logo" />

                    <p>Bem vindo(a)!</p>
                    <h2>Entre na sua conta</h2>

                    <LoginInput/>
                    
                </div>
            </div>
        </>
    )
}