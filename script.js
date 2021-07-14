

    const modals= document.getElementById("modal-all");
    const actionButton = document.getElementById("modal-btn");
    const cardOne = document.querySelector(".card-1");
    const cardTwo = document.getElementById("card-2");
    const cardThree = document.getElementById("card-3");
    const cardFour = document.getElementById("card-4");
    const cardFive = document.getElementById("card-5");
    const opacity = 0;


  actionButton.addEventListener("click", function () { 

        if (actionButton.style.display === "block") {
            actionButton.style.display = "none";
      } else {
            actionButton.style.display = "none";
    }
    cardOne.classList.add('open-card-1')
    cardTwo.classList.add('open-card-2')
    cardThree.classList.add('open-card-3')
    cardFour.classList.add('open-card-4')
    cardFive.classList.add('open-card-5')

        
          
     });

