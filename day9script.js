var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
      //Get all the countries from Asia continent /region using Filter function
 let output=data.filter((ele)=>
    ele.region==="Asia"
 ).map((ele)=>ele.name)
console.log(output)

//Get all the countries with a population of less than 2 lakhs using Filter function

console.log(data.filter((ele)=>ele.population<200000).map((ele)=>ele.name))

//Print the following details name, capital, flag using forEach function
data.forEach(function(ele){
console.log(`${ele.name},${ele.capital},${ele.flag}`)
})
//Print the total population of countries using reduce function

console.log(data.map((ele)=>ele.population).reduce((acc,cv)=>
acc+cv
))

//Print the country which uses US Dollars as currency.

var out=data.forEach(function(ele){
    console.log(`${ele.name},${ele.currencies.filter((elem)=>elem.code==="USD")}`)})




}





