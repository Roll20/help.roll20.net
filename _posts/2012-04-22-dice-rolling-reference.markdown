---
layout: default
title: Dice Rolling Reference
categories: advanced
---

Roll20 features support for a wide array of dice mechanics. On this page we've compiled a list of all of the different types of dice rolls you can perform. Each type also has an interactive example box where you can make actual rolls using the same roll system that's built in to Roll20 -- a great way to experiment and check to make sure we can support your role playing game system of choice. If you don't see a dice mechanic listed here that you need, get in touch with us and we'll see if we can add it.

How to Roll Dice
----------------

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. Notice that you need to put the 1 in front of the d20 even if you're only rolling one dice. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

<div class='diceroller'>/roll 1d20+5</div>

So, the overall format for a dice roll is <code>/roll NdX+m</code> where N is the number of dice to roll, X is the number of sides of the dice, and m is the (optional) modifier, which can also be negative.

After the roll is performed, you'll see the results of the roll in the text chat area. Notice that for each group of dice that were rolled, there will be a group of numbers in parentheses, representing the result of each individual dice that was rolled. You'll also see the total of all the dice values plus modifiers to the right of the equals sign.

Rolling in Secret
-----------------

By default, any rolls that you make are seen by everyone in the game with you (including all players). If you want to roll in secret, you can use the <code>/gmroll</code> command to perform a roll that only the GM and the original player who made the roll can see. So if you're the GM, doing a <code>/gmroll</code> will only be visible to you. It's a great way to perform skill checks in secret.

Exploding Dice
--------------

Roll20 supports exploding dice -- you may also know it as "rule of 6" or "rule of 10s" depending on your game system. With exploding dice, if you roll the maximum number on the dice (a 6 with a d6, a 10 with a d10, etc.) you get to re-roll again and add the additional roll to your total for that roll. If the additional roll is also a maximum number, you get to keep rolling! 

To perform a roll with exploding dice, just add an exclamation point after the number of sides in the formula. For example, <code>/roll 3d6!</code> would roll 3 d6 dice with exploding re-rolls. 

<div class='diceroller'>/roll 10d6!</div>

Drop/Keep
---------

Some game systems ask you to roll a large number of dice, and then either drop a certain number of the lowest rolls, or keep only a certain number of the highest rolls. Roll20 supports this type of roll through the <code>d</code> and <code>k</code> commands, respectively.

For example, you might roll 8 d100 dice and only be allowed to keep the top 4 rolls. In Roll20 this would be expressed with <code>/roll 8d100k4</code>. When Roll20 prints the output from that roll, you'll see each individual d100's rolled value, and all but the top 4 rolls will be greyed out. Roll20 will then give you the total of the top 4 rolls. Doing a roll to drop the 3 lowest rolls would be very similar: <code>/roll 8d100d3</code>. Again, the value of each dice rolled will be displayed, with the 3 lowest rolls greyed out.

<div class='diceroller'>/roll 8d100d3</div>

The overall format for drop rolls is <code>/roll NdXdY+m</code>, where N is the number of dice to roll, X is the number of sides of the dice, m is the (optional) modifier, and Y is the number of lowest rolls to drop. The format for keep rolls is <code>/roll NdXkY+m</code>, where Y is the number of highest rolls to keep.

Target Number (Successes)
-------------------------

Normally when you perform a roll, Roll20 reports back the total value of all the dice rolled, plus any modifiers. Some game systems, though, work by rolling a set of dice versus a target number, and then adding up the total number of successes instead. Roll20 uses the greater-than symbol <code>&gt;</code> to indicate that the roll is versus a target number.

For example, you might be performing an action that requires a target number of 3, and you get to roll 3 d6's to see how many successes you have. In Roll20, you would do <code>/roll 3d6>3</code>. Note the inclusion of the greater-than symbol to indicate that this is a target roll versus 3. Roll20 will show you each dice that was rolled, and then tell you the number of dice with a value of 3 or greater (note that ties with the target number count as a success!) 

You can also add modifiers onto your target rolls, and the modifier will be added to <em>each individual dice roll</em> before it is compared to the target number. So, <code>/roll 3d6+1>3</code> would roll 3 d6 dice, and for each dice roll add on 1, then compare it versus the target number of 3.

<div class='diceroller'>/roll 3d6>3</div>

The overall format for target number rolls is <code>/roll NdX+m>t</code> where N is the number of dice to roll, X is the number of sides of the dice, m is the (optional) modifier applied to each dice roll, and t is the target number. A success occurs when a rolled dice value plus any modifiers is equal to or greater than the target number.

FATE Dice
---------

Roll20 also supports FATE dice (used for FATE, FUDGE, and other systems). Roll20 accurately simulates FATE dice as 6-sided dice in which two sides are 0, two sides are +1, and two sides are -1. 

To roll 4 FATE dice, just do <code>/roll 4dF</code>. Roll20 will show you the result of each individual FATE dice roll, then give you the total of all the dice rolls added up together. You can also add a modifier onto the total, with <code>/roll 4dF+1</code>.

<div class='diceroller'>/roll 4dF</div>

The overall format for FATE dice rolls is <code>/roll NdF+m</code>, where N is the number of FATE dice to roll, and m is the (optional) modifier to add onto the total of the rolls.

Combining Roll Types
--------------------

You can also combine most of the above roll types together. An advanced example might be to roll 4 d6's, explode any max rolls, add a modifier of 1 onto each roll, and then find out the number of successes versus 3. In Roll20, this would be <code>/roll 4d6!+1>3</code>.

<div class='diceroller'>/roll 4d6!+1>3</div>
