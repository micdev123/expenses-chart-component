let data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];

window.addEventListener('DOMContentLoaded', (event) => {
    loadData();
    hightStyle();
});


// Target the charts element
const charts = document.querySelector('.charts');

const loadData = () => {
    // Mapping through the data array
    let chart = data.map((chart_data) => {
        return `
        <div class="chart">
            <div class="bars"></div>
            <p class="day">
                ${chart_data.day}
            </p>
            <div class='amount'>$<span>${chart_data.amount}</span></div>
        </div>
        `
    });
    // Join data
    chart = chart.join('');

    // output
    charts.innerHTML = chart;
}

  
// Loop through bars array
const hightStyle = () => {
    // Target all amount in order to add hight style to bars
    const amounts = document.querySelectorAll('.amount')
    // console.log(amounts);
    amounts.forEach((amount) => {
        const value = Number(amount.textContent.split('$')[1]);
        // console.log(value);
        // Target parent 
        const parent = amount.parentElement
        const bar = parent.querySelector('.bars')
        // console.log(bar);
        // console.log(value);
        if (value >= 50) {
            bar.classList.add('highest');
        }
        else if (value >= 40) {
            bar.classList.add('second_high');
        }
        else if (value >= 34) {
            bar.classList.add('third_high');
        }
        else if (value >= 30) {
            bar.classList.add('fourth_high');
        }
        else if (value >= 25) {
            bar.classList.add('fifth_high');
        }
        else if (value >= 21) {
            bar.classList.add('six_high');
        }

        highlight_today_bar(bar, parent)
    })

    // console.log(chart);
}

const highlight_today_bar = (bar, parent) => {
    const weekday = ["sun","mon","tue","wed","thu","fri","sat"];
    const today = weekday[new Date().getDay()];

    const day = parent.querySelector('.day').textContent.trim()
    // console.log(day);
    if (today == day) {
        bar.classList.add('cyan_color')
    }
    
}


