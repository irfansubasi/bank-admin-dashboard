const data = [];
const data2 = [];
let prev = 1000;
let prev2 = -80;
for (let i = 0; i < 5000; i++) {
    let randomChange = 500 - Math.random() * 1000;
    prev += randomChange;
    data.push({x: i, y: prev});
    randomChange = 500 - Math.random() * 1000;
    prev2 += randomChange;
    data2.push({x: i, y: prev2});
}



new Chart(
    document.querySelector("#graph"),
{
    type: 'line',
    data: {
        datasets: [{
            label: 'This Month',
            borderColor: 'rgba(137,75,169,1)',
            backgroundColor: 'rgba(137,75,169,0.5)',
            borderWidth: 1,
            radius: 0,
            fill: true,
            data: data,
        },
        {
            label: 'Previous Month',
            borderColor: 'rgba(224,58,69,1)',
            backgroundColor: 'rgba(224,58,69,0.5)',
            borderWidth: 1,
            radius: 0,
            data: data2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        aspectRatio: 2,
        layout: {
            padding: 20
        },
        interaction: {
            intersect: false
        },
        plugins: {
            legend: true
        },
        scales: {
            x: {
                type: 'linear',
                min: 0,
                max: 30
            },
            y: {
                type: 'linear',
                min: -5000,
                max: 5000
            }
        }
    }
});

function activateButton(selected) {

    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(navLink) {

            navLink.classList.remove('active');

    });

    selected.classList.add('active');

}