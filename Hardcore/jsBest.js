//Same but With POO

/***********************************************
 *  DEFINITION DES STYLES CSS
 ***********************************************/

//definition des Styles dans un nameSpace pour une bonne organisation
var defineStyle = {

	//definition du style de l'element body
	Body : function(body) {
		body.style.margin = '10px';
		body.style.fontFamily = '"Verdana", sans serif';
		body.style.Size = '12px';		
	},

	//definition du style de l'element banniere
	Banniere: function (banniere)
	{
		banniere.style.margin = '0px';
		banniere.style.padding = '0px';
		banniere.style.width = '994px';
		banniere.style.height = '196px';
		banniere.style.backgroundColor = 'green';
		banniere.style.border = 'black 3px double';
		banniere.style.backgroundImage = "url('./Images/banniere.jpg')";
	},

	//definition du style de l'element menuGauche
	MenuGauche: function (menuGauche)
	{
		menuGauche.style.margin = '0px';
		menuGauche.style.padding = '10px';
		menuGauche.style.width = '204px';
		menuGauche.style.height = '477px';
		menuGauche.style.backgroundColor = 'blue';
		menuGauche.style.backgroundImage = "url('./Images/bgMenuGauche.png')";
		menuGauche.style.border = "black 3px double";
		menuGauche.style.borderTop = 'none';
	},

	//definition du style de l'element menuBanniere
	MenuBanniere : function (menuBanniere)
	{
		menuBanniere.style.width = '130px';
		menuBanniere.style.height = '40px';
		menuBanniere.style.marginLeft = 'auto';
		menuBanniere.style.marginRight = 'auto';
		menuBanniere.style.marginRight = 'auto';
		menuBanniere.style.border = 'black 1px solid';
		menuBanniere.style.backgroundColor = 'green';
		menuBanniere.style.backgroundImage = "url('./Images/bgBanniereMenu.png')";
		menuBanniere.style.color = 'black';
		menuBanniere.style.textAlign = 'center';
		menuBanniere.style.fontSize = '28px';
		menuBanniere.style.fontWeight = 'bold';
		menuBanniere.style.fontStyle = 'italic';
		menuBanniere.style.textDecoration = 'underline';
	},

	//definition du style de l'element corps
	Corps: function (corps)
	{
		corps.style.margin = '0px';
		corps.style.padding = '10px';
		corps.style.width = '747px';
		corps.style.height = '477px';
		corps.style.backgroundColor = '#E0EBF8';
		corps.style.backgroundImage = "url('./Images/bgCorps.png')";
		corps.style.borderRight = 'black 3px double';
		corps.style.borderBottom = 'black 3px double';
		corps.style.borderTop = 'none';
		corps.style.borderLeft = 'none';
		corps.style.position = 'absolute';
		corps.style.left = '240px';
		corps.style.top = '212px';
		corps.style.overflow = 'auto';
		corps.style.fontSize = '12px';
	},

	//definition du style de l'element pSignature
	PSignature : function (pSignature)
	{
		pSignature.style.marginTop = '50px';
		pSignature.style.color = 'white';
		pSignature.style.fontSize = '12px';
	},

	//definition du style de l'element listeMenu
	UlMenu : function (listeMenu)
	{
		listeMenu.style.padding = '0px';
		listeMenu.style.paddingLeft = '70px';
		listeMenu.style.marginTop = '12px';
		listeMenu.style.marginBottom = '12px';
	},

	//definition du style de l'element Li du listeMenu
	LiMenu : function (tempLi)
	{
		tempLi.style.padding = '0px';
		tempLi.style.margin = '0px';
		tempLi.style.fontSize = '12px';
	},

	//definition du style de l'element a du listeMenu
	AMenu : function (tempA)
	{
		tempA.style.color = 'lightblue';
		tempA.style.fontSize = '12px';
		tempA.style.margin = '0px';		
	}
};

/******************************
 *  CREATION DU SITE
 ******************************/
//recuperation du <body>
var body = window.document.querySelector('body');
//specification de style de <body>
defineStyle.Body(body);

//creation des 3 elements du site (Banniere, MenuGauche et Corps)
var banniere = new Banniere();
var menuGauche = new MenuGauche();
var corps = new Corps();

//ajout des 3 elements (banniere, menuGauche et Corps) dans le body
body.appendChild(banniere.getElement());
body.appendChild(menuGauche.getElement());
body.appendChild(corps.getElement());

//AYAI TA TON SITE !


/***********************************
 *  CREATION DE L'OBJET Banniere
 ***********************************/

function Banniere()
{
	//creation du div banniere
	this.banniere = window.document.createElement('div');
	this.banniere.setAttribute('id', 'banniere');
	
	//specification de style du div banniere
	defineStyle.Banniere(this.banniere);

	//getter de la banniere
	this.getElement = function () { return this.banniere; };
}


