const bokingSeat = 0;
// const ticketPrice = 550;
let titleCount = 1;
let totalTicketPrice = 550;


const seats = document.querySelectorAll('.seat');
// console.log(seats)




for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(element)
    seat.addEventListener('click',function(event){
        seat.classList.add('bg-green-500')
        const seatNumber = seat.innerText;
        const selectedSeats = document.getElementById('selected-seats');

        // selected seat add a new div
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.innerText = seatNumber;
        div.appendChild(p);
        const p1 = document.createElement('p')
        p1.innerText = 'Economy';
        div.appendChild(p1);
        const p2 = document.createElement('p')
        p2.innerText = 550;
        div.appendChild(p2);
        selectedSeats.appendChild(div);
        div.classList.add('flex')
        div.classList.add('justify-between')

        //selected seat count 
        const seatCount = document.getElementById('seat-count');
        seatCount.innerText= titleCount
        titleCount++;
        // avilable seat carculate
        const totalSeat = document.getElementById('total-seat')
        totalSeat.innerText = 40  ;
        totalSeat.innerText = parseInt(totalSeat.innerText) - parseInt(seatCount.innerText);
        console.log(typeof seatCount.innerText)
        
    })
    

    
}