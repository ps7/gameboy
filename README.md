# _Pokemon Arena_

#### _Pokemon game, 5/10/2017_

#### By _**Daniel Lopez, Michael Koceja, Brendan Hanna, Jordan Mysliwiec**_

## Description

Turn based game where each player has a pokemon and attacks the opposing pokemon. Each player has a regular attack and a special attack. Special attack has a higher probability of missing but does increased damage. Each player has 3 healing potions that restore 20 health points. Game ends when one pokemon has 0 health.

## Setup/Installation Requirements

* _Click on gh-pages link_
 _OR_
* _Clone repository_
* _Open "pokemon-game" folder_
* _Open "index.html"_

## gh-pages link
[Click here](https://dlopez6877.github.io/pokemon-game)

## Specs
| Behavior: this program | Inputs Example: when it receives | Output: it should return|
|------------------|:-------------:|------:|
|Eiether pokemon's attack 1 inflicts damage based on random number between 8-11|pokemon 1 uses attack 1|pokemon 2 sustains damage from 8-11|
|Pokemon 1's attack 2 inflicts damage based on random number between 15-19|pokemon1 uses attack 1|pokemon 2 sustains damage from 15-19|
|Pokemon 2's attack 2 inflicts damage based on random number between 20-30|pokemon 2 uses attack 2|pokemon 1 sustains damage from 20-30|
|For either pokemon, attack 1 has a 10% of missing|pokemon 1 uses attack 1| 1 out of 10 times, pokemon 2 sustains 0 damage|
|For either attack on either pokemon, there is a 10% of getting a critical hit, which adds 8 to that attack|pokemon2 uses attack 2, gets base damage of 25|33 damage is inflicted on pokemon 1|
|Pokemon 1's attack 2 has a 30% chance of missing|pokemon 1 uses attack 2| 3 out of 10 times, pokemon 2 sustains 0 damage|
|Pokemon 2's attack 2 has a 50% chance of missing|pokemon 2 uses attack 2| 5 out of 10 times, pokemon 1 sustains 0 damage|
|Each pokemon has 3 potions to use which restore their health by 20 points (unless they have 80 or greater health, in which case it restores it to 100)|Pokemon 1 click heal button|Pokemon 1 health increase 20|
|After a player takes a turn their buttons become disabled and opponents are enabled|player one attacks| playaer 2's turn|
|If either pokemon has no health after it's attacked, pokemon 1 wins|pokemon 2 health = 0|pokemon 1 wins|

## Known Bugs

None

## Support and contact details

_E-mail dlopez6877@gmail.com, michael.koceja@gmail.com, gepetto503@gmail.com, jdmysliwiec@gmail.com_

## Technologies Used

_CSS, Jquery, JavaScript, Bootstrap, Atom, GitBash_

### License

*MIT*

Copyright (c) 2017 **_Daniel Lopez, Michael Koceja, Brendan Hanna, Jordan Mysliwiec_**
