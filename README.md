## (1) DEVELOPING A NEW TOOL (User interface only. No web service/online API needed.)

### User Stories
**1) As a guest user, I want to see the items of my TO DO list, so that I can see what tasks I need to work on.**

**ACCEPTANCE CRITERIA:**
* The user interface must be developed using AngularJS and its best practices.
* The storage engine must be the browser's Local Storage.
* The user must be able to get the list of all existing tasks.
* The user must be able to get the details of a task.
* In case there is no task, the system must display the following message: "Wow. You have nothing else to do. Enjoy the rest of your day!".

**2) As a guest user, I want to add a new item into my TO DO list, so that I can store my tasks.**

**ACCEPTANCE CRITERIA:**
* The user interface must be developed using AngularJS and its best practices.
* The storage engine must be the browser's Local Storage.
* The system must not allow empty tasks. If that happens, then the system must display the following message: "Bad move! Try removing the task instead of deleting its content.".
* The system must set the date in which the item was created automatically.
* UUID must be automatically generated and it must be unique.
* The task Type must only allow "shopping" or "work". If another type is passed, then the system must display the following message: "The task type you provided is not supported. You can only use shopping or work.".

**3) As a guest user, I want to delete a task from my TO DO list, so that I can discard the tasks that I will no longer need to do.**

**ACCEPTANCE CRITERIA:**
* The user interface must be developed using AngularJS and its best practices.
* The storage engine must be the browser's Local Storage.
* The user must be able to delete an existing task.
* If the task isn't valid anymore, the system must display the following message: "Good news! The task you were trying to delete didn't even exist.".

**4) As a guest user, I want to prioritize the tasks of my TO DO list, so that I can organize my work and always deliver the most valuable things first.**

**ACCEPTANCE CRITERIA:**
* The user interface must be developed using AngularJS and its best practices.
* The storage engine must be the browser's Local Storage.
* The user must be able to edit the information of an existing task.
* If the task doesn't exist, then the system must display the following message: "Are you a hacker or something? The task you were trying to edit doesn't exist.".

**5) As a guest user, I want to change a resolution of a task, so that I can set tasks as done without removing them from the list or change them back to active in case they weren't done yet.**

**ACCEPTANCE CRITERIA:**
* The user interface must be developed using AngularJS and its best practices.
* The storage engine must be the browser's Local Storage.
* The user must be able to set a task as done.
* The user must be able to unmark a done task, which will make the task active again.
* The field "done" must be a customized checkbox.

### EXTRA INFORMATION
**Entity**
```
{
      "uuid": "",
      "type": "",
      "content": "",
      "done" : true|false,
      "date_created": ""
   }
```

#### Tip:
* The use of dependency management tools is highly recommended for SPAs.

## (2) REFACTORING AN EXISTING CODE (User interface only. No web service/online API needed.)

### User Stories
**1) As a developer, I want to improve the quality of a legacy code by refactoring it using the best practices, so that it will be easier to maintain, it will be more readable and it will improve the quality of the system.**

**ACCEPTANCE CRITERIA:**
* It must keep the same behavior and appearance.
* The code must be developed using the AngularJS's best practices.

### EXTRA INFORMATION
* Please use the files under question02 folder.

#### Tip:
* The use of directives is highly recommended by AngularJS senior developers.