const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
        "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m",
        "n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
        "6","7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{",
        "[","}","]",",","|",":",";","<",">",".","?","/"];

const inputEl1 = document.getElementById("input-el1")
const inputEl2 = document.getElementById("input-el2")

function generatePassword() {
    let passwordlength = 15;
    let password1 = "";
    let password2 = ""

    for (let i = 0; i < passwordlength; i++) {

        let random1 = Math.floor ( Math.random() * characters.length )
        password1 += characters[random1]

        let random2 = Math.floor ( Math.random() * characters.length )
        password2 += characters[random2]
        
        inputEl1.value = password1
        inputEl2.value = password2
    }
}

function copyBtn(inputElementId){
    const inputEl = document.getElementById(inputElementId)
    const passwordToCopy = inputEl.value
    navigator.clipboard.writeText(passwordToCopy)
    .then(function() {
        console.log("Text copied too clipboard successfully");
        
        alert("Text copied too clipboard successfully " + passwordToCopy)
    })
    .catch(err =>{
    console.error("Failed to copy", err);
    alert("Failed to copy automatically, do the manual copy")
    
})
}
