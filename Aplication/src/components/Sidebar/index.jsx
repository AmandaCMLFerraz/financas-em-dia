import React from 'react';
import { PlusCircleOutlined, MinusCircleOutlined, UserOutlined, SolutionOutlined, CreditCardOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Menu, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom'; // Importe o hook useNavigate

const items = [
  {
    key: '1',
    label: 'Cadastros',
    icon: <EllipsisOutlined />,
    children: [
      {
        key: 'c1',
        label: 'Receitas/Despesas',
      },
      {
        key: 'c2',
        label: 'Categoria',
      },
    ],
  },
  {
    key: '2',
    label: 'Consultas',
    icon: <SolutionOutlined />,
    children: [
      {
        key: 'c11',
        label: 'Extrato',
      },
      {
        key: 'c12',
        label: 'Pagamentos',
      },
    ],
  },
];

function Sidebar() {
  const navigate = useNavigate(); // Utilize useNavigate para navegar entre rotas

  const onClick = (e) => {
    const { key } = e; // Obtenha a chave do evento

    switch(key) {
      case 'c1': 
        navigate('/revenues-expenses');
        break;
      case 'c2': 
        navigate('/category');
        break;
      // Adicione outros casos conforme necessário
      default:
        break; // Adicione uma ação padrão se necessário
    }
  };

  return (
    <div className='flex flex-col h-screen w-2/12'>
      <div className='flex items-center p-4 border'>
        <Avatar 
          icon={<UserOutlined />} // Substitua pela URL da sua imagem de perfil
          size="large"
          className='mr-2'
        />
        <span>Amanda Ferraz</span>
      </div>
      <Menu
        onClick={onClick}
        className='flex-1'
        defaultSelectedKeys={['sub1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
