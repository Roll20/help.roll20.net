---
layout: default
published: false
category: tabletop
title: Token Features
---

##Creating a New Token
Any image that is placed on the **Objects and Tokens** or **GM Info Overlay** layer automatically becomes a **Token** object. You still have the ability to scale and rotate the image, but there are several Token-specific elements added as well.

Here is an example of a Token:

<img src='/images/tokencontrols.jpg' align="left" />

1. Bar Value Bubbles: These three input bubbles can be used by the players or the GM as a counter to keep track of health, turns, money, fuel or whatever else proves useful for your game.

2. Bar Overlay: If set to be visible, these are passive bars that fill or empty depending on what's entered in its corresponding Value Bubble.

3. Edit: Clicking on the Edit button brings up a new window where you can name the Token, set permissions on who can control the Token, set what bars/auras are visible to/editable by the players and keep storage of GM notes. *Note: This button is only visible to the GM*

4. Status Indicator Overlays: This button rolls out a menu that gives you a series of colored dots as well as a red X that overlays over the Token image. You can use these to show status ailments or to differentiate multiples of the same Token type. You can have multiple indicators displaying simultaneously.

##Token Settings
Clicking the Edit button or double clicking on a Token brings up the Edit Token window:

<img src='tokensettings.jpg' />

**Name**: Here you can set the name of the Token. If you choose to use the [**Turn Tracker**](/tabletop-toolbox-turn-tracker) in your game, the Token's name will appear next to its thumbnail picture in the turn list.

**Controlled By**: This is where you assign who in your game has permission to control the Token. Clicking on the "Controlled By" field will bring up a list of all the players in the current campaign as well as being able to select the option "All Players". You can assign multiple players to a single Token. The GM always has control over the Tokens in their Campaign.

*Note: If you are creating a brand new Campaign and your players have yet to join, their names will not yet be available for Token assignment. If you're setting your Pages up in advance of your first gaming session, it's recommended to set your PC Tokens to "All Players" and later fine tune the permissions when your players have visited your Campaign.*

**Player Permissions**

Bars: This is where you can set whether any of the three bar elements are either visible and/or editable to the players. The green heart, blue bolt and red cardiograph icons for the bars are there for identifing purposes only. They do not have to represent anything in particular in your game. **((I'm a little confused as to what settings mean (a) what is visible to everyone and (b) what is ONLY visible by the GM/ControllerPlayer))**

You can also input numerical values for the Bar Bubbles directly from the Edit Token window. There's two input fields available for each Bar. The first field is for the Bar's current value and is what's featured in the Token's corresponding Bar Value Bubble. The second field is for the Bar's total value. If it's supplied, Roll20 will use the comparison between the two numbers to render how full or empty that corresponding Bar appears on the Tabletop. The fill will reflect whatever the Player plugs into their Bar Value Bubble while in-game.

Auras: An Aura is a translucently filled circle or square that radiates from the center of a Token. You can have up to two Auras active at once on any given Token. To turn one on, make sure it's toggled on to View first and then enter a radius value for the Aura. Next to the Aura's radius input field is a palette button where you can choose the color for the Aura. You can set the Aura to a square instead of a circle by checking off the "Square" checkbox next to the color palette button.

*Note: To completly remove an Aura from view, do not change the radius value to zero. Clear the field instead. At zero, the Aura still draws to encircle the outer edge of the Token.*

**GM Notes**

This is a field where a GM can keep private notes on any given Token.