const root = document.querySelector('#root');
const container = document.createElement('div');
container.classList.add('container')
root.append(container);

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(responce => responce.json())
    .then(json => render(json))


const render = (json) => {
    const data_arr = json.map(({ title, completed }) => {

        const card = document.createElement('div');
        const taskEl = document.createElement('p');
        const statusEl = document.createElement('p');
      
        taskEl.innerText = `Task: ${title}` ;
        statusEl.innerText =`Status: ${completed}` ;

        if(completed === true) {
            card.style.backgroundColor = 'green';
        } else {
            card.style.backgroundColor = 'grey';
        }

        card.classList.add('tasks')

        card.append(taskEl,statusEl);
        return card
    })
   
    container.append(...data_arr);

}































// const getTask = (json) => {
//     json.forEach(el => {
//         const taskContainer = document.createElement('div');
//         const taskNameEl = document.createElement('p');
//         const statusEl = document.createElement('p');
    
//         taskNameEl.innerText = `Task: ${el.title}`;
//         statusEl.innerText = `Status: ${el.completed}`;
    
//         taskContainer.classList.add('tasks');
    
//         if (el.completed === true) {
//             taskContainer.style.backgroundColor = 'green'
//         } else {
//             taskContainer.style.backgroundColor = 'grey'
//         }
    
    
//         taskContainer.append(taskNameEl,statusEl);
//         container.append(taskContainer);
     
//     })
   
   
// }




// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(responce => responce.json())
//     .then(json => getTask(json))


