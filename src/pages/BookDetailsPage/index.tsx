import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Livro {
    id: number;
    titulo: string;
    autor: string;
    preco: number;
    capa: string;
    sinopse: string;
}

export default function BookDetails() {
    const { id } = useParams(); 
    const [livro, setLivro] = useState<Livro | null>(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/livros/${id}`)
            .then(response => setLivro(response.data))
            .catch(error => console.error('Algo deu errado: ' + error))
    },[])

    return (
        <>
        <div>
            <h1>Detalhes do Livro {id}</h1>
        </div>
        <div>
            <img src={livro?.capa} alt="capa do livro" />
        </div>
        <div>
            <h1>{livro?.titulo}</h1>
            <h3>{livro?.autor}</h3>

            <p>{livro?.sinopse}</p>
        </div>
        <button>{livro?.preco} Adicionar ao carrinho</button>
        </>
    );
}