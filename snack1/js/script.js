
const guestList = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

const seatMarker = guestList.map((guest, index) => 
{
    let guests = 
    { 
        'table': 'Tavolo VIP',
        'name': guest,
        'value': index + 1,
    }
        return guests;
});
                
for (let i = 0; i < seatMarker.length; i++)
{
    let assignedSeats = seatMarker[i];
    console.log(assignedSeats.table);
    console.log(assignedSeats.name);
    console.log(assignedSeats.value);
}