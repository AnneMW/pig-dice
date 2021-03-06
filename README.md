# Pig Dice Game
The program is a game that allows two users to play against each other by 'tossing' a dice. The first player to score 100 points wins the game.
## Description
Players throw a dice and scores as many points as the total shown on the dice providing the dice doesn’t roll a 1. The player may continue rolling and accumulating points (but risk rolling a 1) or hold end his turn and store his score. If the player rolls a 1 his turn is over, he loses all points he accumulated that turn, and he passes the dice to the next player. Play passes from player to player until a winner is determined. The first player to score 100 wins the game.
## Author
- [Anne M](https://github.com/AnneMW).
## BDD

| Behaviour |  Input |  Output |
------------|---------|---------|
| A player rolls the dice to generate a number between 1 and 6 | roll dice | A number between 1 and 6 |
| A player holds his score to be stored in the total score | hold | correct |
| When the number 1 is generated, the games has to switch players | roll(1) |switch players |
| The first player to score 100 is the winner| 100 | Winner |
## Installation
Web browser.
Internet.
## Set-up Instructions
- To clone the project, use the following link: https://github.com/AnneMW/pig-dice
- To view the live site, use the following link: https://annemw.github.io/pig-dice/
## Usage
The program is a game that allows two users to play against each other by 'tossing' a dice.
## Bugs
None so far.
## Technology Used
- HTML
- CSS
- JAVASCRIPT
## Contributing
Pull requests are welcome.
## Support
- Name: Anne M
- Contact: annesnowwoods@gmail.com
## Project Status
- Still a work-in-progress.
- Hope to improve most features soon enough.
## License
- [MIT](https://github.com/AnneMW/pig-dice/blob/master/LICENSE.txt)
