console.clear();
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (times) {
        let daily = document.querySelector('#daily');
        let outputDaily = '';
        for (let time of times) {
            outputDaily += `
            <div class="time-wrapper time-item">
            <div class="category-wrapper grid-1">
              <div class="top flex">
                <h5>${time.title}</h5>
                <a href=""><img src="images/icon-ellipsis.svg" alt=""></a>
              </div>
              <div class="btm">
              <p>${time.timeframes.daily.current}hrs</p>
              <span>Previous - ${time.timeframes.daily.previous}hrs</span>
            </div>
            </div>
          </div>`;
            daily.innerHTML = outputDaily;
        }

        let weekly = document.querySelector('#weekly');
        let outputWeekly = '';
        for (let time of times) {
            outputWeekly += `
            <div class="time-wrapper time-item">
            <div class="category-wrapper grid-1">
              <div class="top flex">
                <h5>${time.title}</h5>
                <a href=""><img src="images/icon-ellipsis.svg" alt=""></a>
              </div>
              <div class="btm">
              <p>${time.timeframes.weekly.current}hrs</p>
              <span>Previous - ${time.timeframes.weekly.previous}hrs</span>
            </div>
            </div>
          </div>`;
            weekly.innerHTML = outputWeekly;
        }

        let monthly = document.querySelector('#monthly');
        let outputMonthly = '';
        for (let time of times) {
            outputMonthly += `
            <div class="time-wrapper time-item">
            <div class="category-wrapper grid-1">
              <div class="top flex">
                <h5>${time.title}</h5>
                <a href=""><img src="images/icon-ellipsis.svg" alt=""></a>
              </div>
              <div class="btm">
              <p>${time.timeframes.monthly.current}hrs</p>
              <span>Previous - ${time.timeframes.monthly.previous}hrs</span>
            </div>
            </div>
          </div>`;
            monthly.innerHTML = outputMonthly;
        }

    })




const tabBtn = document.querySelector('.frequency-container');
const tabBtns = document.querySelectorAll('.frequency-container a');

tabBtn.addEventListener('click', (e) => {
    tabBtns.forEach(tabBtn => {
        tabBtn.classList.remove('active');
    })
    const tab = e.target;
    tab.classList.add('active');
    const dashboards = document.querySelectorAll('.time-container');
    dashboards.forEach(dashboard => {
        dashboard.classList.remove('active');
    })
    const dashboard = document.getElementById(tab.dataset.id);
    dashboard.classList.add('active');

})

tabBtns[0].click();