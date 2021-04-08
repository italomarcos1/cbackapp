import burger from '~/assets/burger.jpeg';
import fries from '~/assets/fries.jpeg';
import brownie from '~/assets/brownie.jpg';

export const products = [
  {
    id: '1',
    title: 'Hamburgueria do Barão',
    address: 'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
    rating: 3,
    picture: burger,
  },
  {
    id: '2',
    title:
      'Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita Batata Frita',
    address:
      'Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil Rua Barão de Camargos 654, Uberlândia, 38400-160 Brasil',
    rating: 4,
    picture: fries,
  },
  {
    id: '3',
    title: 'Brownies de Chocolate',
    address: 'Beco Diagonal',
    rating: 5,
    picture: brownie,
  },
];
