---
layout: default
published: true
category: tabletop
title: Token Features
---

##Creating a New Token
Any image that is placed on the **Objects and Tokens** or **GM Info Overlay** layer automatically becomes a **Token** object. You still have the ability to scale and rotate the image, but there are several Token-specific elements added as well.

Here is an example of a Token:

<img src='/images/TokenSS1.jpg' align="left" vspace="10" hspace="35" />

1. Radial Menu Bubbles: These three input bubbles can be used by the players or the GM as a counter to keep track of health, turns, money, fuel or whatever else proves useful for your game. Click on a bubble to change the value. You can enter a new value (e.g. "20" or "ABC"), and for numerical values you can also enter relative values (e.g. "+5" will add 5 to the current value, or "-10" will subtract 10.)

2. Bar Overlay: If set to be visible, these are passive bars that fill or empty depending on what's entered in its corresponding Value Bubble.

3. Nameplate: If set to be visible, this will display the name fo the Token.

4. Edit: Clicking on the Edit button brings up a new window where you can name the Token, set permissions on who can control the Token, set what bars/auras are visible to/editable by the players and keep storage of GM notes. *Note: This button is only visible to the GM* You can also double-click on the token to open the same settings dialog.

5. Status Indicator Overlays: This button rolls out a menu that gives you a series of colored dots as well as a red X that overlays over the Token image. You can use these to show status ailments or to differentiate multiples of the same Token type. You can have multiple indicators displaying simultaneously.

##Token Settings
Clicking the Edit button or double clicking on a Token brings up the Edit Token window:

<img src='/images/TokenSS2.jpg' />

**1. Represents Character**: Here you can select whether the token represents a [**Character**](/sidebar-journal) or is a None/Generic Token. If the token is set to represent a Character then the token will take sync with that Character and the token will aotumatically be updated with any changes made tot he Character in the [**Journal**](/sidebar-journal).

**2. Name**: Here you can set the name of the Token. If you choose to use the [**Turn Tracker**](/tabletop-toolbox-turn-tracker) in your game, the Token's name will appear next to its thumbnail picture in the turn list.

**3. Controlled By**: This is where you assign who in your game has permission to control the Token. If the Token represents None/Generic then clicking on the "Controlled By" field will bring up a list of all the players in the current campaign as well as being able to select the option "All Players". You can assign multiple players to a single Token. If the Token represents a specific Character, then the Token is controlled the player that has control of the Character which is set in the [**Journal**](/sidebar-journal). GM always has control over the Tokens in their Campaign.

*Note: If you are creating a brand new Campaign and your players have yet to join, their names will not yet be available for Token assignment. If you're setting your Pages up in advance of your first gaming session, it's recommended to set your PC Tokens to "All Players" and later fine tune the permissions when your players have visited your Campaign.*

**4. Player Permissions**: There are two possible permissions for each setting: See or Edit. You can toggle the flag for each type by checking or unchecking the corresponding box.

Setting the View flag will allow all players in the game to view the current value of the bar, or see the aura drawn on the tabletop, regardless of whether or not they can control the token.

Setting the Edit flag will allow all players who can control the token (based on the "Controlled By" field, above) to see and edit the values of the bar, or change the radius of the aura drawn on the tabletop.

So if you have a token that you want all players to see the bars for (like a PC), set the View flag. If you also want to allow some players to keep track of their own health, set the Edit flag. If you only want players who can control the token to see and edit the bars, set only the Edit flag. And of course if you set none of the flags then only the GM will be able to see or edit the bars and auras.

**5. Tint Color**: Here you can add a color filter to the token.

**6. Bars and Auras**:

Bars: This is where you can set whether any of the three bar elements are either visible and/or editable to the players. The green heart, blue bolt and red cardiograph icons for the bars are there for identifing purposes only. They do not have to represent anything in particular in your game.

You can also input numerical values for the Bar Bubbles directly from the Edit Token window. There's two input fields available for each Bar. The first field is for the Bar's current value and is what's featured in the Token's corresponding Bar Value Bubble. The second field is for the Bar's total value. If it's supplied, Roll20 will use the comparison between the two numbers to render how full or empty that corresponding Bar appears on the Tabletop. The fill will reflect whatever the Player plugs into their Bar Value Bubble while in-game.

Auras: An Aura is a translucently filled circle or square that radiates from the center of a Token. You can have up to two Auras active at once on any given Token. To turn one on, make sure it's toggled on to View first and then enter a radius value for the Aura. Next to the Aura's radius input field is a palette button where you can choose the color for the Aura. You can set the Aura to a square instead of a circle by checking off the "Square" checkbox next to the color palette button.

*Note: To completly remove an Aura from view, do not change the radius value to zero. Clear the field instead. At zero, the Aura still draws to encircle the outer edge of the Token.*

**7. Emits Light**: Here you can set how far light emits from the token and if All Players can see the light emitted when [**Dynamic Lighting**](/dynamic-lighting) is enabled.

**8. GM Notes**: This is a field where a GM can keep private notes on any given Token.