/***********************************
 *  CREATION DE L'OBJET MenuGauche
 ***********************************/

function MenuGauche()
{
	this.menuGauche = window.document.createElement('div');
	this.menuGauche.setAttribute('id', 'menuGauche');

	//specification du style du menuGauche
	defineStyle.MenuGauche(this.menuGauche);	

	//creation des menu1, menu2 et menu3
	this.menuGauche.appendChild((new Menu('menu1')).getElement());
	this.menuGauche.appendChild((new Menu('menu2')).getElement());
	this.menuGauche.appendChild((new Menu('menu3')).getElement());

	//ajout de la signature
	this.menuGauche.appendChild((new Signature()).getElement());

	//getter
	this.getElement = function () { return this.menuGauche; };
}

/******************************
 *  CREATION DE L'OBJET Corps
 ******************************/
function Corps()
{
	this.body = window.document.querySelector('body');
	this.corps = window.document.createElement('div');
	this.corps.setAttribute('id', 'corps');

	//specification de style
	defineStyle.Corps(this.corps);	

	//ajout du crédit image
	this.corps.appendChild((new PCreditImage()).getElement());

	//ajout du contenu du corps
	var tempChaine = "";

	for(var i=1; i<301; i++)
	{
		tempChaine += 'OuiOuiOui-OuiOui-OuiOui-OuiOuiOuiOuiOuiOuiOui-'+i+((i==300)?'.':'-');
	}
	this.corps.appendChild(window.document.createTextNode(tempChaine));

	//getter
	this.getElement = function () { return this.corps; };
}


//Signature Roberto Le déglingo
function Signature()
{
	this.signature = window.document.createElement('p');
	this.signature.setAttribute('id', 'copyright');
	this.signature.innerHTML = '&copy; 2017 - Roberto Le D&eacute;glingo';
	defineStyle.PSignature(this.signature);

	//getter
	this.getElement = function() { return this.signature; };
}

//creation de l'image avec marqué genre Menu N
function MenuBanniere(pNomMenu)
{
	//formater le nom "menuN" en "Menu N"
	this.firstUpperCaseFormat = function (chaine) { return chaine.charAt(0).toUpperCase() + chaine.slice(1, (chaine.length-1)) + ' ' + chaine.charAt(chaine.length-1); };

	//creation de l'element
	this.menuBanniere = window.document.createElement('div');
	this.menuBanniere.setAttribute('class', 'banniereMenu');
	this.menuBanniere.appendChild(window.document.createTextNode(this.firstUpperCaseFormat(pNomMenu)));
	//specification du style de la banniere
	defineStyle.MenuBanniere(this.menuBanniere);	
	
	//getter
	this.getElement = function () { return this.menuBanniere; };
}

//liste des liens du menu
function UlMenu(pNomMenu)
{
	this.listeMenu = window.document.createElement('ul');
	this.listeMenu.setAttribute('class', 'listeMenu');
	
	//specification des styles de la liste
	defineStyle.UlMenu(this.listeMenu);	
	
	//ajout des elements de la liste
	var tempLi; 
	var tempA; 
	for(var i=0; i<5; i++)
	{
		tempLi = window.document.createElement('li');
		//specification des styles du li
		defineStyle.LiMenu(tempLi);		

		tempA = window.document.createElement('a');
		tempA.setAttribute('href', '');
		tempA.setAttribute('class', 'lienMenu');
		tempA.appendChild(window.document.createTextNode('Sous-'+pNomMenu+'-'+(i+1)));
		//specification du style des liens du li
		defineStyle.AMenu(tempA);
		tempLi.appendChild(tempA);
		
		//ajout du li dans l'element listeMenu
		this.listeMenu.appendChild(tempLi)
	}

	//getter
	this.getElement = function () { return this.listeMenu; };
}

//creation d'un element menu qui comprend une bannière et un ul listeMenu
function Menu(pNomMenu)
{
	//creation du menu
	this.menu = window.document.createElement('div');
	this.menu.setAttribute('id', pNomMenu);

	//ajout de la banniere
	this.menu.appendChild((new MenuBanniere(pNomMenu)).getElement());
	
	//ajout de l'ul dans le menu 
	this.menu.appendChild((new UlMenu(pNomMenu)).getElement());

	//getter
	this.getElement = function () { return this.menu; };
}

//creation de l'element qui credite la source du style graphique
function PCreditImage()
{
	this.pCredit = window.document.createElement('p');
	this.aCredit = window.document.createElement('a');
	this.aCredit.setAttribute('href', 'https://sh3ff1e.wordpress.com/tag/banniere/');
	this.aCredit.appendChild(window.document.createTextNode('BANNIERE ET IMAGES :https://sh3ff1e.wordpress.com/tag/banniere/')); 
	this.pCredit.appendChild(this.aCredit);

	//getter
	this.getElement = function () { return this.pCredit; };
}