let data =[
{
    "city": "Delhi",
    "state_name": "Delhi",
    "population": 30
  },
  {
    "city": "Mumbai",
    "state_name": "Mahārāshtra",
    "population": 20
  },
  {
    "city": "Kolkāta",
    "state_name": "West Bengal",
    "population": 30
  },
  {
    "city": "Bangalore",
    "state_name": "Karnātaka",
    "population": 40
  },
  {
    "city": "Chennai",
    "state_name": "Tamil Nādu",
    "population": 50
  },
];

// for (let i = 0; i < data.length; i++) {
//   console.log(i);
//   console.log(`${data[i].city} is located in ${data[i].state_name} state`);  
// }


let totalpopulation =0

for (let i = 0; i < data.length; i++) {
  // console.log(data[i].population)
  totalpopulation = totalpopulation + data[i].population
  
}
console.log(totalpopulation);