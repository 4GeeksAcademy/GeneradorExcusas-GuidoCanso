window.onload = function() {
    function generateExcuse() {
        let who = ["El perro", "Mi madre", "El vecino", "Mi amigo"];
        let action = ["comió", "rompió", "robó", "dañó"];
        let what = ["mi tarea", "mi teléfono", "mi coche"];
        let when = ["antes de la clase", "cuando estaba durmiendo", "mientras hacía ejercicio", "durante mi almuerzo", "mientras estaba rezando"
            
        ];
        let excuse = `${who[Math.floor(Math.random() * who.length)]} 
                      ${action[Math.floor(Math.random() * action.length)]}
                      ${what[Math.floor(Math.random() * what.length)]}
                      ${when[Math.floor(Math.random() * when.length)]}`;
        
        document.getElementById("textoExcusa").innerText = excuse;
    }
    generateExcuse();
    
  };