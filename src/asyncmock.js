import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const Products = [

    {
        id:'1',
        name:'Lámpara de araña de cristal',
        price: 32000,
        category:'Hogar y Decoración',
        img:'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/88c35911bba4ed7e3378378da268837e.jpg?imageView2/2/w/800/q/70/format/webp',
        stock:30,
        description:'Ilumina con elegancia tu espacio con nuestra lámpara araña de cristal. Diseño refinado y destellos brillantes que transforman cualquier ambiente. Eleva tu decoración con esta pieza única y resplandece en estilo. La fusión perfecta de lujo y luminosidad.',
    },   

{
        id:'2',
        name:'Apple MacBook Air Apple M1',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://thumb.pccomponentes.com/w-530-530/articles/33/335380/1911-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-plata.jpg',
        stock:10,
        description:'Apple - MacBook Air de 13.3- Chip Apple M1 - 8 GB de RAM - 256 GB de almacenamiento - Dorado'
    },
    {
        id:'3',
        name:'Estación de carga mandos PS5',
        price: 3000,
        category:'Electrónica y Tecnología',
        img:'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/551e4bf173893d5f62bbb88698d756ea.jpg?imageView2/2/w/800/q/70/format/webp',
        stock:7,
        description:'Carga hasta 2 controles a la vez en 3 horas para disfrutar al máximo de la experiencia de tu PS5',
    },

    {
        id:'4',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'Potencia y elegancia se fusionan en el iPhone 12 Pro Max. Pantalla Super Retina, chip A14 Bionic y sistema de cámaras Pro para capturas excepcionales. La perfección tecnológica en tus manos.',
    },

    {
        id:'5',
        name:'Espejo LED Inteligente',
        price: 2400,
        category:'Hogar y Decoración',
        img:'https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/8cb514a1ee43d09547bc9062bb37d86c.jpg?imageView2/2/w/800/q/70/format/webp',
        stock:10,
        description:'Refleja tu belleza con nuestro espejo LED. Diseño elegante y tecnología inteligente para un maquillaje impecable. ¡Ilumina tu rutina con estilo!',
    },

    {
        id:'6',
        name:'Vestido de fiesta con lentejuelas',
        price: 500,
        category:'Ropa y Accesorios',
        img:'https://img.kwcdn.com/garner-api/transfer/2023-9-22/24cfdab9f6fdf30fdbf050eb77891852.jpg?imageView2/2/w/800/q/70',
        stock:5,
        description:'Deslumbra en la fiesta con nuestro vestido de flecos. Elegante, vibrante y diseñado para destacar. ¡Haz una entrada inolvidable!.',
    },




];


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Products); 
    }, 500);
    });
};

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Products.find((prod) => prod.id === productId)); 
    }, 500);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Products.filter((prod) => prod.category === categoryId)); 
    }, 500);
    });
};

