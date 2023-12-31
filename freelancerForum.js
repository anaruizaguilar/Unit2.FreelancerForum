/* State */
// Here, we define variables for the data that our program needs to remember.
// TO DO: Initialize an array of names and an array of occupations
const names = ["Alice", "Bob", "Carol", "Remus", "Gertrude", "Nichael"];
const occupations = ["Writer", "Teacher", "Programmer", "Bounty-Hunter", "Revenge-Seeker"];
const prices = [30.00, 50.00, 70.00, 40.00];
const maxListings = 10;

// TO DO: Initialize an array of at least two freelancers with names, occupations, and starting prices.
const freelancers = [
    {
     name: "Alice",
     occupation: "Writer",
     price: 30.00,
    },
    {
     name: "Bob",
     occupation: "Teacher",
     price: 50.00,
    },
];

//Render function:
function renderListing() {
    // TO DO: 'document.queerySelector' is used to select existing DOM elements.
    const freelancerListing = document.querySelector("tbody");
    const template = freelancers.map((data) => {
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        td1.textContent = data.name;
        const td2 = document.createElement("td");
        td2.textContent = data.occupation;
        const td3 = document.createElement("td");
        td3.textContent = data.price;
        tr.append(td1, td2, td3);
        return tr;
    });
    
    freelancerListing.replaceChildren(...template);
};

// TO DO: Render initial array of freelancers onto the page. 
renderListing();

// TO DO: Interval is set to add a freelancer and render every few seconds. 
const addFeelancerIntervalId = setInterval(addFreelancer, 1000);

function addFreelancer() {
    renderListing();
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name, occupation, price });

    renderAvgPrice();
    
    if(freelancers.length >= maxListings) {
        clearInterval(addFeelancerIntervalId);
    }
}

renderAvgPrice();

// TO DO: Function that calculates the average starting price of the freelancers array.
function getMean() {
// TEST: kept getting "undefined" when trying to access price property within Freelancers object with dot notation.
//   const test = freelancers.map((data) => {
//     console.log(data.price);
//   });
//   return test;
    
    const sum = freelancers.reduce((accum, freelancer) => accum + freelancer.price, 0);
    console.log(sum);
    const mean = sum / freelancers.length;
    console.log(mean);
    return mean.toFixed();
  };

// TO DO: DOM is updated to reflect the average starting price.

function renderAvgPrice() {
    const avgPrice = document.querySelector("p");
    avgPrice.textContent = "The starting average price is $" + getMean();
}


