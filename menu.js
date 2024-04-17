
const menus = {
   breakfastMenu: {
   mainmenu: ["milk"=3, "cookies"=2],
   sidesmenu: ["eggs"= 5, "toast"= 4, "ommelete"=6]
   
  },

  lunchMenu: {
   mainmenu:["salad"=10, "spagettis"=12, "rice"=14],
   sidesmenu:["meat"=11,"fish"=15,"pizza"=13,"hamburguer"=9]
    
  },

  dinnerMenu: {
   mainmenu:["salad"=10, "spagettis"=12, "rice"=14],
   sidesmenu:["meat"=11,"fish"=15,"pizza"=13,"hamburguer"=9]
  }
};

//Comentarios de camarero

function getRandomComentario() {
const camarerocomentario=["Esta bien","Es todo comida casera, espero que os guste", "Os recomiendo probar la carne como sugerencia para esta o otra ocasion", "Los entrantes son gourmet os van a encantar"];

const comentariorandom = Math.floor(Math.random() * camarerocomentario.length);
  return camarerocomentario[comentariorandom ];

}

//Calculo total de los menus

var totalcost= breakfastMenutotal= breakfastMenu.mainmenu + breakfastMenu.sidesmenu + breakfastMenu.sidesmenu
var totalcost= lunchMenutotal=  lunchMenu.mainmenu + lunchMenu.sidesmenu + lunchMenu.sidesmenu
var totalcost= dinnerMenutotal= dinnerMenu.mainmenu + lunchMenu.sidesmenu + lunchMenu.sidesmenu

//Condicionales para depende que hora tengan la opcion de un menu o otro


const hour=("5");

if (8<hour <12) {

      console.log(breakfastMenu());
      alert("What do you want for breakfast as a entree?");

      console.log("I want" + mainmenu.breakfastMenu());
      console.log(getRandomComentario());

      alert("What do you want for two sides choices? I will repeat you the options" + sidesmenu.breakfastMenu());

      console.log("I want" + sidesmenu.breakfastMenu() + "and" + sidesmenu.breakfastMenu());
      console.log(getRandomComentario());

      breakfastMenutotal= breakfastMenu.mainmenu + breakfastMenu.sidesmenu + breakfastMenu.sidesmenu
      console.log("The total cost will be"+totalcost + "euros");
      
      alert ("Thanks for come, I hope see you soon!")
}

   else if (15>hour>12)

   {
      console.log(lunchMenu());
      alert ("What do you want for lunch as a entree?");

      console.log("I want" + mainmenu.lunchMenu());
      console.log(getRandomComentario());

      alert("What do you want for two sides choices? I will repeat you the options" + sidesmenu.lunchMenu());

      console.log("I want" + sidesmenu.lunchMenu() + "and" + sidesmenu.lunchMenu());
      console.log(getRandomComentario());

      lunchMenutotal= lunchMenu.mainmenu + lunchMenu.sidesmenu + lunchMenu.sidesmenu
      console.log("The total cost will be"+totalcost + "euros");
      
      alert ("Thanks for come, I hope see you soon!")

   }

   else if (23>hour>20)

   {
      console.log(dinnerMenu());
      alert ("What do you want for dinner as a entree?");

      console.log("I want" + mainmenu.dinnerMenu());
      console.log(getRandomComentario());

      alert("What do you want for two sides choices? I will repeat you the options" + sidesmenu.dinnerMenu());

      console.log("I want" + sidesmenu.dinnerMenu() + "and" + sidesmenu.dinnerMenu());
      console.log(getRandomComentario());

      dinnerMenutotal= dinnerMenu.mainmenu + dinnerMenu.sidesmenu + dinnerMenu.sidesmenu
      console.log("The total cost will be"+totalcost +"euros");
      
      alert ("Thanks for come, I hope see you soon!")


   }

   else
   {
     alert ("We are closed, sorry!"); 
   }

