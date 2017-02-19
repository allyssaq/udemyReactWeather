/*function getTempCallback(location, callback) {
    callback(undefined, 79)
    callback('City not found')
}

getTempCallback('Philadelphia', function(err, temp) {
    if (err) {
        console.log('error', err)
    } else {
        console.log('success', temp)
    }
})

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79)
            reject('City not found')
        }, 1000)
    })
}

getTempPromise('Philadelphia').then(function(temp) {
    console.log('promise success', temp)
}, function(err) {
    console.log('promise error', err)
})

http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=efdf8778f9bf5607c25b1be70bbce753&unit=imperial
*/

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b)
    } else {
      reject('A & B need to be numbers')
    }
  })
}


addPromise(2, 3).then( function (sum) {
  console.log('success', sum)
}, function (err) {
  console.log('error', err)
})


addPromise('ally', 9).then(function (sum) {
  console.log('This should not show up')
}, function (err) {
  console.log('this should appear', err)
})
