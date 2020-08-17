document.addEventListener('DOMContentLoaded', function () {
    let devfolioOptions = {
        buttonSelector: '#devfolio-apply-now',
        key: 'innobuzz',
    }

    let script = document.createElement('script');
    script.src = "https://apply.devfolio.co";
    document.head.append(script);

    script.onload = function () {
        new Devfolio(devfolioOptions);
    }

    script.onerror = function () {
        document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
            window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
        });
    }

    var button = document.getElementById('my-devfolio');
    var button2 = document.getElementById('devfolio-dm');
    if(button != null){
            var devbutton = document.getElementById('devfolio-apply-now')
	        button.onclick = function(){
		    devbutton.click();
	    }
    }
     if(button2 != null){
            var devbutton = document.getElementById('devfolio-apply-now')
	        button2.onclick = function(){
		    devbutton.click();
	    }
    }
	
});