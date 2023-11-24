const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const digitalHour = document.querySelector('.digital-hour')
const digitalMinutes = document.querySelector('.digital-minutes')
const digitalSeconds = document.querySelector('.digital-seconds')
const yearElm  = document.querySelector('.year')
const loader = document.querySelector('.loader')
let setClock = setInterval(() => {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear()
  seconds.style.transform = `rotate(${sec * 6}deg)`;
  minute.style.transform = `rotate(${min * 6 + sec /min}deg)`;
  hour.style.transform = `rotate(${hr * 30 + min/hr}deg)`;
  digitalHour.innerHTML =  hr.toString().padStart(2 , 0)
  digitalMinutes.innerHTML =  min.toString().padStart(2 , 0)
  digitalSeconds.innerHTML =  sec.toString().padStart(2 , 0)
  yearElm.innerHTML =  year;

}, 1000);

window.addEventListener('load' , () => {
  loader.classList.add('active')
})


