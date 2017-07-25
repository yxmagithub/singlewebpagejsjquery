# singlewebpagejsjquery

This project is for demo purpose, it use the valina Javascript, and jquery to complish a single web page functionality.

#instruction:
1. just git clone the whole project, just the open the testsample.html by using chrome or other browser.
2. instructions.txt give out the user requirement for this mini-project

#feature:
1. use the regex to validate the text input.

2. separate all the component, let all the handler file to process all the control logic for UI, it includes Tablehandler, DropDownHandler, inputhadler, popuphandler

3. use a custmizered popup dialog

4. add the unit test function for each control object

5. add the security feature to prevent the clickjacking

6. abstract a InputValidator Object as base Object, it generalize the logic for validation, if validatekeystroke is false, then preventDefault event, no input allowed.

7. All the input child Object are inherited from InputValidator Object by using the Object.Create(InputValidator).

8. introduce the GlobalizationHandler.js, it initialized all the dictionary entry into Globalization.englishString[], it is mapping between entryid and entrytext

9. All the display text are represented by english StringId
