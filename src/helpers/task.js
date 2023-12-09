const productos = [
    {
      id: 1,
      name: 'Cerveza Andes',
      description: 'lorem dsdsdsadsadasdasdsadsad',
      category: 'cerveza',
      imgUrl: 'cerveza-andes ipa.webp',
      price: 800,
      stock: 10,
    },
    {
      id: 2,
      name: 'Bacardi Carta Blanca',
      description: 'lorem dsdsdsadsadasdasdsadsad',
      category: 'ron',
      imgUrl: 'ron-bacardi carta blanca.webp',
      price: 8000,
      stock: 10,
    },
    {
      id: 3,
      name: 'Tanqueray London Dry Gin',
      description: 'lorem dsdsdsadsadasdasdsadsad',
      category: 'gin',
      imgUrl: 'gin-tanqueray.webp',
      price: 10000,
      stock: 10,
    },
    {
      id: 4,
      name: 'Bombay Sapphire',
      description: 'lorem dsdsdsadsadasdasdsadsad',
      category: 'gin',
      imgUrl: 'gin-bombay.webp',
      price: 20000,
      stock: 10,
    },
    {
      id: 5,
      name: 'Chivas Regal Mizunara',
      description: 'lorem dsdsdsadsadasdasdsadsad',
      category: 'whisky',
      imgUrl: 'whisky-chivas regal mizunara.webp',
      price: 50000,
      stock: 10,
    },
  ];

export const task = (id) =>
  new Promise((res, rec) => {
    setTimeout(() => {
      res(id ? productos.find(productos => productos.id === id) : productos);
    }, 2000);
  });