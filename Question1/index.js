






let reservations = {};

function addReservation(roomNumber, guestName, checkinDate) {
    reservations[roomNumber] = { guest: guestName, checkinDate: checkinDate };
}

function getReservation(roomNumber) {
    return reservations[roomNumber] 
}

addReservation(23, "Ala", "2025-05-14");
console.log(getReservation(101)); 
console.log(reservations)




function reservation(roomNumber,guestDetails){
    const bookRoom=new Map()
    const reservedRooms=[20,30,40,12];
    for(room in reservedRooms){
    
        if(room!=roomNumber){
            bookRoom[`${roomNumber}`]= `${guestDetails}`;
       
        }
        else{
            console.log("The room is taken")
        }
    }
    return bookRoom
}

reservation(23,[{name:"Alia",checkInDetails:"02-03-05"}])


