---
layout: default
title: Dice Rolling Reference
categories: advanced popular dice
description: A detailed overview of all of the dice roll mechanics that Roll20 supports, including an interactive way to test them out right on the page.
published: true
---

Roll20 features support for a wide array of dice mechanics. On this page we've compiled a list of all of the different types of dice rolls you can perform. Each type also has an interactive example box where you can make actual rolls using the same roll system that's built in to Roll20 -- a great way to experiment and check to make sure we can support your role playing game system of choice. Don't see a dice mechanic your game system needs, or think something is done incorrectly? [Get in touch and let us know!](mailto:team@roll20.net)

<div class="alert">Want to skip straight to the 'nitty-gritty'? Check out the <a href="#specs">Dice Specification</a> for the really advanced stuff!</div>

## How to Roll Dice

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. Notice that you need to put the 1 in front of the d20 even if you're only rolling one dice. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

<div class='diceroller'>/roll 1d20+5</div>

After the roll is performed, you'll see the results of the roll in the text chat area. Notice that for each group of dice that were rolled, there will be a group of numbers in parentheses, representing the result of each individual dice that was rolled. You'll also see the total of all the dice values plus modifiers to the right of the equals sign.

## Rolling in Secret

By default, any rolls that you make are seen by everyone in the game with you (including all players). If you want to roll in secret, you can use the <code>/gmroll</code> command to perform a roll that only the GM and the original player who made the roll can see. So if you're the GM, doing a <code>/gmroll</code> will only be visible to you. It's a great way to perform skill checks in secret.

## Including Additional Information

You can also include non-formula text in your roll to indicate what that roll is for. For example, when rolling for initiative you might enter <code>/roll 1d20+5 Roll for Initiative</code>. The extra text won't affect your roll in any way, but it's included in the chat log so that others can see what you're rolling for. It's entirely optional to do this, by the way, but some GMs find it helps keep everything organized a little better.

<div class="diceroller">/roll 1d20+5 Roll for Initiative</div>

If you want to include any numbers, parentheses, or <code>+</code>, <code>-</code>, <code>*</code>, or <code>/</code> in your additional text, you can preface it with a <code>\\</code> to separate the formula from the text and keep the roller from getting confused. So for example you can do <code>/roll 1d20+5 \\ +5 Roll for Initiative</code>. 

If you want to include additional comments before the end of the roll (we call them "inline labels"), use square brackets. For example, <code>/roll 2d20+5[Fire Damage] + 3d6+5[Ice Damage]</code>. When these comments are applied directly after a die roll they show up as tool-tips on the dice: 

<div class="diceroller">/roll 2d10+2d6[crit]+5 Critical Hit!</div>

## Exploding Dice

Roll20 supports exploding dice -- you may also know it as "rule of 6" or "rule of 10s" depending on your game system. With exploding dice, if you roll the maximum number on the dice (a 6 with a d6, a 10 with a d10, etc.) you get to re-roll again and add the additional roll to your total for that roll. If the additional roll is also a maximum number, you get to keep rolling! 

To perform a roll with exploding dice, just add an exclamation point after the number of sides in the formula. For example, <code>/roll 3d6!</code> would roll 3 d6 dice with exploding re-rolls. 

<div class='diceroller'>/roll 10d6!</div>

**Compounding Exploding Dice (Shadowrun-Style Exploding Dice)**

Shadowrun (and some other systems) use a special style of exploding dice where the the additional rolls for each dice are added together as a single "roll". To do this, just use two exclamation marks instead of one. So for example to roll 5 d6's, you would do <code>/roll 5d6!!</code>. A common Shadowrun roll would be exploding dice compared to a target number, for example <code>/roll 5d6!!>8</code>. Even though the target number (8) is higher than the possible roll from a single dice, with the compounding exploding rolls a single roll can be infinitely high!

<div class='diceroller'>/roll 5d6!!>8</div>

**Penetrating Exploding Dice (Hackmaster-Style Exploding Dice)**

HackMaster (and some other systems) use a special style of exploding dice where the the additional rolls for each dice have 1 subtracted from the roll. To do this, add a p after the exclamation mark. So for example to roll 5 d6's, you would do <code>/roll 5d6!p</code>.

<div class='diceroller'>/roll 5d6!p</div>

## Drop/Keep

Some game systems ask you to roll a large number of dice, and then either drop a certain number of the lowest rolls, or keep only a certain number of the highest rolls. Roll20 supports this type of roll through the <code>d</code> and <code>k</code> commands, respectively.

