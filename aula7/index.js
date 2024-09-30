localStorage.setItem('person', JSON.stringify({ name: 'John' }));
 
console.log(JSON.parse(localStorage.getItem('person')));