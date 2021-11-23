# Lab 4 Design Document

## Design Decisions
### Lab 4 Redesign

For lab 4, our biggest implementation change is creating a tab bar the the top of the lists and underneath the similar to the tabs you see in a notebook. The functionality consists of tabs that you are able to select and it will show the corresponding list. You can add a new list by pressing the plus button at the right end of the tab bar. You can easily delete a list since there is a convenient button at the bottom of the page that allows you to do so. Furthermore, you can edit the list names by clicking the edit button (similar to editing a todo).

We've also increased accesibility by adding aria labels to the components of the page. By doing this, people who require visual accesssibility may use VoiceOver applications to aid in naviagating through the page. We maded sure to keep the names of these components as simple as possible.

From the backend perspective, we decided with a data structure that puts all the todos into one collection with each todo having a corrspoding list title to indicate which list it is from.

We decided to stick to the same color scheme as the rest of our application and a tab is highlighted when the tab is white while it is pink if it is not active.

### Alternate Designs

When posed with the idea of multiple list, we explroed the idea of using dropdown menus or using more buttons to indicate different lists. We settled with tabs since we wanted the to-do list to feel close to a notebook topic separator. We also decided that it would be best to place then at the top of the page instead of the bottom (something like excel sheets) because we knew that it would be most useful for users to see what list their are looking at at the top of the page (like a bookmark from a physical book). 

Furthermore, we looked into the different ways we can edit these tabs. One alternate design was to use a modal to create new lists. We wanted the users to put in all the information about the list before making a new tab but we decided to keep it simple and just like creating a new sheet in excel.

Another data structure we decided on was having a collection for every new list. This was we have one collection that stored all the tabs and the names of the collection for each tab but opted to store everything in one collection. 

## User Testing

We had two users test our third iteration of our app: one who had tested the second version and another who has yet to try our app before.

### User testing 1

![usertesting](images/usertest_3.png)

As we can see from the texts above, the changes were well recieved. Having them test together and interact with each other also highlighted parts of the app that really stood out.

## Final Design
Note: previous functionality such as editing, deleting, adding todos are in `design-lab2.md` and `design-lab3.md`. To prevent repetition, we decided to only feature creating new tabs.

1. Landing page (with tasks)

![landing_page_tasks](images/one.png)

2. Landing page (with no tasks)

![landing_page_no_tasks](images/two.png)

3. Sorting all todos from the top left dropdown selector

![sort_main](images/three.png)

4. Changing the prioirty of a todo from the todo's dropdown selector

![set_priority](images/four.png)

5. Adding a new task on default sets it to priority "High"

![new_task_high](images/five.png)

6. No todos are selected

![none_selected](images/six.png)

7. Some todos are selected

![some_selected](images/seven.png)

## Reflection
### Challenges

One of the biggest challenges for this lab was to figure out what type of data structure to use to create the tab list.

### Successes

On the success side, we have a pleasant experience working with Firebase. It was not difficult and easy to ramp-up on. Additionally, learning how to read the documentation of this tool was rather intuitive and examples were clear and easy to follow.