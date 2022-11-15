# Google Chrome Extension: Birthday reminder


## What is it: 
---
It is an extension that shows you the next birthday from a list of birthdays that you have filled.
The time until next birthday is displayed using a timer. The timer always ends at 00:00 on the day of the birthday

## How to add Birthdays: 
```Javascript
const birthdays = 
[{name: "Max Mustermann", date: "January 1", year: "2023"}
...
...
...]
```
- If you enter a birthday that has already happened, please enter the next year for `year`
- you can add as many birthdays as you want

## how to add the project to your Extensions: 
---
1.  go to `chrome://extensions/` in Google Chrome
2. Activate `developer Mode` (on the top right)
3. click on `Load unpacked extension` (on the top left)
4. then click on the folder in which you saved the Birthday reminder
5. after that you have to click on the `puzzle sign` and select the Extension (on the top next to your profile picture)
6. now when you click on the `Birthday cake` it shows you the next birthday with a timer