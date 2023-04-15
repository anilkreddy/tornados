function init() {
    populateYearDropdown();
    buildThePlot();
}

function loadData() {
    return d3.csv("./assets/data/1950-2021_all_tornadoes.csv");
}

// Build/Rebuild the plot when the option (Test Subject ID No.) is changed
async function optionChanged() {
    var currentYear = d3.selectAll("#selDataset").node().value;

    var totalCount = await calculateTornadoCountPerYear(currentYear);
    var fatalitiesCount = await calculateFatalitiesPerYear(currentYear);
    var injuriesCount = await calculateInjuriesPerYear(currentYear);

    updateCounters(totalCount, fatalitiesCount, injuriesCount);

    buildThePlot();
}

async function updateCounters(totalCount, fatalitiesCount, injuriesCount) {
    d3.select("#totalTornados").text(totalCount);
    d3.select("#tornadoFatalities").text(fatalitiesCount);
    d3.select("#tornadoInjuries").text(injuriesCount);
}

// Run this during init and when an option is changed.
function buildThePlot() {}

function populateYearDropdown() {
    loadData().then(function (data) {
        let uniqueYears = new Set(data.map((year) => year.yr));
        // Sort years
        let sortedYears = Array.from(uniqueYears).sort();

        // Select the dropdown menu in the HTML by its ID
        let selectTab = d3.select("#selDataset");

        // Add "1950-2021" option at the beginning
        selectTab.append("option").text("1950-2021");
        // Append each year to the selectTab

        sortedYears.forEach((year) => {
            selectTab.append("option").text(year);
        });
    });
}

// Run the init
init();
console.log("Init");
