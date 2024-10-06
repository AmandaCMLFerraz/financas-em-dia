import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Sidebar from '../../components/Sidebar';
import Form from '../../components/Form';

function Category() {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const [allCategories, setAllCategories] = useState([]); // Inicializa como um array vazio

  // Função para carregar as categorias
  async function loadCategories() {
    const token = localStorage.getItem('token');
    try {
      const {
        data: { category },
      } = await api.get('/list-categories', {
        headers: {
          Authorization: `Bearer ${token}` // Envia o token no cabeçalho
        },
      });
      setAllCategories(category);
    } catch (err) {
      console.error('Erro ao carregar categorias', err);
    }
  }

  // Carrega as categorias ao montar o componente
  useEffect(() => {
    loadCategories();

  }, []); // Chama essa função apenas uma vez ao montar o componente

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      await api.post('/category', {
        name: nameRef.current.value,
        description: descriptionRef.current.value
      }, {
        headers: {
          Authorization: `Bearer ${token}` // Envia o token no cabeçalho
        }
      });
      
      alert("Categoria cadastrada com sucesso.");
      // Chama loadCategories novamente para atualizar a lista de categorias
      loadCategories();
      nameRef.current.value = '';
      descriptionRef.current.value = '';
    } catch (err) {
      console.error('Erro ao cadastrar categoria', err); // Log do erro
      alert("Erro ao cadastrar categoria.");
    }
  }

  return (
    <div className='flex w-full h-screen'>
      <Sidebar />
      <div className='flex items-center flex-col w-full'>
        <h2 className="text-2xl mb-6 mt-6">Cadastro de Categoria</h2>
        <div className="flex w-full max-w-6xl">
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col w-1/2">
              <label className='ml-5'>Categoria:</label>
              <Input ref={nameRef} />
            </div>
            <div className="flex flex-col w-1/2">
              <label className='ml-5'>Descrição:</label>
              <Input ref={descriptionRef} />
            </div>
            <Button type="submit">Salvar</Button>
          </Form>
        </div>
        <div className="w-full max-w-6xl mt-6">
          <h3 className="text-xl mb-4">Categorias Cadastradas:</h3>
          <ul>
            {allCategories.map(category => (
              <li key={category.id}>
                {category.name} - {category.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Category;
