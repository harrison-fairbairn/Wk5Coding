/* Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following reqs.
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

// PRACTICE AND PERFECT ON EACH STEP

class Player {
    constructor(name, role, skill) {   // Skill = Skill level from 1-10
    this.name = name;
    this.role = role;
    this.skill = skill;
    }

    describe() {
        return `${this.name} plays ${this.role} and has a skill level of ${skill}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name; 
        this.players = [];
    }
    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        }   else {
            throw new Error(`You can only add PLAYER TYPES! Input type is not a player!!: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length}.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeams = null;
    }

    start () {
        let selection = this.ShowMainMenuOption();
        while (selection != 0) {
            switch (selection) {
            case '1':
                this.createTeam();
                break; 
            case '2':
                this.viewTeam(); 
                break;
            case '3':
                this.deleteTeam();
                break;
            case '4':
                this.displayTeams();
                break;
            default:
                    selection = this.ShowMainMenuOption('Please Enter Valid Input');
        }  
        selection = this.ShowMainMenuOption();     
    }
    alert('Thanks for stopping by, See ya!'); 
}
ShowMainMenuOption(error) {
    return prompt(`
    0) Exit
    1) Make New Team
    2) View Your Team
    3) Delete A Team
    4) Display Teams
    ${error ? error : ''}   
    `)
}

showTeamMenuOptions(teamStats) {
    return prompt(`
    0) Go Back
    1) Create Player
    2) Delete Player
    -----------------
    ${teamStats}
    `);
}

displayTeams() {
    let anyNameHere = '';
    for (let i = 0; i < this.teams.length; i++) {
        anyNameHere += i + ') ' + this.teams[i].name + '\n';
    }
    alert(anyNameHere);
}

createTeam() {    
    let teamName = prompt('Please enter a name for your new team!');
    this.teams.push(new Team(teamName));
}
viewTeam() {
    let viewTeam = prompt('Which Team Would You Like to View? Remember: You must choose by the number, and not the name!');
    let selectedTeam = this.teams.filter(team => team.name === viewTeam)[0]
    if (selectedTeam) {
        let description = 'Team Name: ' + selectedTeam.name + '\n';
    if (selectedTeam.players.length > 0) {
        description = this.teams.reduce((accumulator, value) => {
            return accumulator + `Player Name: ${value.name} ${value.position} ${value.skill} \n`;
        }, description);}
    alert(description);
    }

    let selection = this.showTeamMenuOptions(description);
    switch (selection) {
        case '1':
            this.createPlayer();
            break;
        case '2':
            this.deletePlayer();
    }
  
}


deleteTeam() {
    let index = prompt('Enter The Team Number You Wish To Delete');
    if (index > -1 && index < this.teams.length) {
        this.teams.splice(index, 1);
    }
}

createPlayer() {
    let name = prompt('Enter the name of your new player!');
    let role = prompt('Enter position new player will play');
    let skill = prompt('Enter the players skill level from 1-10');
    this.selectedTeams.players.push(new Player(name, role, skill));
}

deletePlayer() {
    let index = prompt('Enter the number of the player you wish to delete!');
    if (index > -1 && index < this.selectedTeams.players.length) {
        this.selectedTeams.players.splice(index, 1);
    }
}

createPlayerMenu(teamStats) {
    let createdPlayer = prompt('Please input desired player name')
    prompt(`
    0) Back
    1) Create Player
    2) Delete Player 
    -----------------
    ${teamStats}
    `)
}

}

let menu = new Menu();
menu.start();
