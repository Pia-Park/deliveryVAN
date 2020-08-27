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
  },

  getItemByName: function(itemName) {
     // should return a sentence containing all of the info about the product (name price, and description)
  },

  addMenuItem: function(name, price, desc) {
    //will need a random id as well when creating a new product. console log the products to confirm it was added. 
  },

  cartTotal: function(arrayOfIDs) {
    // this function will take in an array of item Ids, and using this, will add together the total cost of all the items. 
  }

}
