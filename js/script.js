'use strict';
(function(){ 
    var modals = document.querySelectorAll('.modal');
  //open modal
    
	var showModal = function(event){
		var hashIndex = event.target.href.indexOf('#')
		var modalId = event.target.href.substring(hashIndex)
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
		document.querySelector(modalId).classList.add('show');
	};
   
    
	var modalLinks = document.querySelectorAll('.show-modal');
	
	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
    }
  
// hide modal	
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
		var modale = document.querySelectorAll('.modal')
		for(var i = 0; i < modale.length; i++){
			modale[i].classList.remove('show');
		}
	};
	
	var closeButtons = document.querySelectorAll('.modal .close');
	
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
       
	
	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
})(); 

//document.getElementByClass('modal').classList.add('show');