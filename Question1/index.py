def add_reservation(room_number,guest_name,check_in_date):
    reservations={}
    reservation_room=[20,30,21]
    for room in reservation_room:
        if(room == room_number):
            print(f"Room number {room_number}, on {check_in_date}, has a guest named {guest_name}: Booked")
            break
        else:
            print(f"{room_number}: available, you can book it")
            room-=1


# 3
class Game_session:
    def __init__(self,name):
        self.name=name
        self.matched=[]
        self.rule=[]
        self.up_dates=" "

    def players(self,players):
        self.matched.append(players)
        return f"{self.matched}"    

    def player_matching(self):
        matches=[]
        for i in range(len(self.matched)):
            for m in range(i + 1, len(self.matched)):
                if self.matched[i] == self.matched[m] and self.matched[i] not in matches:
                    matches.append(self.matched[i])
                    return f"{matches}"

    def team_rules(self,rules):
        self.rule.append(rules)
        return f"{self.rule}"

    def massage(self,updates):
        self.up_dates=updates
        return f"Hello {self.name} here are the updates for the week: {self.up_dates}"   

    def fair_game(self,rounds):
        rounds -= 1
        if rounds >= 5:
            return f"ur rounds are over"
        else:
            return f"u are remaining with {rounds}"        

    def uncoparated(self,status):
         for i in range(len(self.rule)):
            for n in range(i + 1,len(self.rule)):
                if status == self.rule[n]:
                    return f"Command accepted"
                    status !=self.rule[n]
                else:
                    return f"player disqualified"


            

    