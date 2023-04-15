function buildLine(data, year) {    
    if (year) {
        filteredData = data.filter(function (yearData) {
            return yearData.yr == year;
        });


        console.log(filteredData);        

        let traceData = {
            x: [10,20,30,30],
            y: ["Jan", "Feb"],
            text: "try",
            type: "line"
        }       

        let layout = {
            title: "Yearly "
            
        }
        Plotly.newPlot("line", traceData, layout);
    }
}