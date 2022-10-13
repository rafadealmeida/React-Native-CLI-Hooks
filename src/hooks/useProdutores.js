import {useState, useEffect} from 'react';
import {getProdutores} from '../service/GetData';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const response = getProdutores();
    response.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    setTitulo(response.titulo);
    setLista(response.lista);
  }, []);

  return [titulo, lista];
}
