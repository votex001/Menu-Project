import { v4 as uuidv4 } from 'https://jspm.dev/uuid';



export const menuData = [
    {
        productPic: `photo/pizza.jpg`,
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        id: 0,
        price: 14,
        emoji: "🍕",
        uuid: uuidv4()
    },
    {
        productPic: `photo/humburger.jpg`,
        name: "Hamburger",
        ingredients: ["beef", "cheese", "lettuce"],
        price: 12,
        emoji: "🍔",
        id: 1,
        uuid: uuidv4()
    },
        {
        productPic: `photo/beer.jpg`,
        name: "Beer",
        ingredients: ["grain, hops, yeast, water"],
        price: 15,
        emoji: "🍺",
        id: 2,
        uuid: uuidv4()
    }
]