For example, you might roll 8 d100 dice and only be allowed to keep the top 4 rolls. In Roll20 this would be expressed with <code>/roll 8d100k4</code>. When Roll20 prints the output from that roll, you'll see each individual d100's rolled value, and all but the top 4 rolls will be greyed out. Roll20 will then give you the total of the top 4 rolls. Doing a roll to drop the 3 lowest rolls would be very similar: <code>/roll 8d100d3</code>. Again, the value of each dice rolled will be displayed, with the 3 lowest rolls greyed out.

<div class='diceroller'>/roll 8d100d3</div>

The <code>d</code> and <code>k</code> commands are shortcuts for the full <code>dl</code> and <code>kh</code> commands. If you need to drop the highest dice use <code>dh</code> and if you need to keep the lowest dice use <code>kl</code>. For example <code>/roll 8d100dh3</code> would drop the highest three rolls and keep the lowest k and <code>/roll 8d100kl3</code> would keep the lowest three rolls and drop the highest 5.

## Target Number (Successes)

Normally when you perform a roll, Roll20 reports back the total value of all the dice rolled, plus any modifiers. Some game systems, though, work by rolling a set of dice versus a target number, and then adding up the total number of successes instead. Roll20 uses the greater-than symbol <code>&gt;</code> to indicate when the roll is greater-than or equal-to <code>&gt;=</code> the target number. The less-than symbol <code>&lt;</code> is used to indicate when the roll is less-than or equal-to <code>&lt;=</code> the target number.

For example, you might be performing an action that requires a target number of 3, and you get to roll 3 d6's to see how many successes you have. In Roll20, you would do <code>/roll 3d6&gt;3</code>. Note the inclusion of the greater-than symbol to indicate that this is a target roll versus 3. Roll20 will show you each dice that was rolled, and then tell you the number of dice with a value of 3 or greater (note that ties with the target number count as a success!). You can also roll less-than target numbers, for example <code>/roll 10d6&lt;4</code>, which would give you a success for each dice rolled that is equal to 4 or less.

You can also add modifiers onto your target rolls, and the modifier will be added to <em>each individual dice roll</em> before it is compared to the target number. However, if you're going to do so, it's recommended that you use a group just to make sure the parser fully understands what you want to do. So, <code>/roll {3d6+1}&lt;3</code> would roll 3 d6 dice, and for each dice roll add on 1, then compare it versus the target number of 3.

<div class='diceroller'>/roll 3d6>3</div>

## Rerolling Dice

Several systems require that certain dice be reroll, for example brutal weapons in D&D 4e require any 1s or 2s to be re-rolled and the orignal die value ignored.

To use reroll, just do <code>/roll 2d8r<2</code>. Roll20 will roll 2 d8 and reroll any 1s or 2s, dropping the original die value. If reroll for a specific value is needed the comparison operator can be left of. <code>/roll 2d8r8</code> will reroll any 8s. > and < can be used as comparisons and the r suffix can be specified multiple times. <code>/roll 2d8r1r3r5r7</code> would roll 2d8 and re-roll any odd number.

<div class='diceroller'>/roll 2d8r<2</div>

## FATE Dice

Roll20 also supports FATE dice (used for FATE, FUDGE, and other systems). Roll20 accurately simulates FATE dice as 6-sided dice in which two sides are 0, two sides are +1, and two sides are -1. 

To roll 4 FATE dice, just do <code>/roll 4dF</code>. Roll20 will show you the result of each individual FATE dice roll, then give you the total of all the dice rolls added up together. You can also add a modifier onto the total, with <code>/roll 4dF+1</code>.

<div class='diceroller'>/roll 4dF</div>

## Grouping Rolls

Sometimes you may want to perform a series of rolls, and then compare each roll to a common check (like a success roll). Roll20 provides a "grouped rolls" functionality for this purpose. For example, you can roll two different pools of dice, then keep the highest dice roll across any of the pools:

<div class="diceroller">/roll {4d6+3d8}kh1</div>

If you separate the rolls inside the group with a comma, then we'll sum each individual dice expression in the group before applying any modifiers. For example, if we change the above example to use a comma, instead of keeping the highest single roll, it will instead keep the highest group total:

<div class="diceroller">/roll {4d6,3d8}kh1</div>

Grouped rolls can be a very powerful features in Roll20. See more detail about them in the full dice specification below.

<hr />

<div class='alert'>Below you'll find the entire Roll20 dice engine specification. This is the "advanced" documentation. If you're looking to do something totally crazy with Roll20 dice, this is a great place to see if we can support it.</div>

<a name="specs"></a>

#Roll20 Dice Specification

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
To apply a keep or drop modifier across multiple types of dice wrap the roll in a group. With a single Sub-Roll in the group the keep/drop operation is applied across all rolls. To choose the best or worse roll expression multiple sub-groups can be used. In this case the keep/drop operation is applied to the final result of each subgroup.

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