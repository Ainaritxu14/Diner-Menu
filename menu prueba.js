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

    //Calculo total de los menus pruebas

    //var totalcost= menus.breakfastMenu.mainmenu[selectedEntree] + menus.breakfastMenu.sidesmenu[selectedSides] 
    //var totalcost= lunchMenutotal=  menus.lunchMenu.mainmenu[selectedEntree] + menus.lunchMenu.sidesmenu[selectedSides] 
    //var totalcost= dinnerMenutotal= menus.dinnerMenu.mainmenu[selectedEntree]+ menus.lunchMenu.sidesmenu[selectedSides]
   
    let totalcost = 0;

    //Horario

    const timeNow = prompt("What time is it? (Put 24 hour format) (For example, 13:30)");
    const [hour, minute] = timeNow.split(":");

    const horario = parseInt(hour) * 60 + parseInt(minute);

    //Condicionales para depende que hora tengan la opcion de un menu o otro

    //Horario desayuno

    if (horario >= 8 * 60 && horario <=12 * 60) {

      alert("It's time to breakfast menu");
      console.log (menus.breakfastMenu);

      alert("What do you want for breakfast as an entree?");
      
      var selectedEntree;

      do {
        selectedEntree = prompt("Choose an entree from the breakfast menu: " + Object.keys(menus.breakfastMenu.mainmenu).join(","));
      } while (!menus.breakfastMenu.mainmenu[selectedEntree]);

      console.log("I want " + selectedEntree);
      console.log(getRandomComentario());

      alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.breakfastMenu.sidesmenu).join(","));
      
      var selectedSides;

      do {
        selectedSides = prompt("Choose two side choices from the breakfast menu: " + Object.keys(menus.breakfastMenu.sidesmenu).join(",") + "(You have to write the answer with and between the 2 options. For example: toast and eggs");
      } while (selectedSides.split("and").some(side => !menus.breakfastMenu.sidesmenu[side.trim()]));
      
      console.log("I want " + selectedSides);
      console.log(getRandomComentario());

      // Separar los sides y darle el valor del entree al totalcost para luego sumarle los sides

      const sides = selectedSides.split("and");
      let totalcost = menus.breakfastMenu.mainmenu[selectedEntree];

      // Suma de cada side  al totalcost que equivale al valor del entree

      sides.forEach(side => {totalcost += menus.breakfastMenu.sidesmenu[side.trim()];});

      console.log("The total cost will be " + totalcost + " euros");

      alert("Thanks for coming, I hope to see you soon! Your total cost is " + totalcost + " euros");


      //Horario comidas

    } else if (horario >= 12 * 60 && horario <= 15 * 60) {
      
      alert("It's time to lunch menu");
      console.log (menus.lunchMenu);


      alert("What do you want for lunch as an entree?");
      
      var selectedEntree;

      do {
        selectedEntree = prompt("Choose an entree from the lunch menu: " + Object.keys(menus.lunchMenu.mainmenu).join(","));
      } while (!menus.lunchMenu.mainmenu[selectedEntree]);

      console.log("I want " + selectedEntree);
      console.log(getRandomComentario());

      alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.lunchMenu.sidesmenu).join(","));
      
      var selectedSides;

      do {
        selectedSides = prompt("Choose two side choices from the lunch menu: " + Object.keys(menus.lunchMenu.sidesmenu).join(",") + "(You have to write the answer with and between the 2 options. For example: pizza and hamburguer");
      } while (selectedSides.split("and").some(side => !menus.lunchMenu.sidesmenu[side.trim()]));
      
      console.log("I want " + selectedSides);
      console.log(getRandomComentario());

      // Separar los sides y darle el valor del entree al totalcost para luego sumarle los sides

      const sides = selectedSides.split("and");
      let totalcost = menus.lunchMenu.mainmenu[selectedEntree];

      // Suma de cada side  al totalcost que equivale al valor del entree

      sides.forEach(side => {totalcost += menus.lunchMenu.sidesmenu[side.trim()];});

      console.log("The total cost will be " + totalcost + " euros");

      alert("Thanks for coming, I hope to see you soon! Your total cost is " + totalcost + " euros");


    //Horario cenas

    } else if (horario >= 20 * 60 && horario < 24 * 60) {
      
      alert("It's time to dinner menu");
      console.log (menus.dinnerMenu);

      alert("What do you want for dinner as an entree?");
      
      var selectedEntree;

      do {
        selectedEntree = prompt("Choose an entree from the dinner menu: " + Object.keys(menus.dinnerMenu.mainmenu).join(","));
      } while (!menus.dinnerMenu.mainmenu[selectedEntree]);

      console.log("I want " + selectedEntree);
      console.log(getRandomComentario());

      alert("What do you want for two side choices? I will repeat the options: " + Object.keys(menus.dinnerMenu.sidesmenu).join(","));
      
      var selectedSides;

      do {
        selectedSides = prompt("Choose two side choices from the dinner menu: " + Object.keys(menus.dinnerMenu.sidesmenu).join(",") + "(You have to write the answer with and between the 2 options. For example: pizza and hamburguer");
      } while (selectedSides.split("and").some(side => !menus.dinnerMenu.sidesmenu[side.trim()]));
      
      console.log("I want " + selectedSides);
      console.log(getRandomComentario());

      // Separar los sides y darle el valor del entree al totalcost para luego sumarle los sides

      const sides = selectedSides.split("and");
      let totalcost = menus.dinnerMenu.mainmenu[selectedEntree];

      // Suma de cada side  al totalcost que equivale al valor del entree

      sides.forEach(side => {totalcost += menus.dinnerMenu.sidesmenu[side.trim()];});

      console.log("The total cost will be " + totalcost + " euros");

      alert("Thanks for coming, I hope to see you soon! Your total cost is " + totalcost + " euros");

    } else {
      alert("We are closed, sorry!");
    }