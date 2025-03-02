import { useNavigate } from 'react-router-dom';
import CardLivro from '../CardLivro'
import style from './styles.module.css'
import { Livro } from '../../types/Livro'

interface CardGeneroProps {
    genero: string;
    livros: Livro[];
}

export default function CardGenero({ genero, livros }: CardGeneroProps) {

    const navigate = useNavigate()

    function handleClick() {
        navigate("/home/genre")
    }

    const livrosFiltrados = livros.filter(livro => livro.genero === genero).slice(0,4)

    return (
        <>
            <div className={style.card}>
                <div className={style.about}>
                   <h1>{genero}</h1>
                    <p onClick={handleClick}>Ver mais</p> 
                </div>
                <div className={style.livros}>
                    {livrosFiltrados.map(livro => (
                        <CardLivro key={livro.id} livro={livro}/>
                    ))}
                </div>
            </div>
        </>
    )
}