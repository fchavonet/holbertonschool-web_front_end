class studentHogwarts {
  constructor() {
    let privateScore = 0;
    let name = null;

    const changeScoreBy = (points) => {
      privateScore += points;
    };

    return {
      setName(newName) {
        name = newName;
      },

      rewardStudent() {
        changeScoreBy(1);
      },

      penalizeStudent() {
        changeScoreBy(-1);
      },

      getScore() {
        return (name + ": " + privateScore);
      },
    };
  }
}

let harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
