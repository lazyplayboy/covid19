let div = document.createElement("div");
div.setAttribute("class","main1");


let formgroup=document.createElement("div");
formgroup.setAttribute("class","formgroup");

let input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("class","form-control");
input.setAttribute("id","main");
input.setAttribute("placeholder","Enter the country");
input.style.width="520px";

// button
let button = document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML = "search";
button.style.marginLeft = "200px";
button.style.marginTop = "20px";
button.addEventListener("click",foo);
// For active cases
let active = document.createElement("div");
active.setAttribute("id","active");

// For death cases
let death = document.createElement("div");
death.setAttribute("id","death");

// For recovered cases
let recovered = document.createElement("div");
recovered.setAttribute("id","recovered");

//<div id="active">Total Number of Active cases:123123</div>

formgroup.append(input,button,active,death,recovered);


// For active cases


div.append(formgroup);
document.body.append(div);

// For death cases

div.append(formgroup);
document.body.append(div);

// For recovered cases

div.append(formgroup);
document.body.append(div);

async function foo(){
   try {
      let countryname = document.getElementById("main").value;
   console.log(countryname);
   let res = await fetch(`https://api.covid19api.com/dayone/country/${countryname}`);
   let res1 = await res.json();
   console.log(res1);
   var index = res1.length-1;
   console.log(res1[index].Active);
   active.innerHTML = `Total Active cases:${res1[index].Active}`;
   death.innerHTML = `Total Deaths cases:${res1[index].Deaths}`;
   recovered.innerHTML = `Total Recovered cases:${res1[index].Recovered}`;

   } catch (error){
      console.log(error);

   }
   
}