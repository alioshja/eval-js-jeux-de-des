// déclaration des variables indispensables.

//launch est pour cibler l'endroit ou on vas modifier le script
var launch = document.getElementById("button");
var reWrite = "button";
// var foundI = document.getElementsByName();
var turn = null;
var joueur1 = true;
var joueur2 = null;

//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
    //liens images pour dès
var d1l = "images/1-des-face.png";
var d2l = "images/2-des-face.png";
var d3l = "images/3-des-face.png";
var d4l = "images/4-des-face.png";
var d5l = "images/5-des-face.png";
var d6l = "images/6-des-face.png";


//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------


// construction du sript qui lance le dès après click sur le button.
max = 6;
min = 1;
function launching()
{
    var lancer = Math.floor(Math.random() * (max - min + 1)) + min;
    var number = lancer;//cheked
    var imageCreate = document.createElement("img");
    var getID = document.getElementById("button");
    console.log(number);
    
    if (number == 1) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d1l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes'); //fonctionne
    }

    else if (number == 2) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d2l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes');
    }

    else if (number == 3) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d3l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes');
    
    }

    else if (number == 4) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d4l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes');
    
    }

    else if (number == 5) {    
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d5l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes');
    }

    else if (number == 6) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d6l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes');
    }
    
}
function launching2() 
{
    var lancer = Math.floor(Math.random() * (max - min + 1)) + min;
    var number = lancer;//cheked
    var imageCreate = document.createElement("img");
    var getID = document.getElementById("button");
    console.log(number)
    
    if (number == 1) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS') //réussi
        getID.appendChild(imageCreate).setAttribute('src',d1l) //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2') //fonctionne
    }else if (number == 2) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS') //réussi
        getID.appendChild(imageCreate).setAttribute('src',d2l) //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2')
    }

    else if (number == 3) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d3l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2');
    
    }

    else if (number == 4) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d4l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2');
    
    }

    else if (number == 5) {    
        getID.appendChild(imageCreate).setAttribute('ID','imgS'); //réussi
        getID.appendChild(imageCreate).setAttribute('src',d5l); //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2');
    }

    else if (number == 6) {
        getID.appendChild(imageCreate).setAttribute('ID','imgS') //réussi
        getID.appendChild(imageCreate).setAttribute('src',d6l) //fonctionne
        getID.appendChild(imageCreate).setAttribute('class','imgDes2')
    }
}