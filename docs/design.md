# Lab 4 Design Document

## Design Decisions
### Lab 4 Redesign

For lab 4, we worked on the three parts as outlined in the assignment:

1. Accessibility
We adjusted the background colour of our buttons slightly such that they passed the accessibility contrast checker. We added aria-labels to all the buttons. We also changed the sorting dropdown from simply being "prioity", "name", "creation date" to "sort by priority", "sort by name" and "sort by creation date". This provides more context to the user, especially if they are unable to see.

2. Working on different sizes of screens
We found that our web app works fine on bigger screens, but struggles with smaller screens (e.g. Galaxy Fold). Thus, we adjusted our UI such that parts of it will become arranged in a column rather than a row when the screen space is decreased.

3. Multiple lists and tabs

### Alternate Designs

We played around with a few minor different UI designs outlined below:

1. Having "Sort by" be outside versus inside the dropdown. Instead of choosing this option, we chose our current option where "Sort by..." is inside the dropdown because it saved the already little available screen real estate. Also for accessibility reasons, it read better in the dropdown than separately outside the dropdown.

2. Something with tabs.

## User Testing


### User testing 1



## Final Design
Note: previous functionality such as editing, deleting, adding todos are in `design-lab2.md` and is excluded from here to avoid repetition.

1. Landing page

2. Galaxy Fold size

3. Desktop size

4. Multiple lists (1)

5. Multiple lists (2)

## Reflection

It was nice to apply the acessibility changes to our app. I think it's an incredibly important skill and piece of knowledge to apply whenever we are designing and building something. We also enjoyed implementing the multiple lists functionality. Despite some challenges, having it come together at the end turned a simple todo app into something much more complex and functional.

### Challenges

It was difficult figuring out how to refactor our current code to make implementing multiple lists easier, as well as figuring out how to create the tab system itself. We found ourselves having to look at many different implementations of tabs online and pick and choose aspects that worked for our app design.

### Successes

Making sure our app was accessible was most important to us and it was very nice seeing it come together at the end.