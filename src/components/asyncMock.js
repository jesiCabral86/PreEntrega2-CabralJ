const products = [
    {id:"1", name:"Mesa Ratona", img:"https://acdn.mitiendanube.com/stores/001/148/511/products/camino_-191-85eb51462f13f52d3216280033405739-640-0.jpg",price:300, category:"Mesas",description:"Una mesa",stock:5},
    {id:"2", name:"Silla Ratona", img:"",price:100, category:"Sillas",description:"Una silla",stock:10},
    {id:"3", name:"Cama Cucheta", img:"",price:200, category:"Dormitorio",description:"Una cama",stock:5},
    {id:"4", name:"Mesa Redonda", img:"",price:300, category:"Mesas",description:"Una mesa",stock:5},
    {id:"5", name:"Silla Redonda", img:"",price:100, category:"Sillas",description:"Una silla",stock:10},
    {id:"6", name:"Cama Redonda", img:"",price:200, category:"Dormitorio",description:"Una cama",stock:5},
];

export const getProducts = () => {
    return new Promise ((resolve, reject) =>{
        if(products.length > 0 ) {
            setTimeout (() => {
                resolve(products);
        },2000);
        }else{
            reject("No hay productos");
        }
       });
    };

    export const getProductsById = (id) => {
        return new Promise ((resolve, reject) =>{
            if(products.length > 0 ) {
            const product = products.find (p => p.id ===id);
             setTimeout (() => {
                if (!product){
                    reject('No se encuentra el producto con el id ${id}');
                }
                resolve(product);
            }, 2000);
            }else{
                reject("No hay productos");
            }
           });
    };
    