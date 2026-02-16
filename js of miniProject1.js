
        
        function myGoldenShoes(){

    
            const item1Price=4500;
           let input= prompt(" Enter your budget ", " ");

           
           if (input === null) {
          // User clicked Cancel
          alert("You cancelled the input. No problem — try again anytime!", "neutral");
          return;
          }
          //trim() removes whitespace
          const trimmedInput = input.trim();

          if (trimmedInput === "") {
         // User clicked OK but left it empty
        alert("Please enter a number — the budget field cannot be empty.", "warning");
          return;
         }
        const budget = Number(trimmedInput);

         // Check if it's actually a valid number
          if (isNaN(budget) || budget < 0) {
           alert("Please enter a valid positive number (example: 2000)", "error");
          return;
          }
          
          const buyingDecision = document.getElementById("decision");
           if(budget >= item1Price){
             
             buyingDecision.textContent="Great! You can afford this Golden Shoes.";
            
           }else{
            buyingDecision.textContent="Not enough budget to buy this golden shoes";

           }
           
        }

        function myHeadphone() {
            const item2Price =990;
         let input= prompt(" Enter your budget ", " ");

           if (input === null) {
          // User clicked Cancel
          alert("You cancelled the input. No problem — try again anytime!", "neutral");
          return;
          }
          const trimmedInput = input.trim();

          if (trimmedInput === "") {
         // User clicked OK but left it empty
        alert("Please enter a number — the budget field cannot be empty.", "warning");
          return;
         }
        const budget = Number(trimmedInput);

         // Check if it's actually a valid number
          if (isNaN(budget) || budget < 0) {
           alert("Please enter a valid positive number (example: 2000)", "error");
          return;
          }
          
          const buyingDecision = document.getElementById("decision");
           if(budget >= item2Price){
             
             buyingDecision.textContent="Great! You can afford this Gaming Headphone.";
            
           }else{
            buyingDecision.textContent="Not enough budget to buy this Gaming HeadPhone ";

           }

            
        }

        function mySmartWatch(){
            const item3Price= 400;
            let input= prompt(" Enter your budget ", " ");

           if (input === null) {
          // User clicked Cancel
          alert("You cancelled the input. No problem — try again anytime!", "neutral");
          return;
          }
          const trimmedInput = input.trim();

          if (trimmedInput === "") {
         // User clicked OK but left it empty
        alert("Please enter a number — the budget field cannot be empty.", "warning");
          return;
         }
        const budget = Number(trimmedInput);

         // Check if it's actually a valid number
          if (isNaN(budget) || budget < 0) {
           alert("Please enter a valid positive number (example: 2000)", "error");
          return;
          }
          
          const buyingDecision = document.getElementById("decision");
           if(budget >= item3Price){
             
             buyingDecision.textContent="Great! You can afford thi SmartWatch.";
            
           }else{
            buyingDecision.textContent="Not enough budget to buy this SmartWatch ";

           }

            
        }

        function myFootBall() {
            const item4Price =459;
            let input= prompt(" Enter your budget ", " ");

           if (input === null) {
          // User clicked Cancel
          alert("You cancelled the input. No problem — try again anytime!", "neutral");
          return;
          }
          const trimmedInput = input.trim();

          if (trimmedInput === "") {
         // User clicked OK but left it empty
        alert("Please enter a number — the budget field cannot be empty.", "warning");
          return;
         }
        const budget = Number(trimmedInput);

         // Check if it's actually a valid number
          if (isNaN(budget) || budget < 0) {
           alert("Please enter a valid positive number (example: 2000)", "error");
          return;
          }
          
          const buyingDecision = document.getElementById("decision");
           if(budget >= item4Price){
             
             buyingDecision.textContent="Great! You can afford this football.";
            
           }else{
            buyingDecision.textContent="Not enough budget to buy this football ";

           }

            
        }


