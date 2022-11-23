JavaScript:
var message,a,b,somme,produit;

//Message de bienvenue
message="Bienvenue "+prompt("Quel est votre prénom ?");
alert(message);

//Somme et produit de deux nombres
alert("Je suis une page intelligente qui fait des calculs. Vous ne me croyez pas ?");
a=parseFloat(prompt("Entrer un nombre entier a"));
b=parseFloat(prompt("Entrer un nombre b"));
somme=a+b;
produit=a*b;
quotient=a/b
différence=a-b
document.write("Somme :",a," + ",b," = ",somme,"<br />");
document.write("Produit :",a," * ",b," = ",produit,"<br />");
document.write("Quotient :",a," / ",b," = ",quotient,"<br />");
document.write("Différence :",a," - ",b," = ",différence,"<br />");
