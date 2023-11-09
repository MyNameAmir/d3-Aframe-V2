import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import { Location } from "./location.js"
import { Options } from "./options.js"
import {theDomains} from "./main.js"

export class Bar {


    //i am hoping to make the GDP and the Country part be replacable
    constructor(data) {
        this.data = data;
        //TODO: move the line below to process in the data retrieving, data processing is there, move this there, DONE
        this.height = this.getHeight(data[Object.keys(data)[Object.keys(data).indexOf(Options.data.QuantitativeValue)]]);
        this.color = this.getColor(data[Object.keys(data)[Object.keys(data).indexOf(Options.bar.colourDecider)]]);
        this.location = new Location(0, this.height, 0);
    }

    //TODO: options class for the colours and the countries (do that in the processing of data)
    getColor = d3.scaleOrdinal(Options.bar.colours).domain(theDomains);

    //all 4 of these numbers are in the configurations object
    getHeight = d3.scaleLinear([Options.bar.minScale, Options.bar.maxScale], [0, 100]);

    setLocation(x, z) {
        this.location.x = x;
        this.location.z = z;
    }



}