//recuperation du <body>
var body = window.document.querySelector('body');

//specification de style de <body>
defineStyleBody(body);

//ajout des 3 elements (banniere, menuGauche et Corps) dans le body
body.appendChild(createBanniere());
body.appendChild(createMenuGauche());
body.appendChild(createCorps());


/******************************
 *  CREATION DU DIV banniere
 ******************************/
function createBanniere()
{
	//creation du div banniere
	var banniere = window.document.createElement('div');
	banniere.setAttribute('id', 'banniere');
	
	//specification de style du div banniere
	defineStyleBanniere(banniere);

	return banniere;
}


/******************************
 *  CREATION DU DIV menuGauche
 ******************************/
function createMenuGauche()
{
	var menuGauche = window.document.createElement('div');
	menuGauche.setAttribute('id', 'menuGauche');

	//specification du style du menuGauche
	defineStyleMenuGauche(menuGauche);	

	//creation des menu1, menu2 et menu3
	menuGauche.appendChild(createMenu('menu1'));
	menuGauche.appendChild(createMenu('menu2'));
	menuGauche.appendChild(createMenu('menu3'));

	//ajout de la signature
	menuGauche.appendChild(createSignature());
	
	return menuGauche;
}

/******************************
 *  CREATION DU DIV corps
 ******************************/
function createCorps()
{
	var body = window.document.querySelector('body');
	var corps = window.document.createElement('div');
	corps.setAttribute('id', 'corps');

	//specification de style
	defineStyleCorps(corps);	

	//ajout du crédit image
	corps.appendChild(createPCreditImage());

	//ajout du contenu du corps
	var tempChaine = "";

	for(var i=1; i<301; i++)
	{
		tempChaine += 'OuiOuiOui-OuiOui-OuiOui-OuiOuiOuiOuiOuiOuiOui-'+i+((i==300)?'.':'-');
	}
	corps.appendChild(window.document.createTextNode(tempChaine));

	return corps;
}

//Signature Roberto Le déglingo
function createSignature()
{
	var pSignature = window.document.createElement('p');
	pSignature.setAttribute('id', 'copyright');
	pSignature.innerHTML = '&copy; 2017 - Roberto Le D&eacute;glingo';
	defineStylePSignature(pSignature);

	return pSignature;
}


//creation de l'image avec marqué genre Menu N
function createMenuBanniere(nomMenu)
{
	var menuBanniere = window.document.createElement('div');
	menuBanniere.setAttribute('class', 'banniereMenu');
	menuBanniere.appendChild(window.document.createTextNode(firstUpperCaseFormat(nomMenu)));
	//specification du style de la banniere
	defineStyleMenuBanniere(menuBanniere);	
	
	return menuBanniere;
}

//creation d'un element listeMenu
function createUlMenu(nomMenu)
{
	var listeMenu = window.document.createElement('ul');
	listeMenu.setAttribute('class', 'listeMenu');
	
	//specification des styles de la liste
	defineStyleUlMenu(listeMenu);	
	
	//ajout des elements de la liste
	var tempLi; 
	var tempA; 
	for(var i=0; i<5; i++)
	{
		tempLi = window.document.createElement('li');
		//specification des styles du li
		defineStyleLiMenu(tempLi);		

		tempA = window.document.createElement('a');
		tempA.setAttribute('href', '');
		tempA.setAttribute('class', 'lienMenu');
		tempA.appendChild(window.document.createTextNode('Sous-'+nomMenu+'-'+(i+1)));
		//specification du style des liens du li
		defineStyleAMenu(tempA);
		tempLi.appendChild(tempA);
		
		//ajout du li dans l'element listeMenu
		listeMenu.appendChild(tempLi)
	}

	return listeMenu;
}

//creation d'un element menu qui comprend une bannière et un ul listeMenu
function createMenu(nomMenu)
{
	//creation du menu
	var menu = window.document.createElement('div');
	menu.setAttribute('id', nomMenu);

	//ajout de la banniere
	menu.appendChild(createMenuBanniere(nomMenu));
	
	//ajout de l'ul dans le menu 
	menu.appendChild(createUlMenu(nomMenu));

	return menu;
}

//creation de l'element qui credite la source du style graphique
function createPCreditImage()
{
	var pCredit = window.document.createElement('p');
	var aCredit = window.document.createElement('a');
	aCredit.setAttribute('href', 'https://sh3ff1e.wordpress.com/tag/banniere/');
	aCredit.appendChild(window.document.createTextNode('BANNIERE ET IMAGES :https://sh3ff1e.wordpress.com/tag/banniere/')); 
	pCredit.appendChild(aCredit);

	return pCredit;
}


//formater le nom "menuN" en "Menu N"
function firstUpperCaseFormat(chaine)
{
	return chaine.charAt(0).toUpperCase() + chaine.slice(1, (chaine.length-1)) + ' ' + chaine.charAt(chaine.length-1);
}


/***********************************************
 *  DEFINITION DES STYLES CSS
 ***********************************************/

//definition du style de l'element body
function defineStyleBody(body)
{
	body.style.margin = '10px';
	body.style.fontFamily = '"Verdana", sans serif';
	body.style.Size = '12px';	
}

//definition du style de l'element banniere
function defineStyleBanniere(banniere)
{
	banniere.style.margin = '0px';
	banniere.style.padding = '0px';
	banniere.style.width = '994px';
	banniere.style.height = '196px';
	banniere.style.backgroundColor = 'green';
	banniere.style.border = 'black 3px double';
	banniere.style.backgroundImage = "url('./Images/banniere.jpg')";
}

//definition du style de l'element menuGauche
function defineStyleMenuGauche(menuGauche)
{
	menuGauche.style.margin = '0px';
	menuGauche.style.padding = '10px';
	menuGauche.style.width = '204px';
	menuGauche.style.height = '477px';
	menuGauche.style.backgroundColor = 'blue';
	menuGauche.style.backgroundImage = "url('./Images/bgMenuGauche.png')";
	menuGauche.style.border = "black 3px double";
	menuGauche.style.borderTop = 'none';
}

//definition du style de l'element pSignature
function defineStylePSignature(pSignature)
{
	pSignature.style.marginTop = '50px';
	pSignature.style.color = 'white';
	pSignature.style.fontSize = '12px';
}

//definition du style de l'element listeMenu
function defineStyleUlMenu(listeMenu)
{
	listeMenu.style.padding = '0px';
	listeMenu.style.paddingLeft = '70px';
	listeMenu.style.marginTop = '12px';
	listeMenu.style.marginBottom = '12px';
}

//definition du style de l'element Li du listeMenu
function defineStyleLiMenu(tempLi)
{
	tempLi.style.padding = '0px';
	tempLi.style.margin = '0px';
	tempLi.style.fontSize = '12px';
}

//definition du style de l'element a du listeMenu
function defineStyleAMenu(tempA)
{
	tempA.style.color = 'lightblue';
	tempA.style.fontSize = '12px';
	tempA.style.margin = '0px';		
}

//definition du style de l'element menuBanniere
function defineStyleMenuBanniere(menuBanniere)
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
}

//definition du style de l'element corps
function defineStyleCorps(corps)
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
}