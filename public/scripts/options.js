//configurable options object, for 
import { Axis } from "./axis.js" 


export let Options = {
    data: {
        fileName: "/datafiles/GDP_Quarterly.csv",
        selectedFields: ["Country", "GDP", "Quarter", "year"],
        
        //height decider
        QuantitativeValue: "GDP",
        selectedAttribute: "year",
        selectedAttributeValue: ["2014"],
       //maybe it is the height decider
             //********TODO */
        //investigate this

        //selectedKeys[0].axis
        AxisToFieldConnector: [{axis: Axis.X, field: "Quarter"}, {axis: Axis.Y, field: "GDP"}, {axis: Axis.Z, field: "Country"}]
        //selectedKeys: {Axis.X: "Quarter", Axis.Y: "GDP", Axis.Z: "Country"}
        //to use the following you would say selectedKeys.Axis.X -> "Quarter"
    },
    //maximum scaling number for the height


    //add the walls configurations here too
    wall:{
        //xaxis: this.data.selectedFields[0],

    },

    chart:{
  
    },
    
    
    bar: {
        colourDecider: "Country",
        maxScale: 200000,
        minScale: 0,
        depth: 2.5,
        width: 2.5,
        rotation: '0,0,0',//theres more
        colours: ["yellow", "red", "blue", "green"]
    }

}