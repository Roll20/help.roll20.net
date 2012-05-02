---
layout: default
title: Running a Game
categories: draft
---

* __Inviting players__

  When you start a new campaign in Roll20, in the chat window there is a simple break down of commands in the system.  Below that will be a "Player Link".  This is a unique entry URL to your game-- as such you should not share it with anyone you wouldn't invite to your (virtual) table!  


* __Assigning Tokens to Players__

   To assign a token to a player, first make certain you have tokens on the token layer of the Roll20 table.  From there, click the gear symbol or "Edit" portion of the drop down menu to access the token control menu.  This window allows you to select from a drop down menu any active players to control the token.  


* __Rolling Dice__

Rolling dice in Roll20 is easy. Just type the <code>/roll</code> command into the text chat box, followed by a formula. In most cases, the formula is the same as the one that's printed in your game's instructions. For example, you might know that to roll an attack roll you need to roll a "D20 plus your attack modifier". In Roll20, you would just type <code>/roll 1d20+5</code>. Notice that you need to put the 1 in front of the d20 even if you're only rolling one dice. If you hit and you need to roll 3d6+2 damage, you would just type <code>/roll 3d6+2</code>. Finally, you can also string multiple rolls together. If you have an attack that does two types of damage, you might do <code>/roll 2d6+5 + 1d8</code>.

So, the overall format for a dice roll is <code>/roll NdX+m</code> where N is the number of dice to roll, X is the number of sides of the dice, and m is the (optional) modifier, which can also be negative.

After the roll is performed, you'll see the results of the roll in the text chat area. Notice that for each group of dice that were rolled, there will be a group of numbers in parentheses, representing the result of each individual dice that was rolled. You'll also see the total of all the dice values plus modifiers to the right of the equals sign.





