async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  // console.dir(json)

  // 🔥 start here: write code to loop through the rides

  let rides = json
  console.log(rides)
  for (let i = 0; i < rides.length; i++) {
    ride = rides[i]
    console.log(ride)

    let levelOfService
    if (ride.length > 1) {
      levelOfService = 'Noober Pool'
    } else if (ride[0].purpleRequested == true) {
      levelOfService = 'Noober Purple'
    } else if (ride[0].numberOfPassengers > 3) {
      levelOfService = 'Noober XL'
    } else {
      levelOfService = 'Noober X'
    }

    let borderclass 
    if (ride[0].purpleRequested == true) {
      borderclass = 'border-purple-500'
    } else {
      borderclass = 'border-gray-900'
    }

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>`)
    for (let z = 0; z < ride.length; z++) {
      leg = ride[z]
      console.log(leg)

    document.querySelector('.rides').insertAdjacentHTML('beforeend', `<div class="border-4 ${borderclass} p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${leg.passengerDetails.first} ${leg.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${leg.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${leg.numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${leg.pickupLocation.address}</p>
          <p>${leg.pickupLocation.city}, ${leg.pickupLocation.state} ${leg.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${leg.dropoffLocation.address}</p>
          <p>${leg.dropoffLocation.city}, ${leg.dropoffLocation.state} ${leg.dropoffLocation.zip}</p>
        </div>
      </div>
    </div> `)
    }

  }



}

window.addEventListener('DOMContentLoaded', pageLoaded)

