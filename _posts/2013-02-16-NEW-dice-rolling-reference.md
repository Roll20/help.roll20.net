---
layout: default
title: New Dice Rolling Reference
description: A detailed overview of all of the dice roll mechanics that Roll20 supports, including an interactive way to test them out right on the page.
published: false
---

Roll20 features support for a wide array of dice mechanics. On this page we've compiled a list of all of the different types of dice rolls you can perform. Each type also has an interactive example box where you can make actual rolls using the same roll system that's built in to Roll20 -- a great way to experiment and check to make sure we can support your role playing game system of choice. Don't see a dice mechanic your game system needs, or think something is done incorrectly? [Get in touch and let us know!](mailto:team@roll20.net)

## How to Roll Dice

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

<div class='diceroller'>/roll 1d20+5</div>


## Types Of Dice

Roll20 supports more than just your standard polyhedrons when rolling dice, below are the available die types you can use in your games.

### Basic Roll <code>NdX</code>
Rolls **N** traditional (almost, you can have any number of sides that you want) dice with **X** sides per die. **N** must be greater than or equal to 0 and **X** must be greater than or equal to 1.
 
### Computed Dice Roll <code>(N+Y)dX</code>

 * Allows for the number of dice to roll to be calculated using attributes/macros
 * @attr - a numeric attribute from a character sheet
 * Requires parentheses to enclose a valid (post macro/attr subsitution) mathematical expression
* Fate/Fudge Roll - **NdF**
 * Rolls a die with "three" sides: -1, 0, and 1
 * The **Compound N** syntax can be used for Fate/Fudge rolls