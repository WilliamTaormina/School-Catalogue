class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return his._level;
  }

  get numbeOfStudents() {
    return this._numbeOfStudents;
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${
        this._level
      } school level.`
    );
  }

  static pickSubstituteTeacher(subtituteTeachers) {
    this.subtituteTeachers = [];
    let randomIndex = Math.floor(Math.random() * subtituteTeachers.length);
    return console.log(this.pickSubstituteTeacher[randomIndex]);
  }
  // am I doing this right? (above)

  set numbeOfStudents(studentCount) {
    if (typeof studentCount === "number") {
      this.numbeOfStudents = studentCount;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
}

// creating a PrimarySchool Class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name, "Priamry", numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  /* I need help understanding how the above class is  working. The directions say:"
Call super on the first line of the PrimarySchool's constructor(). Pass it any arguments that the parent constructor() uses.

Since this is the PrimarySchool class, pass 'primary' as the argument for the level parameter in the parent constructor.

Pass name, 'primary', and numberOfStudents to the parent constructor().
"*/

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

// creating a HighSchool class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "High", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorriane Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();

console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli"
  ])
);
// this is coming back undefined...

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field"
]);

console.log(alSmith.sportsTeams);
