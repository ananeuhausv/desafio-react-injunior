import styles from './styles.module.css'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddToCartButton from '../../components/AddToCartButton';
import { Livro } from '../../types/Livro'
import BackToHomeButton from '../../components/BackToHomeButton';

export default function BookDetails() {
    const { id } = useParams(); 
    const [livro, setLivro] = useState<Livro | null>(null);
    

    useEffect(() => {
        axios.get(`http://localhost:3000/livros/${id}`)
            .then(response => setLivro(response.data))
            .catch(error => console.error('Algo deu errado: ' + error))
    },[])

    return (
        <>
            <BackToHomeButton text="Detalhes do livro"/>
            <div className={styles.bookContainer}>
                <div className={styles.bookCover}>
                    <img src={livro?.capa} alt="capa do livro" />
                </div>
                <div className={styles.bookInfoContainer}>
                    <div className={styles.bookInfo}>
                        <h1>{livro?.titulo}</h1>
                        <h3>{livro?.autor}</h3>
                    </div>
                    <div className={styles.bookSynopsis}>
                        <h3>Sinopse</h3>
                        <p>{livro?.sinopse}</p> 
                    </div>  
                </div>
            </div>

            {livro && <AddToCartButton livro={livro}/>}
            
        </>
    );
}