// Дан массив с данными

const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia',
      active: true
    },
    {
      first_name: 'dmitry',
      last_name: 'Petrov',
      age: 7,
      city: 'Berlin',
      country: 'Germany',
      active: true
    },
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France',
      active: false
    },
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 10,
      city: 'Rome',
      country: 'Italy',
      active: false
    }
  ];

  
// 1.Сформируйте массив строк - каждая строка включает в себя информацию по каждому
// человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)".
// Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]

let arr_str = people.map(el => `${el.first_name} ${el.last_name} (${el.city}, ${el.country}),`);

console.log(arr_str);


// 2.Сформируйте массив из активных людей

let active_people = people.filter(el => el.active === true);

console.log(active_people);


 // 3.Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)

 let name_D = people.filter(el => el.first_name[0] === 'D' || el.first_name[0] === 'd');

 console.log(name_D);


 // 4.Получите из массива объект, где страной проживания человека является 'Germany'

 let person_from_Germany = people.find(el => el.country === 'Germany');
 
 console.log(person_from_Germany);


 // 5. Сформируйте массив из совершеннолетних пользователей.
 // И выведите в консоль результат в формате:
 // [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

let users_adults = people.filter(el => el.age >= 18)
.map(el => `${el.first_name} ${el.last_name} (${el.age}), ${el.country} (${el.city}),`);

console.log(users_adults);


 // 6.Измените у первого элемента значение first_name на "Petr" и age на 99;

    people[0].first_name = 'Petr';
    people[0].age = 99;

    console.log(people);
 
    
 
