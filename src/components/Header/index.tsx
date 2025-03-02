import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'
import logo from '../../../public/logo.png'
import profile from '../../assets/Profile.png'
import cart from '../../assets/Shop.png'

export default function Header() {
    const navigate = useNavigate();

    function navigateToHome() {
        navigate("/home");
    }
    function navigateToLogin() {
        navigate("/");
    }
    return (
        <>
            <div className={styles.box}>
                <button onClick={navigateToHome}>
                    <img src={logo} alt="logo da livraria" />
                </button>
                <div className={styles.secondaryButtons}>
                <button onClick={navigateToLogin}>
                    <img src={profile} alt="imagem de profile" />
                </button>
                <button>
                    <img src={cart} alt="" />
                </button>
                </div>
            </div>
        </>
    )
}