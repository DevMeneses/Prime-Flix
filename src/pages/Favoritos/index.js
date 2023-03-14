import { useEffect, useState } from "react";
import "./favoritos.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@primeflix");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleFilme(id){
    let filtroFilmes = filmes.filter( (item) => {
        return (item.id !== id)
    })

    setFilmes(filtroFilmes);
    localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))
    toast.success("Filme removido com sucesso")
  }

  return (
    <div className="meus-filmes">
      <h1>Minha Lista de Favoritos</h1>

      {filmes.length === 0 && <span className="Nenhum-filme">Você não possui nenhum filme salvo :( </span>}

      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link className="Detalhes" to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <button className="botao-excluir" onClick={() => handleFilme(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
