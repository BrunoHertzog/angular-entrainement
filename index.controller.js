'use strict';

angular.module('notesApp')
	   .controller('MainCtrl', [function() {
	   	//Controller MainCtrl
	   		console.log('Création de MainCtrl');
	   		var ctrl = this;
	   		// Attrbitut publique ---------------------------

	   		ctrl.notes = [
	   		{id:1, label:'Math', grade: 11, done: true},
	   		{id:2, label:'Géographie', grade: 7, assignee: 'Albert', done: false},
	   		{id:3, label:'Histoire', grade: 1, done: true},
	   		{id:4, label:'Math', grade: 15, assignee: 'Michel', done: false},
	   		];

	   		ctrl.notes2 = 
	   		{
	   			brad:  {
	   				id: 1,
	   				label: 'First note',
	   				done: false
	   			},
	   			Michel: {
	   				id: 2,
	   				label: 'Second note',
	   				done: true
	   			},
	   			jason: {
	   				id: 4,
	   				label: 'Quatre note',
	   				done: false
	   			}
	   		};
	   		// Fonctions publique ----------------------------
	   		ctrl.getNoteClass = function(status) {
	   			return {
	   				done: status,
	   				pending: !status
	   			};
	   		};

}]);