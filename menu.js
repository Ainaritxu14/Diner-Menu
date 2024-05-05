const menus = {
   breakfastMenu: {
     mainmenu: { milk: 3, juice: 4 , coffee:2},
     sidesmenu: { eggs: 5, toast: 4, omelette: 6, cookies: 2  }
   },
   lunchMenu: {
     mainmenu: { salad: 11, spaghetti: 13, rice: 15 },
     sidesmenu: { meat: 11, fish: 15, pizza: 13, hamburger: 9 }
   },
   dinnerMenu: {
     mainmenu: { salad: 10, spaghetti: 12, rice: 14 },
     sidesmenu: { meat: 13, fish: 17, pizza: 11, hamburger: 10 }
   }
 };
 
 //Comentarios de camarero
 
 function getRandomComentario() {
   const camarerocomentario = ["Esta bien", "Es todo comida casera, espero que os guste", "Os recomiendo probar la carne como sugerencia para esta u otra ocasión", "Los entrantes son gourmet, os van a encantar"];
   const comentariorandom = Math.floor(Math.random() * camarerocomentario.length);
   return camarerocomentario[comentariorandom];
 }
 
 
 let totalcost = 0;
 
 //Horario
 
 const timeNow = prompt("What time is it? (Put 24 hour format) (For example, 13:30)");
 const [hour, minute] = timeNow.split(":");
 
 const horario = parseInt(hour) * 60 + parseInt(minute);
 
 //Condicionales para depende que hora tengan la opcion de un menu o otro
 
 //Horario desayuno
 
 if (horario >= 8 * 60 && horario <= 12 * 60) {
 
     alert("It's time for the breakfast menu");
 
       const entreeOptions = Object.entries(menus.breakfastMenu.mainmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
       const sideOptions = Object.entries(menus.breakfastMenu.sidesmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
 
 alert(`
 BREAKFAST MENU:
 ---------------
 MAIN MENU OPTIONS:
 
 ${entreeOptions}
 
 SIDES MENU OPTIONS:
 
 ${sideOptions}
 `);
     
   
       
 
       alert("What do you want for breakfast as an entree?");
 
     //Seleccion de entree
 
       let selectedEntree;
 
       do {
           selectedEntree = prompt("Choose an entree from the breakfast menu: " + Object.keys(menus.breakfastMenu.mainmenu).join(",")).toLowerCase();
           if (!menus.breakfastMenu.mainmenu[selectedEntree]) {
               alert("You have wroten bad the answer, try again.");
           }
 
       } while (!menus.breakfastMenu.mainmenu[selectedEntree]);
 
       alert("I want " + selectedEntree)
       alert(getRandomComentario())
 
 
 
 //Seleccion de side1
 
 alert(`
 SIDE MENU OPTIONS:
 
 ${sideOptions}
 `);
 
   alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.breakfastMenu.sidesmenu).join(","));
 
   let selectedSide1;
 
   do {
       selectedSide1 = prompt("Choose two side choices from the breakfast menu: " + Object.keys(menus.breakfastMenu.sidesmenu).join(",")).toLowerCase();
       
       if (!menus.breakfastMenu.sidesmenu[selectedSide1]) {
         alert("You have wroten bad the answer, try again.");
       }
 
   } while (!menus.breakfastMenu.sidesmenu[selectedSide1]);
 
   alert("I want " + selectedSide1);
 
   alert(getRandomComentario());
   alert("And as a second side, what would you like to have?");
 
 
   //Seleccion de side1
 
   let selectedSide2;
 
   do {
       selectedSide2 = prompt("Choose the second side: " + Object.keys(menus.breakfastMenu.sidesmenu).join(",")).toLowerCase();
       
       if (!menus.breakfastMenu.sidesmenu[selectedSide2]) {
 
         alert("You have wroten bad the answer, try again.");
 
       }
 
   } while (!menus.breakfastMenu.sidesmenu[selectedSide2]);
 
   alert("I want " + selectedSide2);
   alert(getRandomComentario());
 
   //Sumar total cost
 
   let entree = menus.breakfastMenu.mainmenu[selectedEntree];
   let side1 = menus.breakfastMenu.sidesmenu[selectedSide1];
   let side2 = menus.breakfastMenu.sidesmenu[selectedSide2];
   totalcost = entree + side1 + side2;
 
   alert ("The total cost will be " + totalcost + " euros, here is the account")
 
     alert(`
   + ${selectedEntree.toUpperCase()} : ${entree} euros
   + ${selectedSide1.toUpperCase()} : ${side1} euros
   + ${selectedSide2.toUpperCase()} : ${side2} euros
   ------------------
   THE TOTAL COST ${totalcost} euros`);
 
 alert ("Thanks for come, I hope see you soon!")
 
 }
 
 //Horario comidas
 
 
 else if (horario >= 12 * 60 && horario <= 15 * 60) {
   
   alert("It's time to lunch menu");
   
   const entreeOptions = Object.entries(menus.lunchMenu.mainmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
   const sideOptions = Object.entries(menus.lunchMenu.sidesmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
 
 alert(`
 LUNCH MENU:
 ---------------
 MAIN MENU OPTIONS:
 
 ${entreeOptions}
 
 SIDES MENU OPTIONS:
 
 ${sideOptions}
 `);
 
 
   
 
   alert("What do you want for lunch as an entree?");
 
 //Seleccion de entree
 
   let selectedEntree;
 
   do {
       selectedEntree = prompt("Choose an entree from the lunch menu: " + Object.keys(menus.lunchMenu.mainmenu).join(",")).toLowerCase();
       if (!menus.lunchMenu.mainmenu[selectedEntree]) {
           alert("You have wroten bad the answer, try again.");
       }
 
   } while (!menus.lunchMenu.mainmenu[selectedEntree]);
 
   alert("I want " + selectedEntree)
   alert(getRandomComentario())
 
 
 
 //Seleccion de side1
 
 alert(`
 SIDE MENU OPTIONS:
 
 ${sideOptions}
 `);
 
 alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.lunchMenu.sidesmenu).join(","));
 
 let selectedSide1;
 
 do {
   selectedSide1 = prompt("Choose two side choices from the lunch menu: " + Object.keys(menus.lunchMenu.sidesmenu).join(",")).toLowerCase();
   
   if (!menus.lunchMenu.sidesmenu[selectedSide1]) {
     alert("You have wroten bad the answer, try again.");
   }
 
 } while (!menus.lunchMenu.sidesmenu[selectedSide1]);
 
 alert("I want " + selectedSide1);
 
 alert(getRandomComentario());
 alert("And as a second side, what would you like to have?");
 
 
 //Seleccion de side1
 
 let selectedSide2;
 
 do {
   selectedSide2 = prompt("Choose the second side: " + Object.keys(menus.lunchMenu.sidesmenu).join(",")).toLowerCase();
   
   if (!menus.lunchMenu.sidesmenu[selectedSide2]) {
 
     alert("You have wroten bad the answer, try again.");
 
   }
 
 } while (!menus.lunchMenu.sidesmenu[selectedSide2]);
 
 alert("I want " + selectedSide2);
 alert(getRandomComentario());
 
 //Sumar total cost
 
 let entree = menus.lunchMenu.mainmenu[selectedEntree];
 let side1 = menus.lunchMenu.sidesmenu[selectedSide1];
 let side2 = menus.lunchMenu.sidesmenu[selectedSide2];
 totalcost = entree + side1 + side2;
 
 alert ("The total cost will be " + totalcost + " euros, here is the account")
 
 alert(`
 + ${selectedEntree.toUpperCase()} : ${entree} euros
 + ${selectedSide1.toUpperCase()} : ${side1} euros
 + ${selectedSide2.toUpperCase()} : ${side2} euros
 ------------------
 THE TOTAL COST ${totalcost} euros`);
 
 alert ("Thanks for come, I hope see you soon!")
 
 }
 
 //Horario cenas
 
 else if (horario >= 20 * 60 && horario < 24 * 60) {
   
   alert("It's time to dinner menu");
   const entreeOptions = Object.entries(menus.dinnerMenu.mainmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
   const sideOptions = Object.entries(menus.dinnerMenu.sidesmenu).map(([item, price]) => `${item} - ${price} euros`).join("\n");
 
 alert(`
 DINNER MENU:
 ---------------
 MAIN MENU OPTIONS:
 
 ${entreeOptions}
 
 SIDES MENU OPTIONS:
 
 ${sideOptions}
 `);
 
 
   
 
   alert("What do you want for dinner as an entree?");
 
 //Seleccion de entree
 
   let selectedEntree;
 
   do {
       selectedEntree = prompt("Choose an entree from the dinner menu: " + Object.keys(menus.dinnerMenu.mainmenu).join(",")).toLowerCase();
       if (!menus.dinnerMenu.mainmenu[selectedEntree]) {
           alert("You have wroten bad the answer, try again.");
       }
 
   } while (!menus.dinnerMenu.mainmenu[selectedEntree]);
 
   alert("I want " + selectedEntree)
   alert(getRandomComentario())
 
 
 
 //Seleccion de side1
 
 alert(`
 SIDE MENU OPTIONS:
 
 ${sideOptions}
 `);
 
 alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.dinnerMenu.sidesmenu).join(","));
 
 let selectedSide1;
 
 do {
   selectedSide1 = prompt("Choose two side choices from the dinner menu: " + Object.keys(menus.dinnerMenu.sidesmenu).join(",")).toLowerCase();
   
   if (!menus.dinnerMenu.sidesmenu[selectedSide1]) {
     alert("You have wroten bad the answer, try again.");
   }
 
 } while (!menus.dinnerMenu.sidesmenu[selectedSide1]);
 
 alert("I want " + selectedSide1);
 
 alert(getRandomComentario());
 alert("And as a second side, what would you like to have?");
 
 
 //Seleccion de side1
 
 let selectedSide2;
 
 do {
   selectedSide2 = prompt("Choose the second side: " + Object.keys(menus.dinnerMenu.sidesmenu).join(",")).toLowerCase();
   
   if (!menus.dinnerMenu.sidesmenu[selectedSide2]) {
 
     alert("You have wroten bad the answer, try again.");
 
   }
 
 } while (!menus.dinnerMenu.sidesmenu[selectedSide2]);
 
 alert("I want " + selectedSide2);
 alert(getRandomComentario());
 
 //Sumar total cost
 
 let entree = menus.dinnerMenu.mainmenu[selectedEntree];
 let side1 = menus.dinnerMenu.sidesmenu[selectedSide1];
 let side2 = menus.dinnerMenu.sidesmenu[selectedSide2];
 totalcost = entree + side1 + side2;
 
 alert ("The total cost will be " + totalcost + " euros, here is the account")
 
 
 alert(`
 + ${selectedEntree.toUpperCase()} : ${entree} euros
 + ${selectedSide1.toUpperCase()} : ${side1} euros
 + ${selectedSide2.toUpperCase()} : ${side2} euros
 ------------------
 THE TOTAL COST ${totalcost} euros`);
 
 alert ("Thanks for come, I hope see you soon!")
 
 }
  //Esta cerrado
 
 else {
   alert("We are closed, sorry!");
 }