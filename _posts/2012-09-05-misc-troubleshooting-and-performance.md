---
layout: default
title: Optimizing Roll20 Performance
categories: troubleshooting misc
---

As far as most gaming-related applications go, Roll20 has very low network and graphical performance requirements. The vast majority of our users never need to worry about any of the following. However, if you (or one of your players) has a very slow Internet connection or a very old computer, these tips may help you have a smoother time playing.

Roll20 is a web-based application, and as such there are two primary performance considerations: the speed of the network connection, and the speed of the graphics rendering on the client's computer.

**Note**: Your own individual results may (and probably will) vary from other people playing in your game. If you're the GM designing the Roll20 Campaign, you'll want to keep the worst performing client (which may not be you) in mind. Just because a 500 unit by 500 unit map scrolls smoothly on your computer doesn't mean it will work well for your player with a 4-year-old machine.

**TL;DR**: Slow network connection? Your biggest hit is going to come in the video chat department. Try both options (built-in video chat, Google+ Hangouts) and hope for the best. Have a player with a really old computer? Try limiting the number of objects on-screen, and [these additional tips](#graphtips)).

# Network Connection Performance


Network connection refers to two things: the amount of information your connection can carry at once ("bandwidth") and the speed at which it can make a round-trip to the Roll20 servers ("latency"). 

The virtual tabletop itself is very lightweight from a bandwidth perspective. Common actions such as sending a chat message or moving a token require very little data. In fact, you and your players will spend much more time downloading image files for tokens and maps included in the campaign than you will due to performing actions in the interface. For example, you would need to move 1,000 tokens at the same time to generate as much data as it takes to download one small 7 KB token image. This means that even if you have a "slow" connection (e.g. 768 Kb/s, a common low-end DSL speed), your use of the Roll20 tabletop should not be very affected. A slow bandwidth will mostly cause you to have a long initial load time, and you may see images loading in slowly if your GM adds more throughout the game.

Latency, on the other hand, determines how quickly you'll receive changes during gameplay. If you are located far away from the Roll20 servers (in Chicago, IL, USA) or have a very unreliable connection (such as via a 3G cellular signal), you may experience high latency. Roll20 is designed to be fairly fault-tolerant, so you'll still be able to participate, but you may experience delays of several seconds between someone moving a token piece and it appearing to move on your screen.

**Special Considerations for Video Chat**

By far the part of Roll20 most-affected by your network connection is the integrated voice and video chat. It is recommended that you have at least 250 Kb/s of downstream bandwidth for each member of your group, as well as at least 250 Kb/s of upload bandwidth for broadcasting a video stream from your computer to the group. High latency will also affect your video chat performance, causing there to be delays or even dropped/skipped frames (resulting in "jerky" video). If you are using the built-in Roll20 video chat and it's not working well for you, and especially if you are located outside of the United States, you should consider [running your Roll20 game in a Google+ Hangout](http://help.roll20.net/playing-in-google-plus/), which some users have reported works better with slower connection speeds.

<a name="graphtips"></a>

# Graphics Rendering Performance


The graphics rendering performance of your computer is determined by several things, including having an up-to-date browser, your CPU speed, amount of available system memory, and your graphics card. While you certainly don't need a high-end gaming PC to use Roll20, playing on an underpowered netbook computer may cause you to experience jerky or unresponsive performance. For best results, consider using a mid-range computer (one built in the last 3 or 4 years should be more than sufficient, and old computers may be fine as well) with a dedicated graphics card and a screen resolution of at least 1280x1024. 

The graphics rendering of your computer directly affects how quickly things can be drawn on your screen as the scene changes. So when a token is moved or added, or you zoom, or scroll/pan around the map, the screen is being constantly redrawn. The better your graphics rendering performance, the smoother those operations will "feel".

A few tips for getting the most out of Roll20 with a low-performance PC (sorted by "most likely to help" to "least likely"):

* Limit the number of objects that you use. For example, try to use only a single image on the maps layer, instead of a large number of map tiles, furniture, etc. Instead, create the map in an external program and then import it as one JPG or PNG file. The fewer objects that Roll20 has to render individually, the better your performance will be.
* Keep map sizes small. (The default size of 20x20 is a good bet.) Divide your encounters across several pages if need be.
* Turn off the grid and/or the fog of war mechanics -- both of these require extra graphics processing on each new frame draw to use, slowing down your computer.
* Limit your use of the draw tools.

# Which is it?

Below are a few common performance issues seen by Roll20 users, and their cause:


* **Jerky/slow scrolling/panning/zooming.** This is caused by low graphical rendering performance. See the section above for tips on improving graphic performance.
* **Fog of war and/or grid completely disappears on the map.** This is caused by your graphics card running out of video memory. You'll need to use smaller maps.
* **When scrolling/panning, the grid or fog of war "lags behind", revealing parts of the map.** This is caused by low graphical rendering performance. Your best bet is to use a smaller map, or not use the fog of war feature.
* **Jerky video chat, skipping, dropped frames, "laggy".** Could be caused by either network or graphical performance issues. Try [using Google+ Hangouts](http://help.roll20.net/playing-in-google-plus/), or using voice-only chat, or even disabling video/voice chat entirely.
* **There is a delay between when I see a text chat message appear and when someone says something about it in the video chat.** There is a standard delay of a second or two in the video chat -- a lot of data has to make a trip to a server and then to your other group members, and the connection speeds and latency of the hops in between slow things down. If you're seeing a larger delay than that, it's most likely a latency issue.