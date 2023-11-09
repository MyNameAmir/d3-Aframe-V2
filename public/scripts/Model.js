import { RawData } from "./RawData.js";


export class Model{

    #rawData;
    #filteredData;


    constructor(options){
        this.#rawData = new RawData(options.fileName, options.selectedFields);
        this.#filteredData = new Array();
    }

    numberOfValues(onAxis){
        return onAxis;
    }

    getValuesOnAxis(onAxis, unique = false){
        return onAxis;
    }

    getExtremes(onAxis){

    }

    getHeight(onFirstAxis, onSecondAxis){

    }

    getInfo(){
        
    }

    filterUsing(){}


}