
sap.ui.define([ "sap/m/Button", "sap/m/MessageToast"],  // API Refernece

	function (Button, MessageToast) // API Refernece - Refering to function
	
	{"use strict"; // prevents - from using undeclared variables 

	new Button({ text: "Ready...", //text - Name to a button
		         press: function () { MessageToast.show("Hello World!"); } 
				 // Adding Action To Button - On Click Name will display
	
	}).placeAt("content"); // defining the html (sapUiBody)

});

/* --------------------------------------------------- */
