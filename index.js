/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById('convert-btn')
let input = document.getElementById('input')
const meters = document.getElementById('meters-text')
const volume = document.getElementById('volume-text')
const mass = document.getElementById('mass-text')


convertBtn.addEventListener('click', function() {
    let baseValue = input.value
    const meterToFeet = baseValue * 3.281
    const feetToMeter = baseValue / 3.281
    
    meters.textContent = `${baseValue} meters = ${meterToFeet.toFixed(3)} feet | ${baseValue} feet = ${feetToMeter.toFixed(3)} meters`;
    
    const literToGallon = baseValue * 0.264
    const gallonToLiter = baseValue / 0.264
    
    volume.textContent = `${baseValue} liters = ${literToGallon.toFixed(3)} gallons | ${baseValue} gallons = ${gallonToLiter.toFixed(3)} liters`;
    
    const kiloToPound = baseValue * 2.204
    const poundToKilo = baseValue / 2.204
    
    mass.textContent = `${baseValue} kilos = ${kiloToPound.toFixed(3)} pounds | ${baseValue} pounds = ${poundToKilo.toFixed(3)} kilos`;
})