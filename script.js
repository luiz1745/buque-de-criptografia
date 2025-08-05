const encryptedMessage = `#@!&*^%$@()_+{}:?><|~\n█▓▒░▌▌▒▒░░███▒▒░░▌▌░░▒▒██░░█▓▒░\n⧗↯⇌✦✧⚝☠⧛⧚⋆⚙⚡⛧⊹▣⨳⨷⨴⫷`;

const finalMessage = `Você é a flor mais rara desse jardim digital.
Fiz tudo isso só pra te ver sorrir. 🌹

                         $$$$$$             
                        $$$   $$           
                      $$$      $   $$      
                   $$$$$$ $    $$$$$$$     
                  $$$$$$$$$$$$$$$$  $$     
                  $   $$$$$$$        $$    
                 $$     $$      $    $$    
                $$        $$$$$$$    $$$   
               $$          $$$$$     $$$$  
$$$$$$$$$$$$$  $           $$$$$$$$$$$  $  
 $$  $$$$ $$$$$$           $$$$$$$$$    $$ 
  $$   $$$    $$         $$$$           $$ 
   $$ $  $$  $$$    $$  $$              $$ 
    $$$$  $$ $$$  $ $$ $$               $  
     $$$$$ $$ $$$$ $$$$$ $             $$  
      $$$$  $$ $$$$$$$$  $    $       $$   
         $$$ $$  $$$$$$$   $$$$ $$   $$    
          $$$$$$$$$$$$$$$$$$$ $$$$$$$      
             $$$$$$$$$$$$$$$$$$$$$$$$      
                 $$$$  $$    $$    $$$$    
                $$$$    $$            $$$  
               $$$$      $$$$           $$ 
              $$$$         $$$$$$$$$$$$  $ 
              $$$              $$$    $$$$$
             $$$$                       $$$
             $$$                         $$
             $$$                           
             $$$                           
              $$$                          
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$     
    $$         $$$  $ $ $ $$$$$$$$$$$$     
    $$         $$$$  $$$$$$$$$$$$$$$$$     
    $$          $$$$$ $$$$$$$$$$$$$$$$     
    $$           $$$ $$$$$$$$$$$$$$$$$     
   $$$          $$$$$$$$$$$$$$$$$$$$$$     
   $$            $$$$$ $$$$$$$$$$$$$$$$    
  $$$             $$$ $$$$$$$$$$$$$$$$$    
  $$               $ $$$$$$$$$$$$$$$$$$$   
  $$              $ $ $$$$$$$$$$$$$$$$$$   
 $$$             $   $ $$$$$$$$$$$$$$$$$$  
 $$                   $$$$$$$$$$$$$$$$$$$  
 $$                $ $$$$$$$$$$$$$$$$$$$$  
$$$               $ $ $$$$$$$$$$$$$$$$$$$$ 
$$                 $ $$$$$$$$$$$$$$$$$$$$$ 
$$                  $ $$$$$$$$$$$$$$$$$$$$ 
$$                 $ $$$$$$$$$$$$$$$$$$$$$ 
$$                $ $ $$$$$$$$$$$$$$$$$$$$ 
 $$                  $$$$$$$$$$$$$$$$$$$$$ 
 $$                 $ $$$$$$$$$$$$$$$$$$$  
 $$              $   $ $$$$$$$$$$$$$$$$$$  
  $$                $ $ $$$$$$$$$$$$$$$$$  
  $$$              $ $ $$$$$$$$$$$$$$$$$   
   $$$              $$$$$$$$$$$$$$$$$$$    
    $$$        $ $ $ $$$$$$$$$$$$$$$$$     
      $$$           $ $ $$$$$$$ $$$$$      
       $$$$                   $$$$$        
         $$$$$$$$$$$$ $$$$$$$$$$$          
            $$$$$$$$$$$$$$$$$$             
              
    eu te amo 💙!

`;

const terminalText = document.getElementById("terminalText");
const overlay = document.querySelector(".overlay");

let isDecrypted = false;

function decryptText() {
  if (isDecrypted) return;

  isDecrypted = true;
  overlay.style.display = "none";
  terminalText.textContent = "";

  let index = 0;
  const speed = 5;

  const decryptInterval = setInterval(() => {
    if (index < finalMessage.length) {
      terminalText.textContent += finalMessage[index];
      index++;
    } else {
      clearInterval(decryptInterval);
    }
  }, speed);
}

function showEncrypted() {
  terminalText.textContent = encryptedMessage;
}

document.addEventListener("DOMContentLoaded", showEncrypted);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    decryptText();
  }
});
