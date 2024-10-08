## STEP 1 (PAGES):
- [X] **Index page**
- [X] **Level 1 page**
- [X] **Level 2 page**
- [X] **Level 3 page**
- [X] **1 style page**
- [XXX] **3 JS script pages** (possibly 4 for index)

**OVERALL PAGES**: 8 (maybe 9)

## STEP 2 (IMPORTANT REQUIREMENTS FOR PROJECT):
### Status of work:
- **[X]**: Completed
- **[XX]**: In Progress
- **[XXX]**: Planned but not started
- **[ ]**: Not Started

***

- [X] **Create repo**
  - [https://github.com/alqassabz/colors_game](https://github.com/alqassabz/colors_game)

- [XX] **ReadME file**
  - Available

- [X] **Must use flexbox or grid**

- [X] **At least 2 HTML pages + navigation**
  - Refer to STEP 1

- [X] **At least 2 event handlers**
  - The user should be able to click on one of the blocks (which they see as different). If it is correct, a new set of blocks will appear.

- [X] **At least 20 meaningful git commits**
    - [X] commit 1 (readMe and psuedo)
    - [X] commit 2 (main board and functionalities)
    - [X] commit 3 (created all pages)
    - [X] commit 4 (completed index page)
    - [X] commit 5 (added loser popup)
    - [X] commit 6 (added a timer)
    - [X] commit 7 (countdown timer + play again)
    - [X] commit 8 (added sounds for losing and winning)
    - [X] commit 9 (added shape customization)
    - [X] commit 10 (added extra customizations)
    - [X] commit 11 (added num of blocks customization)
    - [X] commit 12 (linked customizations with all levels)
    - [X] commit 13 (fixed the function for changing block numbers when level is changed)
    - [X] commit 14 (added light/dark modes)
    - [X] commit 15 (styled buttons for the whole game)
    - [X] commit 16 (added scoreboard)
    - [X] commit 17 (fixed issue with shapes customization)
    - [X] commit 18 (fixed structure oof code)
    - [X] commit 19 (fixed class namings and light mode color changes)
    - [X] commit 20 (updated psuedo code)
    - [X] commit 21 (fix all issues with main functionality and mode)
    - [X] commit 22 (added custom lives)
    - [X] commit 23 (added 3 lives in each level)
    - [X] commit 24 (fixed dark mode and lives)
    - [X] commit 25 (added sound effects for losing lives)




- [ ] **Code indented, spaced, and within code blocks**

- [ ] **REMOVE commented out code that was left unused** (function descriptive comments are fine)

- [X] **Global variables use**

- [X] **camelCase**

- [ ] **Deploy on Surge**

- [ ] **Remove console.logs**

## STEP 3 (POST-MVP IDEAS):

- [X] There must be a **DARK MODE** toggler -> **DEFAULT MODE** will be **LIGHT**

- [X] Any additional **CUSTOMIZATION** such as **TYPE** (colors, numbers, letters, etc.)

- [X] **SAVE** the **"level"** which the user reached **EVEN IF** they **EXIT** the browser

### EXTRA SUGGESTIONS:

- [X] **Google Fonts**

## STEP 4 (MAIN GAME RULES):

- [X] The game will **START** at **Level 1**.

- [X] **Level 2** will be **UNLOCKED** when **Level 1 is COMPLETED**.

- [X] **Level 3** will be **UNLOCKED** when **Level 2 is COMPLETED**.

- [X] There must be **DIFFERENT COLORS** every time **(NOT HARDCODED OR PRE-DEFINED)**.

  - use ***Math random*** to generate a new color everytime
  - *Generate 3 numbers* ranging *from 0 to 255* and *assign each of them to a color* (red, green, blue)

- [X] For a level to be completed, **20 GAMES** must be **COMPLETED**.

  - ***Repeat color generation process 20 times***
  - Put *if statement* to ***stop*** if ***chosen block was wrong***

- [X] The **GAMES PER LEVEL** will keep getting **HARDER** (color range reduce).

- [X] The user will have the **INDEX** where they can **CUSTOMIZE** their game board, **VIEW INSTRUCTIONS**, and **START** the game. (Customization will fully be decided later).

## STEP 5 (RESTRICTIONS):

- [X] **Level 2** must have **MORE BLOCKS** than Level 1, **EVEN IF** Level 1 was **CUSTOMIZED** (**MAX for Level 1** must be **LESS THAN** **MIN for Level 2**).

- [X] **Level 2 COLOR RANGES** must be **SMALLER THAN** Level 1 **EVEN IF** Level 1 was **CUSTOMIZED** earlier (color range **"DIFFICULTY"** for Level 1 must **NOT REACH** the **DEFAULT/MINIMUM** color range **"DIFFICULTY"** for Level 2) 

- [X] **DEFAULT DIFFICULTY** in **Level 2** is **SAME** as **Level 3**.

- [XXX] **Level 3** must have a **COUNTDOWN TIMER** to add extra challenge to the game (time to be decided later).
  - *Start from time x* and *decrement* by 1 *every 1s* (1000ms) using ***setTimeOut***

- [X] Once the **TIMER REACHES ZERO** and the game is **NOT** yet completed (20 rounds/games), the game will be **OVER**.

- [X] The **TIMER** for **levels 1 and 2** will be displayed **(NOT COUNTDOWN)**.





<!-- RESOURCES USED (NOT ALL):

  https://www.geeksforgeeks.org/how-to-check-the-given-element-has-the-specified-class-in-javascript/

  https://www.tutorialspoint.com/how-to-redirect-to-another-webpage-using-javascript

  https://www.geeksforgeeks.org/how-to-create-a-group-of-buttons-with-evenly-space-in-css/

  https://www.w3schools.com/howto/howto_css_switch.asp

  https://www.geeksforgeeks.org/create-a-bottom-navigation-menu-using-html-and-css/

  https://www.w3schools.com/css/tryit.asp?filename=trycss_overflow_visible

  https://stackoverflow.com/questions/16492401/javascript-setting-pointer-events

  https://developer.mozilla.org/en-US/docs/Web/CSS/position

  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_circle

  https://www.w3schools.com/CHARSETS/tryit.asp?deci=9632

  https://www.w3schools.com/CHARSETS/tryit.asp?deci=9679

  https://www.w3schools.com/CHARSETS/tryit.asp?deci=9633

  https://www.w3schools.com/CHARSETS/tryit.asp?deci=9675

  https://www.w3schools.com/charsets/tryit.asp?deci=9733

  https://stackoverflow.com/questions/17636310/play-audio-and-restart-it-onclick



  -->
  

