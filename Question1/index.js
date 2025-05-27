






let reservations = {};
function addReservation(roomNumber, guestName, checkinDate) {
    let reserved=[10,20,40]
    for(room in reserved){
        if(room!=roomNumber){
    reservations[roomNumber] = { guest: guestName, checkinDate: checkinDate };
    }
    else{
        console.log("The room is taken")
    }
}
}

function getReservation(roomNumber) {
    return reservations[roomNumber]
}

addReservation(21, "Ala", "2025-05-14");













// class Room {
//     constructor(roomNumber) {
//         this.roomNumber = roomNumber;
//         this.name = null;
//         this.checkInDate = null;
//     }

//     reserve(name, checkInDate) {
//         if (this.name === null) { 
//             this.name = name;
//             this.checkInDate = checkInDate;
//             return true;
//         }
//         return false;
//     }

//     toString() {
//         return `Room ${this.roomNumber}: ${this.name ? 'Reserved by ' + this.name : 'Available'}`;
//     }
// }
// class Hotel {
//     constructor() {
//         this.rooms = {};
//     }

//     addRoom(roomNumber) {
//         if (!this.rooms[roomNumber]) {
//             this.rooms[roomNumber] = new Room(roomNumber);
//             console.log(`Room ${roomNumber} added.`);
//         } else {
//             console.log(`Room ${roomNumber} already exists.`);
//         }
//     }

//     reserveRoom(roomNumber, name, checkInDate) {
//         if (this.rooms[roomNumber]) {
//             if (this.rooms[roomNumber].reserve(name, checkInDate)) {
//                 console.log(`Room ${roomNumber} reserved for ${name} on ${checkInDate}.`);
//             } else {
//                 console.log(`Room ${roomNumber} is already reserved.`);
//             }
//         } else {
//             console.log(`Room ${roomNumber} does not exist.`);
//         }
//     }
// }













function reservation(roomNumber,guestDetails){
    
    const reservedRooms=[20,30,40,12];
    for(room in reservedRooms){
      
        if(room!=roomNumber){
            const bookRoom={}
             bookRoom[roomNumber]= guestDetails;
        return bookRoom
       
        }
        else{
            console.log("The room is taken")
        }
       
    }
}
const reserve=reservation(20,[{name:"Alia",checkInDetails:"02-03-05"}])
console.log(reserve) 
// const roomNumber=23
// const guestDetails=[{name:"Alia",checkInDetails:"02-03-05"}]
// reservation()


