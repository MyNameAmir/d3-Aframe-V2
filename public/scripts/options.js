//configurable options object, for 
import { createEnum } from "./axis.js" 


export let Options = {
    data: {
        fileName: "/datafiles/GDP_Quarterly.csv",
        selectedFields: createEnum(["Country", "GDP", "Quarter"]),
        colourDecider: "Country",
        //height decider
        QuantitativeValue: "GDP",
        selectedAttribute: "year",
        selectedAttributeValue: ["2014"]
       //maybe it is the height decider
    },
    //maximum scaling number for the height


    //add the walls configurations here too
    wall:{
        //xaxis: this.data.selectedFields[0],

    },

    chart:{
        selectedKeys: [{axis: "x", field: "Quarter"}, {axis: "y", field: "GDP"}, {axis: "z", field: "Country"}]
    },

    bar: {
        maxScale: 200000,
        minScale: 0,
        depth: 2.5,
        width: 2.5,
        rotation: '0,0,0',//theres more
        colours: ["yellow", "red", "blue", "green"]
    }

}