import dayjs from "dayjs"

export function calculateBiorhytms(birthDate, targetDate) {
    return {
        physical: calculateP(birthDate, targetDate),
        emotional: calculateE(birthDate, targetDate),
        intellectual: calculateI(birthDate, targetDate),
    }
}

export function calculateBiorhytmsSeries(birthDate, centralDate, range) {

    const series = [];

    const centralDay = dayjs(centralDate);

    for (let diff = -range; diff <= range; diff++) {

        const targetDay = centralDay.add(diff, 'day');
        const bioRhytms = calculateBiorhytms(birthDate, targetDay);
        series.push({date: targetDay.format('D MMM'), ...bioRhytms});

    }

    return series;

} 

function calculateP(birthDate, targetDate) {
    return calculate(birthDate, targetDate, 23);
}

function calculateE(birthDate, targetDate) {
    return calculate(birthDate, targetDate, 28);
}

function calculateI(birthDate, targetDate) {
    return calculate(birthDate, targetDate, 33);
}

function roundDecimal(nombre, precision){
        var precision = precision || 2;
        var tmp = Math.pow(10, precision);
        return Math.round( nombre*tmp )/tmp;
}

function calculate(birthDate, targetDate, numberCycleOfDay) {

    const birthday = dayjs(birthDate);
    const targetday = dayjs(targetDate);
    const diff = targetday.diff(birthday, 'day');

    const value = Math.sin(2 * Math.PI * diff / numberCycleOfDay);

    const roundedValue = roundDecimal(value, 4);

    return roundedValue;
}