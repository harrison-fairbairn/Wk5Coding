// class NotificationSender {
//     constructor(status) {
//         this.status = status   // (Equals status passed in [as argument])
//     }
// }


// class PromotionSender extends NotificationSender {
//     constructor(status) {
//         super(status);
//     }

//   sendNotification(notification) {
//       console.log('Sending: ' + notification);
//   }  

//   findUsersWithStatus(status) {
//       let users = getUsers(status);
//       return users;
//   }

//   calculateDiscount(status) {
//     if (status === 'GOLD') {
//         return .3;
//     }   else if (status === 'SILVER') {
//         return .15;
//     }
//     return 0;
//   }
// }


// class CollectionsSender extends NotificationSender {
//     constructor(status) {
//     }
// }
   
//     sendNotification(notification); {
//         console.log('Sending: ' + notification);
//     }

//     findUsersWithStatus(status); {
//         let users = getUsers(status);
//         return users;
//     }

//     calculateFee(status); {
//         if (status === 'OVERDUE') {
//            return 10;
//         }  else if (status === 'Delinquent') {
//             return 25;
//     }
//     return 5;
// }

/* REFERENCE
let players = [
    {name: "Joe", position: "short stop", skill: 500 },
    {name: "Bob", position: "short stop", skill: 500 },
  ]
  console.log(players.reduce((accumulator, value) => {
  return accumulator + `Player Name: ${value.name} ${value.position} ${value.skill} \n`;
  }, ''));
*/

class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];     // Each time we add a team it will have an array of the players
    }

    addPlayer(player) {                 // Method 
        if (player instanceof Player) {       // Instanceof operator insures only players/player types are added to array
            this.players.push(player);        
        }  else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {   // this METHOD will do the same thing as it does in our player class, but is written differently.
        return `${this.name} has ${this.players.length} players.`;    /////
    }
}

// Now let's go ahead and create another class, this class will be the MENU itself.
class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {    // this is basically going to start up the application - entry point to app
        let selection = this.ShowMainMenuOption();      // TOP DOWN APPROACH - Lay it out, FILL IT IN.
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':                                 // Here based on what they select, one of these things happen.
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                       selection = 0; 
            }
            selection = this.ShowMainMenuOption();
        } 
        alert('Goodbye!');          // This will CATCH if they enter ZERO - 0 - Which will alert in the page, Goodbye!
    }
    
    ShowMainMenuOption() {        // Method to show menu options - based on user input we will do the following things below
        return prompt(`
        0) Exit
        1) Create New Team
        2) View Team                     
        3) Delete Team
        4) Display All Teams
        `);
    }

    ShowTeamMenuOptions(teamInfo) {
        return prompt(`
            0) Back
            1) Create Player
            2) Delete Player 
            --------------------------
            ${teamInfo}
        `);
    }

    displayTeams() {
        let teamString = '';  // creates a blank string 
        for (let i = 0; i < this.teams.length; i++) {  // iterate through our TEAMS, grab each team
            teamString += i + ') ' + this.teams[i].name + '\n'; // get name for that team and add a new line
        }    
        alert(teamString);                                                   
    }

    createTeam() {
        let name = prompt('Enter name for new team:');
        this.teams.push(new Team(name));
    }
   
    viewTeam() {            
        let index = prompt('Enter the index of the team you wish to view:');
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];  
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name 
                    + ' - ' + this.selectedTeam.players[i].position + '\n';
            }
            
            let selection = this.showTeamMenuOptions(description); // Remember we haven't built this yet, TOP DOWN.
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();  // Top down is always good, but we want to test as we go to make sure it works
            }
        }
    }

    deleteTeam() {
        let index = prompt('Enter the index of the team you wish to delete:');
        if (index > -1 && index < this.teams.length) {
            this.teams.splice(index, 1);
        }
    }

    createPlayer() {
        let name = prompt('Enter name for new player:');
        let position = prompt('Enter position for new player:');
        this.selectedTeam.players.push(new Player(name, position));
    }

    deletePlayer() { 
        let index = prompt('Enter the index of the player you wish to delete:');
        if (index > -1 && index < this.selectedTeam.players.length) {
            this.selectedTeam.players.splice(index, 1);
        }
    }
}                                                       
 
let menu = new Menu();
menu.start(); 












