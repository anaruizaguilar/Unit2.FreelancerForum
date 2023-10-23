/* State */
// Here, we define variables for the data that our program needs to remember.
// TO DO: Initialize an array of names and an array of occupations
const names = ["Alice", "Bob", "Carol", "Remus"];
const occupations = ["Writer", "Teacher", "Programmer", "Bounty-Hunter"];
const prices = [30.00, 50.00, 70.00, 40.00];

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

// TO DO: Interval is set to add a freelancer and render every few seconds. 
const addPriceIntervalId = setInterval(addFreelancer(), 2000);

//Render function:
function render() {
    // TO DO: 'document.queerySelector' is used to select existing DOM elements.
    const freelancerList = document.querySelector("#freelancers");
    const listElements = freelancers.map((freelancers) => {
        const element = document.createElement("ul");
        element.classList.add(freelancers);
        return element;
    });
    freelancerList.replaceChildren(...listElements);
};

// TO DO: Render initial array of freelancers onto the page. 
render();

function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name, occupation, price });

    render();
}
// TO DO: Function that calculates the average starting price of the freelancers array.
function getMean(freelancers) {
    let sum = 0;
    let mean = 0;
    for(let i = 0; i < freelancers.price.length; i++) {
      sum += freelancers.price[i];
      mean += sum / freelancers.price.length;
    }
    return mean;
  };
// TO DO: DOM is updated to reflect the average starting price.

