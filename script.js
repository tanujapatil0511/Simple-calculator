
(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');


    buttons.forEach(function (button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });
   
    
    equal.addEventListener('click',function(e){
        if(screen.value==''){
            screen.value="";
        }
        else{
            try {
                // Sanitize input by allowing only numbers and mathematical operators
                let sanitizedValue = screen.value.replace(/[^-()\d/*+.]/g, '');
                console.log('Evaluating:', sanitizedValue);
                let answer = eval(sanitizedValue);
                screen.value = answer;
            } catch (error) {
                console.error('Error evaluating expression:', error);
                screen.value = "Error";
            }
        }
    })

    clear.addEventListener('click',function(e){
        screen.value="";
    })

})();