var span = document.getElementsByClassName("close")[0];

if (!localStorage.couponModal) {
	setTimeout(function() {
		$('#couponModal').modal({
			backdrop: 'static',
			keyboard: false
		});
	}, 3000);
	
}

localStorage.couponModal = 1;

