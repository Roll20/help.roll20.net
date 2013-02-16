---
layout: default
title: New Dice Rolling Reference
description: A detailed overview of all of the dice roll mechanics that Roll20 supports, including an interactive way to test them out right on the page.
published: true
---

Roll20 features support for a wide array of dice mechanics. On this page we've compiled a list of all of the different types of dice rolls you can perform. Each type also has an interactive example box where you can make actual rolls using the same roll system that's built in to Roll20 -- a great way to experiment and check to make sure we can support your role playing game system of choice. Don't see a dice mechanic your game system needs, or think something is done incorrectly? [Get in touch and let us know!](mailto:team@roll20.net)

## How to Roll Dice

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

<div class='diceroller'>/roll 1d20+5</div>


## Types Of Dice

Roll20 supports more than just your standard polyhedrons when rolling dice, below are the available die types you can use in your games.

### Basic Roll <code>NdX</code>
Rolls **N** traditional (almost, you can have any number of sides that you want) dice with **X** sides per die. **N** must be greater than or equal to 0 and **X** must be greater than or equal to 1.

### Fate/Fudge Roll <code>NdF</code>
Rolls **N** Fate/Fudge dice. These dice have three sides with values of -1, 0, and 1.
 
### Computed Dice Roll <code>(N+Y)dX</code>
**NOT WORKING YET**
Computes the number of dice to roll based on the mathematical expression in the parentheses. If the computed value is negative 0 will be used in its place. Dice coputation can be used with both Basic and Fate dice.


## Roll Modifiers

Modfiers that can change the behavior or outcome of dice rolls. Each modifier states which **Types Of Dice** it can be applied to:

* **B** - Basic Roll
* **F** - Fate/Fudge Roll

Many modifiers compare each die to a target number to decided if the modifier action should be applied. We'll call this a **Compare Point** or **CP** for short. A Compare Point consists of an optional compare operation <code>&lt;</code>,<code>=</code>,<code>&gt;</code> and a target number. If the operation is not specified <code>=</code> is assumed and for most modifiers the entire Compare Point can be left off for the default behavior.

* Example Compare Points
 * <code>3</code> - If the roll is equal to 3
 * <code>&gt;2</code> - If the roll is greater than or equal to 2
 * <code>&lt;18</code> - If the roll is less than or equal to 18

### Exploding Dice <code>!</code>

