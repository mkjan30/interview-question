const students = [
    {id: 21, name: "Tom Crush"},
    {id: 25, name: "Bob Dilan"},
    {id: 29, name: "Tom Muri"},
    {id: 75, name: "Sakib Khan"}
];

 const names = students.map(s => s.name);
 const ids = students.map(s => s.id);
 const bigger = students.filter(s => s.id>40);
 const biggerOne = students.find(s => s.id>40);

 console.log(biggerOne);
