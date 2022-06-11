class Pizza{
    constructor(id,name,price,img,description,ingredients){
        this.id=id
        this.name=name
        this.price=price
        this.img=img
        this.description=description
        this.ingredients=ingredients
    }
}

const products =[
    new Pizza(1,'Margarita',1500,'https://pierorestaurante.com/wp-content/uploads/2018/11/Pizza_margarita_receta_plato_opt-1.jpg','deliciosa pizza simple y clasica con ingredientes inspirados por los colores de la bandera italiana',['queso','salsa','albahaca']),
    new Pizza(2,'Peperonni',1800,'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg','la clasica favorita de todos con bastante queso y peperoni',['queso','salsa','pepperoni']),
    new Pizza(3,'Burrata',2100,'https://img.cocinarico.es/2020-09/pizza-con-burrata-y-albahaca-1.webp','combinacion de los dioses una pizza simple de salsa y queso con una burrata de buffala encima',['queso','salsa','burrata','albahaca'])
]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(products)
        },1)
    })
}
export const getProductByID = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===id))
        },1)
    })
}
