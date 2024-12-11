

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
    let generateButton = document.getElementById("generate-btn");
    let passwordBoxOne = document.getElementById("password-btnone")
    let passwordBoxTwo = document.getElementById("password-btntwo")

    function randomPassword(){
    let randomPasswordOne = ""
    let randomPasswordTwo = ""
        //random Password one
        for (let i = 0; i < 15; i++){
            let randomIndex = Math.floor(Math.random() *characters.length)
            randomPasswordOne += characters[randomIndex]
        }
        
        //random password two
        
        for (let i = 0; i < 15; i++){
            let randomIndex = Math.floor(Math.random() *characters.length)
            randomPasswordTwo += characters[randomIndex]
        }
    
        passwordBoxOne.textContent = randomPasswordOne;
        passwordBoxTwo.textContent = randomPasswordTwo;
    }

    generateButton.addEventListener("click", randomPassword);


