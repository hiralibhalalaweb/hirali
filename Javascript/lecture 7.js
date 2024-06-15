{
//     const Data = new map([
//         ["option-1" , "1"],
//         ["option-2" , "2"],
//         ["option-3" , "3"],
//     ])

// document.getElementById("new").innerHTML = Data.get("option-1");
}

{  
    let newmap = new Map();

     newmap.set("item-1" , "car");
     newmap.set("item-2" , "bus");
     newmap.set("item-3" , "truck");
     newmap.set("item-4" , 50 )

     document.getElementById("set1").innerHTML =newmap.get("item-2");
     console.log(newmap);;
}
 {
    let newmap = new Map();
    newmap.set("item-1" , "car");
    newmap.set("item-2" , "bus");
    newmap.set("item-3" , "truck");
    newmap.set("item-4" , 50 );
    newmap.set("item-5","app")

    document.getElementById("set1").innerHTML =newmap.get("item-5l");
    console.log(newmap);;
 }