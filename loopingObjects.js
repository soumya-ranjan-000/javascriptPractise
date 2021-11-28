const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  }
const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    Intern
  }
  

//   console.log(Manager);

  for(const p of Object.keys(Manager)){
      console.log(p);
  }
const prop=Object.keys(Manager);
  console.log(prop);
const values=Object.values(Manager);
console.log(values);
  for(const p of prop){
      console.log(Manager[p]);
  }