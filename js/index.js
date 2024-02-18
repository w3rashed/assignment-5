
// const buyTicket = document.getElementById('buy-ticket')
// buyTicket.setAttribute('onclick', 'move();');
// function move(){
//     document.getElementById('bus-info')
// }
const seats = document.querySelectorAll('.seat');
// console.log(seats)

for (let index = 0; index < seats.length; index++) {
    const seat = seats[index];
    // console.log(element)
    seat.addEventListener('click',function(){
        const seatNumber = seat.innerText;
        console.log(seatNumber)
    })
    
}