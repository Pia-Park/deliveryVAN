let menu = {

  'p01': {
    id: 'p01',
    name: 'Cheeseburger',
    price: 10,
    description: 'Cheese, meat and bun. Ketchup included'
  },

  'p02': {
    id: 'p02',
    name: 'Burrito',
    price: 15,
    description: 'Fully loaded burrito'
  },

  'p03': {
    id: 'p03',
    name: 'Vegan Fruit Bowl',
    price: 150,
    description: "a little pricey, but you'll feel better"
  },


  getItemByID: function(itemID) {
    // should return a sentence containing all of the info about the product (name price, and description)
  
    console.log(this[itemID].name + " costs $" + this[itemID].price + ". DESCRIPTION: " + this[itemID].description);

  },

  getItemByName: function(itemName) {
     // should return a sentence containing all of the info about the product (name price, and description)
     
     let itemID = Object.keys(menu);
     for(i=0; i<itemID.length; i++){

      if(this[itemID[i]].name === itemName) {
        console.log(this[itemID[i]].name + " costs $" + this[itemID[i]].price + " and it is " + this[itemID[i]].description);
      }  
    }
  },

  addMenuItem: function(name, price, desc) {
    //will need a random id as well when creating a new product. console log the products to confirm it was added. 
    let randomID = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    
    menu[randomID] = {
        id: randomID,
        name: name,
        price: price,
        description: desc
      };

    Object.keys(menu).forEach(function(elem) {
      if(elem === menu[elem].id)
      {
     // console.log(menu[elem].name + " costs $" + menu[elem].price);
      menu.getItemByID(elem);
     }
    });

  },

  cartTotal: function(arrayOfIDs) {
    // this function will take in an array of item Ids, and using this, will add together the total cost of all the items. 
  
  let total = 0;

  arrayOfIDs.forEach(function(elem) {
    Object.keys(menu).forEach(function(menuElem){
      if(elem === menuElem) {
      total += menu[elem].price;
      }
    })

  });

  console.log(`The total cost of ${arrayOfIDs.join(', ')} is $${total}`);
}

}

//menu.getItemByID("p01");

//menu.getItemByName('Burrito');

//menu.addMenuItem('Jjampong','14','a spicy Korean-style noodles');

menu.cartTotal(['p01', 'p02', 'p03']);