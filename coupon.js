var span = document.getElementsByClassName("close")[0];

if (!sessionStorage.couponModal) {
	setTimeout(function() {
		$('#couponModal').modal({
			backdrop: 'static',
			keyboard: false
		});
	}, 3000);
	
}

sessionStorage.couponModal = 1;

