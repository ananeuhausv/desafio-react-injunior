import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

interface BackToHomeButtonProps {
    text: string;
}

export default function BackToHomeButton({ text }: BackToHomeButtonProps) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/home");
    }

    return (
        <div className={styles.detailsButton}>
            <button onClick={handleClick}> {text}</button>
        </div>
    )
}