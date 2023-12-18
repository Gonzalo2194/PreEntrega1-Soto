import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

const Products = [

    {
        id:'1',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum dolor sit amet, consectet',
    },   

{
        id:'2',
        name:'Apple MacBook Air Apple M1',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://thumb.pccomponentes.com/w-530-530/articles/33/335380/1911-apple-macbook-air-apple-m1-8gb-256gb-ssd-gpu-hepta-core-133-plata.jpg',
        stock:10,
        description:'lorem ipsum d',
    },
    {
        id:'3',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'4',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'5',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Electrónica y Tecnología',
        img:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-12-pro-max/iphone-12-pro-max-graphite.jpg',
        stock:10,
        description:'lorem ipsum d',
    },

    {
        id:'5',
        name:'Iphone 12 pro max',
        price: 32000,
        category:'Ropa y Accesorios',
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

