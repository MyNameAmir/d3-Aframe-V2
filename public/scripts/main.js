import {extractRawCSVData, domains, refineDataForCharting} from "./d3DataRetrieving.js"
import {Bar} from "./bar.js"
import {draw} from "./draw.js"
import {Options} from "./options.js"


let data = await extractRawCSVData("/datafiles/GDP_Quarterly.csv");
console.log(data)
let bars = []
export let theDomains = domains(data, Options.data.colourDecider)
console.log(theDomains)

let refinedData = refineDataForCharting(data, Options.data.selectedFields);

for(let i of refinedData)
    bars.push(new Bar(i));
console.log(bars)


draw(bars);


//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//model view controller
//reproducibility, reusable
//https://support.microsoft.com/en-us/office/change-the-display-of-a-3-d-chart-60c13909-d2a1-4e06-8b8c-bccba7868c9b
//small filter

//august: at the end of each week, point form, what I did this week. and 
//a short point for what I will do next week. Kim email. 
//bar chart 3d with a slider

// // // Declare the x (horizontal position) scale.
// const x = d3.scaleUtc()
//     .domain([new Date("2023-01-01"), new Date("2024-01-01")])
//     .range([marginLeft, width - marginRight]);

// // Declare the y (vertical position) scale.
// const y = d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - marginBottom, marginTop]);

// Create the SVG container.


// gui-slider.append("a-gui-slider")
//                  .attr("width", "2.5")
//                  .attr("height", "0.75")
//                  .attr("id", "slider")
//                  .attr("percent", "0.29")
//                  .attr("margin", "0 0 0.05 0")


//         <a-gui-slider 	
// 	width="2.5" height="0.75"
// 	onclick="slideActionFunction"
// 	percent="0.29"
// 	margin="0 0 0.05 0"
// >
// </a-gui-slider>



// // Add the x-axis.

// svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));


// svg1.append("g")
//     .attr("transform", `translate(${marginLeft},0)`)
//     .call(d3.axisLeft(y));

// // Add the y-axis.
// const gx = svg1.append("g")
//     .attr("transform", `translate(0,${height - marginBottom})`)
//     .call(d3.axisBottom(x));

// // Append the SVG element.

//making a box using A-frame but appeding on d3





