import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const Products = [

    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },
    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },
    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
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

