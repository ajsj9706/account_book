/* click */

const MONTH = document.getElementById('month_target');

MONTH.addEventListener('click', () => {
    let subIncome = document.getElementsByClassName('sub_income');
    
    if (MONTH.alt === "down") {
        for (let value of subIncome) {
            value.style.display = 'none';
        }
        MONTH.src = 'image/arrow/arrow_right.png';
        MONTH.alt = "right"
    } else {
        for (let value of subIncome) {
            value.style.display = 'block';
        }
        MONTH.src = 'image/arrow/arrow_down.png';
        MONTH.alt = "down"
    }
});

const SPEND = document.getElementById('spend_target');

SPEND.addEventListener('click', () => {
    let subIncome = document.getElementsByClassName('percent_container');
    
    if (SPEND.alt === "down") {
        for (let value of subIncome) {
            value.style.display = 'none';
        }
        SPEND.src = 'image/arrow/arrow_right.png';
        SPEND.alt = "right"
    } else {
        for (let value of subIncome) {
            value.style.display = 'block';
        }
        SPEND.src = 'image/arrow/arrow_down.png';
        SPEND.alt = "down"
    }
});

const PROPERTY = document.getElementById('property_target');

PROPERTY.addEventListener('click', () => {
    let subIncome = document.getElementsByClassName('property_sub_text');
    
    if (PROPERTY.alt === "down") {
        for (let value of subIncome) {
            value.style.display = 'none';
        }
        PROPERTY.src = 'image/arrow/arrow_right.png';
        PROPERTY.alt = "right"
    } else {
        for (let value of subIncome) {
            value.style.display = 'block';
        }
        PROPERTY.src = 'image/arrow/arrow_down.png';
        PROPERTY.alt = "down"
    }
});

/* load */

window.addEventListener('load', () => {
    let savingText = document.getElementById('saving_text').textContent;
    let spendText = document.getElementById('spend_text').textContent;

    document.getElementsByClassName('saving_percent')[0].style.width = savingText;
    document.getElementsByClassName('spend_percent')[0].style.width = spendText;
});

window.addEventListener('load', () => {
    let now = new Date();

    let lastDay = ( new Date( now.getFullYear(), now.getMonth(), 0) ).getDate();
    let firstDate = document.getElementById('first_date');
    let lastDate = document.getElementById('last_date');

    firstDate.innerText = "( " + now.getFullYear() + "." + (now.getMonth() + 1) + "." + 1;
    lastDate.innerText = " ~ " + now.getFullYear() + "." + (now.getMonth() + 1) + "." + (lastDay + 1) + " )";
});