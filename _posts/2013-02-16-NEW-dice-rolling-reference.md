---
layout: default
title: New Dice Rolling Reference
description: A detailed overview of all of the dice roll mechanics that Roll20 supports, including an interactive way to test them out right on the page.
published: true
---

Roll20 features support for a wide array of dice mechanics. On this page we've compiled a list of all of the different types of dice rolls you can perform. Each type also has an interactive example box where you can make actual rolls using the same roll system that's built in to Roll20 -- a great way to experiment and check to make sure we can support your role playing game system of choice. Don't see a dice mechanic your game system needs, or think something is done incorrectly? [Get in touch and let us know!](mailto:team@roll20.net)

## How to Roll Dice

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

**THE ROLLER IS USING THE OLD DICE SYNTAX! IGNORE UNTIL ON PROD**
<div class='diceroller'>/roll 1d20+5</div>


## Types Of Dice

Roll20 supports more than just your standard polyhedrons when rolling dice, below are the available die types you can use in your games.

### Basic Roll <code>NdX</code>
Rolls **N** traditional (almost, you can have any number of sides that you want) dice with **X** sides per die. **N** must be greater than or equal to 0 and **X** must be greater than or equal to 1.

### Fate/Fudge Roll <code>NdF</code>
Rolls **N** Fate/Fudge dice. These dice have three sides with values of -1, 0, and 1.
 
### Computed Dice Roll <code>(N+Y)dX</code>/<code>Nd(X+Y)</code>
Computes the number of dice to roll or the number of sides on the dice based on the mathematical expression in the parentheses. Dice coputation can be used with both Basic and Fate dice.


## Roll Modifiers

Modfiers that can change the behavior or outcome of dice rolls. Each modifier states which **Types Of Dice** it can be applied to in parentheses after the modifier name. Rolls can have multiple modifiers applied to a single roll to allow for complex dice expressions.

* **B** - Basic Roll
* **F** - Fate/Fudge Roll

Many modifiers compare each die to a target number to decided if the modifier action should be applied. We'll call this a **Compare Point** or **CP** for short in the roll modifiers below. A Compare Point consists of an optional compare operation <code>&lt;</code>,<code>=</code>,<code>&gt;</code> and a target number. If the operation is not specified <code>=</code> is assumed and for most modifiers the entire Compare Point can be left off for the default behavior.

* Example Compare Points
 * <code>3</code> - If the roll is equal to 3
 * <code>&gt;2</code> - If the roll is greater than or equal to 2
 * <code>&lt;18</code> - If the roll is less than or equal to 18
 
 
### Target Number / Successes (B,F) - <code>CP</code>
Normally when you perform a roll, Roll20 reports back the total value of all the dice rolled, plus any modifiers. Some game systems, though, work by rolling a set of dice versus a target number, and then adding up the total number of successes instead.

* Example Success Checks
 * <code>3d6&gt;3</code> - Roll 3 d6's and count one success for each roll of 3 or higher
 * <code>10d6&lt;4</code> - Roll 10 d6's and count one success for each roll of 4 or less


### Failures (B,F) - <code>fCP</code>
Some systems build on success checks by also including failures. Failure checks only work when a success check is already being done and each failure subtracts one from the total number of successes.

* Example Failure Checks
 * <code>3d6&gt;3f1</code> - Roll 3 d6's and count one success for each roll of 3 or higher and one failure for each 1
 * <code>10d6&lt;4f&gt;5</code> - Roll 10 d6's and count one success for each roll of 4 or less and one failure for each roll of 5 or more
 

### Exploding Dice (B,F) <code>!CP</code>
Exploding dice, also known as "rule of 6" or "rule of 10s" depending on your gaming system, rolls an additional die if the maximum is rolled. If the additional roll is also the maximum number the additional rolls keep on going! The Compare Point can be specified to change the exploding trigger.

* Example Exploding Dice
 * <code>3d6!</code> - Rolls 3d6 and explodes every time a 6 is rolled
 * <code>3d6!&gt;5</code> - Rolls 3d6 and explodes every time a 5 or 6 is rolled


### Compounding Dice (B,F) <code>!!CP</code>
Shadowrun (and some other systems) use a special style of exploding dice where the the additional rolls for each dice are added together as a single "roll". To do this, just use two exclamation marks instead of one. With the compounding exploding rolls a single roll can be infinitely high! The Compare Point can be specified to change the exploding trigger.

* Example Compounding Dice
 * <code>5d6!!</code> - Rolls 5d6 and compound every time a 6 is rolled
 * <code>5d6!!5</code> - Rolls 5d6 and compound every time a 5 is rolled, 6's will be treated as a normal roll


### Penetrating Dice (B,F) <code>!pCP</code>
HackMaster (and some other systems) use a special style of exploding dice where the the additional rolls for each dice have 1 subtracted from the roll. To do this, add a p after the exclamation mark. A die can penetrate multiple times but the modifier is only ever -1 to each additional die.

* Example Compounding Dice
 * <code>5d6!p</code> - Rolls 5d6 and explode with a -1 modifier every time a 6 is rolled
 * <code>5d6!p&gt;5</code> - Rolls 5d6 and explode with a -1 modifier every time a 5 or higher is rolled.


