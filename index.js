const returnFirstTwoDrivers = function (array) 
{
    return array.slice(0,2);
}

const returnLastTwoDrivers = function (array1)
{
    return array1.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int)
{
 return function (fare)
{
    return fare * int;
}
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers)
{
    return returnFirstTwoDrivers(drivers);
}