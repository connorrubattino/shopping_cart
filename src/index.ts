import { v4 as uuidv4 } from "uuid";
//create some types for Item and User

type Item = {
    readonly itemId: string,
    itemName: string,
    price: number,
    description: string,
    // quantity?: number    -- only would work if there is going to be one user..
}

type User = {
    readonly userId: string,
    userName: string,
    age: number,
    cart: Item[]


//maybe CartItem type? with a quantity?

}
//create user function
function createUser(userName:string, age:number):User{
    let userId = uuidv4();
    let cart: Item[] = []
    return {userId, userName, age, cart}
}


//create item function
function createItem(itemName:string, price:number, description:string):Item{
    let itemId = uuidv4();
    return {itemId, itemName, price, description}
}

//add to cart function
function addToCart(item:Item, user:User):void {
    user.cart.push(item)
    console.log(`${item.itemName} has been added to ${user.userName}'s cart`)
}

//remove from cart function
function removeFromCart(itemRemove:Item, user:User):void {
    user.cart = user.cart.filter(item => item.itemId !== itemRemove.itemId)
    console.log(`All ${itemRemove.itemName}'s have been removed from ${user.userName}'s cart`)
}


function removeQuantityFromCart(item:Item, user:User, quantity:number):void {
    for (let i=0; i < quantity; i++){
        let indexOfItem = user.cart.findIndex(cartItem => cartItem.itemId == item.itemId)
        user.cart.splice(indexOfItem, 1);
    }
    console.log(`${quantity} ${item.itemName}(s) have been removed from ${user.userName}'s cart`)
}


            //remove quantity from cart
            // function removeQuantityFromCart(item:Item, user:User, quantityToRemove:number):void {
            //     let index = user.cart.findIndex(cartItem => cartItem.itemId === item.itemId);
            //     if (index !== -1) {
            //         let foundItem = user.cart[index];
            //         let remainingQuantity = *?*quantity of found item*?* - quantityToRemove;
            //     }
            // }

            // removeQuantityFromCart(golfBall,connor,2);
            // console.log(connor);




function cartTotal(user:User):number {
    let totCost = 0;
    for (let item of user.cart) {
        totCost += item.price;
    }
    return totCost
}


function printCart(user:User):void {
    console.log(`Items in ${user.userName}'s cart:`);
    for (let item of user.cart) {
        console.log(`${item.itemName} -- ${item.price}`)
    }
    console.log(`Total: $${cartTotal(user)}`)
}



let connor = createUser("Connor R", 25)
console.log(connor)
let golfBall = createItem("golf ball", 5, "little white ball")
let shoe = createItem("shoe", 25, "bball shoes")
let hat = createItem("hat", 50, "gucci hat")
// console.log(golfBall)
// console.log(shoe)
// console.log(hat)

addToCart(golfBall,connor);
// let conCart = printCart(connor);
// let conTotal = cartTotal(connor);
// console.log(conCart);
// console.log(conTotal);

addToCart(shoe,connor);
addToCart(shoe,connor);
addToCart(shoe,connor);
// let conCart2 = printCart(connor);
// let conTotal2 = cartTotal(connor);
// console.log(conCart2);
// console.log(conTotal2);

addToCart(hat,connor);
addToCart(hat,connor);
addToCart(hat,connor);
// let conCart3 = printCart(connor);
// let conTotal3 = cartTotal(connor);
// console.log(conCart3);
// console.log(conTotal3);

removeFromCart(shoe,connor);
// let conCart4 = printCart(connor);
// let conTotal4 = cartTotal(connor);
// console.log(conCart4);
// console.log(conTotal4);


removeQuantityFromCart(hat, connor, 1);
// let conCart5 = printCart(connor);
// let conTotal5 = cartTotal(connor);
// console.log(conCart5);
// console.log(conTotal5);
printCart(connor)
