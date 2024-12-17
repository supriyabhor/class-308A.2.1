
const adventurer = 
{
    name : "Robin",
    health :10,
    inventory : ["sword", "potion", "artifact"],
 
    companion: {
             name: "Leo",
             type: "cat"
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


