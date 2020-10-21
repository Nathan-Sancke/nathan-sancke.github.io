function classementOrdreAlphabetique (liste){
    let tab= ["@","z"]; //initialise la nouvelle boucle avec le caractère avant A dans la table ascci et z pour ne pas gérer les "blancs"
    for (let i=0; i< liste.length; i++) //boucle autant de fois qu'il y a d'éléments dans la liste en paramètres
    {
        for(let j=0; j< tab.length;j++ ) //boucle autant de foix que d'éléments dans la nouvelle liste
        {
            if (liste[i].charCodeAt(0)>tab[j].charCodeAt(0) && liste[i].charCodeAt(0)<=tab[j+1].charCodeAt(0)) //.charCodeAt permet de convertir en code ascci la lettre en position "0"
            {
                tab.splice(j+1,0,liste[i]); //rajoute un nouvel éléments dans la nouvelle liste en position "j+1"
            }
        }
    }
    tab.pop(); //enlève le @ et le z du nouveau tableau
    tab.shift();
    return tab;
}
