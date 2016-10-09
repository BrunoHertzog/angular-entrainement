'use strict';

angular.module('notesApp')
	   .controller('MainCtrl', [function() {
	   	//Controller MainCtrl
	   		console.log('Création de MainCtrl');
	   		var ctrl = this;
	   		// Attrbitut publique ---------------------------
	   		ctrl.helloMsg = 'Bonjour';


	   		// Fonctions publique ----------------------------
	   		ctrl.changeMessage = function(newMsg) {
	   			ctrl.helloMsg = newMsg;
	   		};
}]);