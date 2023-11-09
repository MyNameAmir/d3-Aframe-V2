export class RawData{
    constructor(file, selectedFields){
        this.data;
        this.extractRawCSVData(file);
    }


    async extractRawCSVData(file) {
        //just encapsulated this into a class
        //make this into the class
        let x = await d3.csv(file, function (d) { return d });
        x = refine(x);
        this.data = x;
    }


    static refineDataForCharting(data, selectedFields){
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





    ///added these to make it work this way

    domains(data, value){
        let uniqueData = [];
    
        for(let i in data){
            uniqueData[i] = data[i][value];
        }
        return uniqueData;
    }

}