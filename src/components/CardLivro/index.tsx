import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

interface CardLivroProps {
    livro: {
        id: number;
        titulo: string;
        autor: string;
        preco: number;
        capa: string;
    }
}

export default function CardLivro( { livro }: CardLivroProps) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/home/details/${livro.id}`)
    }

    return (
        <div className={styles.card} onClick={handleClick} role='button' tabIndex={0}>
            <div>
                <img src={livro.capa} alt={`Capa do livro ${livro.titulo}`} />
            </div>
            <div className={styles.about}>
                <div>
                   <h4>{livro.titulo}</h4>
                    <p>{livro.autor}</p> 
                </div>
                <p>R$ {livro.preco}</p>
            </div>
        </div>
    )
}