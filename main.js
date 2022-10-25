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
console.log('The length is seres Pending: ', seriesPending.length);

// seriesPending.splice(0,1)
// console.warn(seriesPending);

for (let i = 0; i < 4; i++) {
    let watching = seriesPending.splice(0,1)
    seriesWatching.push(watching[0])
}
console.log('the lenght is series Watching: ', seriesWatching.length);
console.log(seriesWatching);

for (let i = 0; i < 4; i++) {
    seriesWatching.splice(0,1)
}

console.log('the lenght is series Watching: ', seriesWatching.length);
