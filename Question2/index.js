class Room {
    constructor(roomNumber) {
        this.roomNumber = roomNumber;
        this.name = null;
        this.checkInDate = null;
    }

    reserve(name, checkInDate) {
        if (this.name === null) { 
            this.name = name;
            this.checkInDate = checkInDate;
            return true;
        }
        return false;
    }

    cancel() {
        this.name = null;
        this.checkInDate = null;
    }

    toString() {
        return `Room ${this.roomNumber}: ${this.name ? 'Reserved by ' + this.name : 'Available'}`;
    }
}

class Hotel {
    constructor() {
        this.rooms = {};
    }

    addRoom(roomNumber) {
        if (!this.rooms[roomNumber]) {
            this.rooms[roomNumber] = new Room(roomNumber);
            console.log(`Room ${roomNumber} added.`);
        } else {
            console.log(`Room ${roomNumber} already exists.`);
        }
    }

    reserveRoom(roomNumber, name, checkInDate) {
        if (this.rooms[roomNumber]) {
            if (this.rooms[roomNumber].reserve(name, checkInDate)) {
                console.log(`Room ${roomNumber} reserved for ${name} on ${checkInDate}.`);
            } else {
                console.log(`Room ${roomNumber} is already reserved.`);
            }
        } else {
            console.log(`Room ${roomNumber} does not exist.`);
        }
    }

    cancelReservation(roomNumber) {
        if (this.rooms[roomNumber]) {
            this.rooms[roomNumber].cancel();
            console.log(`Reservation for Room ${roomNumber} has been canceled.`);
        } else {
            console.log(`Room ${roomNumber} does not exist.`);
        }
    }

    displayRooms() {
        for (const room of Object.values(this.rooms)) {
            console.log(room.toString());
        }
    }
}

// Example Usage
const hotel = new Hotel();

// Adding rooms
hotel.addRoom(101);
hotel.addRoom(102);
hotel.addRoom(103);

// Displaying rooms
hotel.displayRooms();

// Reserving rooms
hotel.reserveRoom(101, "John Doe", "2023-10-01");
hotel.reserveRoom(102, "Jane Smith", "2023-10-02");

// Trying to reserve an already reserved room
hotel.reserveRoom(101, "Alice Johnson", "2023-10-03");

// Displaying rooms after reservations
hotel.displayRooms();

// Canceling a reservation
hotel.cancelReservation(101);

// Displaying rooms after cancellation
hotel.displayRooms();




