//TODO: process the data so that others can get to use it the best, figure out the extremes, know the scales
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";


//************/
//TODO: make an class to make dataretrieving and add the functions into it 
//************/

export class data{
    constructor (data){
        this.data = data;
    }

    static async extractRawCSVData(file) {
        //just encapsulated this into a class
        //make this into the class
        let x = await d3.csv(file, function (d) { return d });
        x = refine(x);
        return new data(x);
    }


    domains(data, value){
        let uniqueData = [];
    
        for(let i in data){
            uniqueData[i] = data[i][value];
        }
        return uniqueData;
    }

    refine(data){
        //trying to get to remove GDP here.
        for(let i of data){
            i.GDP = +i.GDP.replace(",", "") 
        }
        
       
        return data;
    }


    refineDataForCharting(data, selectedFields){
        let refinedData = [];
    
        class TargetClass {
            constructor(sourceObject, selectedFields) {
              // Create an empty object to store the selected properties
              const selectedObject = {};
          
              // Use the selected keys to copy the corresponding properties
              selectedFields.forEach(key => {
                if (sourceObject.hasOwnProperty(key)) {
                  selectedObject[key] = sourceObject[key];
                }
              });
          
              // Assign the selected properties to the new instance
              Object.assign(this, selectedObject);
            }
          }
           
          
          data.forEach(i => {
            refinedData.push(new TargetClass(i, selectedFields))
          })
    
          return refinedData;
    }
    
}


//data sourced from https://www.kaggle.com/datasets/aliasgherman/tsp-jan2022-gdp-per-quarter?resource=download
// export async function extractRawCSVData(file) {
//     //just encapsulated this into a class
//     class rawData{
//         constructor(data){
//             this.data = data;
//         }
//     }
//     //make this into the class
//     let x = await d3.csv(file, function (d) { return d });
//     x = refine(x);
//     return new rawData(x);
// }

//better name, this gets the countries, nothing unique
export function domains(data, value){
    let uniqueData = [];

    for(let i in data){
        uniqueData[i] = data[i][value];
    }
    return uniqueData;
}

//selection of particular attribute


//example function
export function refine(data){
    //trying to get to remove GDP here.
    for(let i of data){
        i.GDP = +i.GDP.replace(",", "") 
    }
    
   
    return data;
}

export function refineDataForCharting(data, selectedFields){
    let refinedData = [];

    class TargetClass {
        constructor(sourceObject, selectedFields) {
          // Create an empty object to store the selected properties
          const selectedObject = {};
      
          // Use the selected keys to copy the corresponding properties
          selectedFields.forEach(key => {
            if (sourceObject.hasOwnProperty(key)) {
              selectedObject[key] = sourceObject[key];
            }
          });
      
          // Assign the selected properties to the new instance
          Object.assign(this, selectedObject);
        }
      }
       
      
      data.forEach(i => {
        refinedData.push(new TargetClass(i, selectedFields))
      })

      return refinedData;
}


//TODO: give me some categories of data I am asking for, sets up a base for filterin, DONE

//TODO: more encapsulation of the data, extracting the raw data to be more encapsulated, done









// export function extract(array) {
//     let tempArray = [];
//     for (let i = 0, count = 1; i < array.length; i++) {
//         if (array[i].Country == "Finland") {
//             if (array[i].YearQuarter == `2014Q${count}`) {
//                 tempArray.push(["Finland", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
//                 count++;
//             }
//         }
//         else if (array[i].Country == "Sweden") {
//             if (array[i].YearQuarter == `2014Q${count}`) {
//                 tempArray.push(["Sweden", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
//                 count++;
//             }
//         }
//         else if (array[i].Country == "Norway") {
//             if (array[i].YearQuarter == `2014Q${count}`) {
//                 tempArray.push(["Norway", array[i].YearQuarter, array[i].GDP.replace(",", "")]);
//                 count++;
//             }
//         }
//         if (count == 5)
//             count = 1;
//     }
//     return tempArray;
// }
