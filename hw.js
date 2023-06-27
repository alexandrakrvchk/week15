let t_Moscow = document.querySelector('.t_Moscow');
let t_SPeter = document.querySelector('.t_SPeter');
let t_NY = document.querySelector('.t_NY');
let t_Tokio = document.querySelector('.t_Tokio');
let min_t = document.querySelector('.min_temp');
let max_t = document.querySelector('.max_temp');

let cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
let t_cities = [];
for (let i = 0; i < cities.length; i++) {
    let temp = prompt('Введите температуру для города ' + cities[i]);
    t_cities.push(temp);
}


t_cities.forEach (function(item, i, t_cities) {
    t_Moscow.textContent = t_cities[0] + '°' + 'C';
    t_SPeter.textContent = t_cities[1] + '°' + 'C';
    t_NY.textContent = t_cities[2] + '°' + 'C';
    t_Tokio.textContent = t_cities[3] + '°' + 'C';
})



//temp_Moscow = prompt('Введите температуру для города Москва');
//t_Moscow.textContent = temp_Moscow + '°' + 'C';

//temp_SPeter = prompt('Введите температуру для города Санкт-Петербург');
//t_SPeter.textContent = temp_SPeter + '°' + 'C';

//temp_NY = prompt('Введите температуру для города Нью-Йорк');
//t_NY.textContent = temp_NY + '°' + 'C';

//temp_Tokio = prompt('Введите температуру для города Токио');
//t_Tokio.textContent = temp_Tokio + '°' + 'C';

//t_Moscow = Number();
//t_SPeter = Number();
//t_NY = Number();
//t_Tokio = Number();

let temperatures = t_cities;

let min_temp = Math.min(...temperatures);
min_t.textContent = min_temp + '°' + 'C';

let max_temp = Math.max(...temperatures);
max_t.textContent = max_temp + '°' + 'C';

//let min_temp = temperatures[0];
//let max_temp = temperatures[0];

//for (let i = 0; i < temperatures.length; i++) {
 //   if(temperatures[i] < min_temp) {
  //      min_temp = temperatures[i]
  //  }

   // if(temperatures[i] > max_temp) {
   //     max_temp = temperatures[i]
    //}
//}

//min_t.textContent = min_temp + '°' + 'C';
//max_t.textContent = max_temp + '°' + 'C'; 

