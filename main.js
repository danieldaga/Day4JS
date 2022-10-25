let seriesPending =['Breaking bug', 'Games of drones', 'Boolean 99', 'Arrested Developer']
seriesPending.push('The Simpsons')
console.log(seriesPending);

for (let i = 0; i < seriesPending.length; i++) {
    console.log(i + ' ', seriesPending[i]);
    if (seriesPending['Boolean 99']) {
        console.log('Found it!');
    }
}

let seriesWatching = []

seriesPending.shift()
console.log('The length is: ', seriesPending.length);

// seriesPending.splice(0,1)
// console.warn(seriesPending);

for (let i = 0; i <= 4; i++) {
    seriesPending.splice(0,1)
    seriesWatching.push(seriesPending[0])
}
console.log('the lenght is : ', seriesWatching.length);

console.log(seriesWatching);
