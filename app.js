
const adventurer = 
{
    name : "Robin",
    health :10,
    inventory : ["sword", "potion", "artifact"],
 
    companion: {
             name: "Leo",
             type: "cat",
             

    companion: {
             name:"Frank",
             type:"Flea",
             belongings: ["small hat", "sunglasses"]

            }       
        },
        roll (mod = 0)
         {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
            }
}



//From the adventurer object, we can access Robin’s inventory using a combination of dot notation and square bracket syntax.
//  For example, we could find a sword at adventurer.inventory[0].

for (let i=0; i< adventurer.inventory.length; i++)
{
    console.log(adventurer.inventory[i]);
}

//Nested arrays are useful, but so are nested objects. 
// Let’s give Robin a companion to travel with –
//  a furry friend they call “Leo.”

console.log(adventurer.companion.name);

//Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.

console.log(adventurer.companion.companion.belongings);

adventurer.roll();
adventurer.roll(2);