### Keep / Drop Dice (B,F) <code>khN</code>/<code>klN</code>/<code>dhN</code>/<code>dlN</code>
Some game systems ask you to roll a large number of dice, and then either drop a certain number (**N**) of the lowest rolls, or keep only a certain number (**N**) of the highest rolls. Roll20 supports this type of roll through the <code>d</code> and <code>k</code> commands, respectively. The optional <code>h</code>/<code>l</code> parameter can either be <code>h</code> to keep or drop the highest **N** dice or <code>l</code> to keep or drop the lowest **N** dice. If not specified when keeping rolls the high rolls will be kept and when dropping rolls the low rolls will be dropped.

* Example Keep Rolls
 * <code>8d100k4</code> - Roll 8 d100's and keep the four largest rolls.
 * <code>8d100kl4</code> - Roll 8 d100's and keep the four smallest rolls.
* Example Drop Rolls
 * <code>8d100d4</code> - Roll 8 d100's and drop the four smallest rolls.
 * <code>8d100dh4</code> - Roll 8 d100's and drop the four largest rolls.

### Rerolling Dice (B,F) <code>rCP</code>
Several systems require that certain dice be reroll, for example brutal weapons in D&D 4e require any 1s or 2s to be re-rolled and the orignal die value ignored. The reroll modifier can be specified multiple times to allow rerolling at multiple Compare Points

* Example Rerolls
 * <code>2d10r&lt;2</code> - Roll 2 d10's and reroll any time a 2 or lower is rolled
 * <code>8d6r</code> - Roll 8 d6's and reroll any time a 1 is rolled
 * <code>8d6r2r4r6</code> - Roll 8 d6's and reroll any time a 2, 4, or 6 is rolled
 

### Sorting Dice (B,F) <code>sa</code>/<code>sd</code>
You may want to see your results in either ascending or descending order. The sorting modifier does just this. The order parameter is optional and specifies the order to sort with <code>a</code> for ascending and <code>d</code> for descending. Sorting defaults to ascending if order is not specified. 

* Example Rerolls
 * <code>8d6s</code> - Roll 8 d6's and sort the results in ascending order
 * <code>8d6sd</code> - Roll 8 d6's and sort the results in descending order


## Grouped Rolls
Mutliple rolls can be perfomed within a group via curly braces using a comma to seperate the sub-roll expressions <code>{3d6+3d4+5, 2d8+4}</code>. Grouped Rolls have their own set of Group Modifiers which perform actions across the whole group.


## Grouped Roll Modifiers

Modfiers that can change the behavior or outcome of grouped rolls. Grouped Rolls can have multiple modifiers applied to a group roll to allow for complex dice expressions.

### Keep / Drop <code>khN</code>/<code>klN</code>/<code>dhN</code>/<code>dlN</code>
The same concept as when used on Dice Rolls but with different behavior for a group.
For a Grouped Roll with a single sub-roll expression the keep/drop is applied across all rolls in the expresion. For a Grouped Roll with more than one sub-roll expression the keep/drop is applied to the result of each sub-roll expression and entire sub-rolls are kept or dropped.

* Single Sub-Roll Keep Example
 * <code>{4d6+3d8}k4</code> - Roll 4 d6's and 3 d8's, out of those 7 dice the highest 4 are kept and summed up.
* Multiple Sub-Roll Drop Example
 * <code>{4d6+2d8, 3d20+3, 5d10+1}d1</code> - Roll each of the three sub-roll expressions and total them up. Drop the sub-roll expression with the lowest total and sum the other two totals as the result.
 
### Target Number / Successes (B,F) - <code>CP</code>
The same concept as when using on Dice Rolls but with different behavor for a group. For a Grouped Roll with a single sub-roll expression the success check is done after the remaining math expressions have been totaled into each roll. Single sub-roll groups are also useful when doing a success check on a roll that has another Compare Point enabled modifer. For a Grouped Roll with a multiple sub-roll expression the success check is applied to the esult of each sub-roll expression.

* Single Sub-Roll Success Example
 * <code>{3d20+5}&gt;21</code> - Roll 3 d20's, for each roll add 5 and then count a success for each result of 21 or more.
 * <code>{2d6!}&gt;4</code> - Roll 2d6 exploding and count a success for each roll of 4 or greater.
* Multiple Sub-Roll Success Example
 * <code>{4d6+2d8, 3d20+3, 5d10+1}&gt;40</code> - Roll each of the three sub-roll expression and total them up. Count one success for each sub-roll total of 40 or more. 

### Failures (B,F) - <code>fCP</code>
Failure checks on groups work just like success checks.

* Single Sub-Roll Failure Example
 * <code>{3d20+5}&gt;21f&lt;10</code> - Roll 3 d20's, for each roll add 5 and then count a success for each result of 21 or more and count a failure for each result of 10 or less.
 * <code>{2d6!}&gt;4f1</code> - Roll 2d6 exploding and count a success for each roll of 4 or greater and a failure for each roll of 1.
* Multiple Sub-Roll Failure Example
 * <code>{4d6+2d8, 3d20+3, 5d10+1}&gt;40f&lt;10</code> - Roll each of the three sub-roll expression and total them up. Count one success for each sub-roll total of 40 or more and one failure for each sub-roll total of 10 or less.
 

### Multiple Rolls <code>xN</code>
**NOT WORKING YET**
Executes the sub-rolls in the group **N** times, displaying each result seperately.

* Multiple Rolls Example
 * {1d20 + 2}x5 - Rolls 1 d20 and adds 2, then repeats this 4 more times. 5 seperate results will be displayed.
 
 