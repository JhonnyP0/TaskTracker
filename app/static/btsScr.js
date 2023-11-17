    const plusButton = document.getElementById('btp');
    const minusButton = document.getElementById('btm');
    const resetButton = document.getElementById('br');
    const digitLabel = document.getElementById('label');
    var currentDigit = 0;

    function updateDigitLabel() {
        digitLabel.textContent = currentDigit;
    }

    plusButton.addEventListener('click', function() {
        currentDigit++;
        updateDigitLabel();
    });

    minusButton.addEventListener('click', function() {

        if(currentDigit==0)
        {
            currentDigit=0;
        }
        else
        {
            currentDigit--;
        }
        updateDigitLabel();
    });

    resetButton.addEventListener('click', function() {
        if(confirm("Are you sure you wanna reset stats?"))
        {
        currentDigit=0;
        updateDigitLabel();
        }
        else
        {
            alert("Be careful please")
        }
    });