import style from './styles.module.css'
import { useEffect, useState } from 'react'
import banner from '../../assets/bannerArea.png'
import axios from 'axios';
import CardGenero from '../../components/CardGenero';

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    genero: string;
    preco: number;
    sinopse: string;
    capa: string;
}

export default function HomePage() {

    const [livros, setLivros] = useState<Livro[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/livros')
            .then(response => setLivros(response.data))
            .catch(error => console.error('Algo deu errado: ' + error))
    }, [])

    const livrosPorGenero: { [key: string]: Livro[] } = livros.reduce((acc, livro) => {
        acc[livro.genero] = acc[livro.genero] || []
        acc[livro.genero].push(livro)
        return acc
    }, {} as { [key: string ]: Livro[] })

    return (
        <>
            <div className={style.banner}>
               <img src={banner} alt="banner do site, informando 25% de desconto nos livros do Paulo Coelho" /> 
            </div>

            {Object.keys(livrosPorGenero).map(genero => (
                <CardGenero key={genero} genero={genero} livros={livrosPorGenero[genero]} />
))}
        </>
    );
}