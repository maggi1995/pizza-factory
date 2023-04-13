import VegPizza from "../../assests/veg.jpg"
import NonVegPizza from "../../assests/non-veg.jpg"
import drink from "../../assests/drinks.jpeg"
import cake from "../../assests/cake.jpeg"

const VegetarianList = [
    {
        name:"Deluxe Veggie",
        image:VegPizza,
        price:{
            Regular:150,
            Medium:200,
            Large:325
        }
    },
    {
        name:"Cheese and corn",
        image:VegPizza,
        price:{
            Regular:175,
            Medium:375,
            Large:475
        }
    },
    {
        name:"Paneer Tikka",
        image:VegPizza,
        price:{
            Regular:160,
            Medium:290,
            Large:340
        }
    },
]

 const NonVegetarianList = [
    {
        name:"Non-Veg Supreme",
        image:NonVegPizza,
        price:{
            Regular:190,
            Medium:325,
            Large:425
        }
    },
    {
        name:"Chicken Tikka",
        image:NonVegPizza,
        price:{
            Regular:210,
            Medium:370,
            Large:500
        }
    },
    {
        name:"Peppar Barbecue Chicken",
        image:NonVegPizza,
        price:{
            Regular:220,
            Medium:380,
            Large:525
        }
    },
]

const vegToppings = [
    {
        name:"Black olive",
        price:20
    },
    {
        name:"Capsicum",
        price:25
    },
    {
        name:"Paneer",
        price:35
    },
    {
        name:"Mushroom",
        price:30
    },
    {
        name:"Fresh Tomato",
        price:10
    },
]

const NonVegToppings = [
    {
        name:"Chicken tikka",
        price:35
    },
    {
        name:"Barbeque chicken",
        price:45
    },
    {
        name:"Grilled chiclen",
        price:40
    },
]

const sides=[
    {
        name:"Cold drink",
        image:drink,
        price:55
    },
    {
        name:"Mousse Cake",
        image:cake,
        price:90
    }
]

const crusts = ["New hand tossed","Wheat thin crust","Cheese Burst","Fresh pan pizza"]
export  {
    VegetarianList,
    NonVegetarianList,
    vegToppings,
    NonVegToppings,
    sides,
    crusts
}