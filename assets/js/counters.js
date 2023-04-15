// Function to calculate the total count of tornadoes per year
async function calculateTornadoCountPerYear(selectedYear) {
    // Load the data from the CSV
    const data = await loadData();
    let tornadoCount = 0;
    // Iterate through each row in the data
    data.forEach((row) => {
        const year = row.yr;
        // Check if the current year matches the selected year or if all years are selected
        if (selectedYear === "1950-2021" || year === selectedYear) {
            tornadoCount++;
        }
    });
    return tornadoCount;
}

// Function to calculate fatalities per year
async function calculateFatalitiesPerYear(selectedYear) {
    // Load the data from the CSV
    const data = await loadData();
    let fatalities = 0;

    // Iterate through each row in the data
    data.forEach((row) => {
        const year = row.yr;
        const fat = parseInt(row.fat, 10);

        // Check if the current year matches the selected year or if all years are selected
        if (selectedYear === "1950-2021" || year === selectedYear) {
            // Add the current row's fatalities to the total fatalities
            fatalities += fat;
        }
    });

    return fatalities;
}

// Function to calculate injuries per year
async function calculateInjuriesPerYear(selectedYear) {
    // Load the data from the CSV
    const data = await loadData();
    let injuries = 0;

    // Iterate through each row in the data
    data.forEach((row) => {
        const year = row.yr;
        const inj = parseInt(row.inj, 10);

        // Check if the current year matches the selected year or if all years are selected
        if (selectedYear === "1950-2021" || year === selectedYear) {
            injuries += inj;
        }
    });

    return injuries;
}

(async function () {
    const totalCount = await calculateTornadoCountPerYear("1950-2021");
    const fatalitiesCount = await calculateFatalitiesPerYear("1950-2021");
    const injuriesCount = await calculateInjuriesPerYear("1950-2021");
    // Update the tornado count, fatalities, and injuries text in the HTML with the initial values
    updateCounters(totalCount, fatalitiesCount, injuriesCount);
})();
