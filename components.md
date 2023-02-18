# Data

## Data layer

- List of robots
  - id
  - Name (string)
  - Image url (string)
  - Speed (number)
  - Endurance (number)
  - Creation date (date)

## Data modification

- Load robots
- Delete a robot from the list of robots
- Add a robot to list of robots
- Update a speed and endurance stats of a robot

# Components

## App

- Show Layout component

## Layout

- Show title "Robodex" with a heading
- Show robots list component
- Show form component
- Show navigation component

- Sends the add robot action

## Navigation

- Call dispatch to add new robot
- Send to button component a function to add a robot
- Show "+" button component

## Robots list

- Call a delete robot action
- Call a modify robot action
- Receives list of robots

- Show a Robot card component for every robot on the list of robots

- Sends a robot to each Robot card component
- Sends a delete robot action to robot card component
- Sends the modify robot action to robot card component

## Robot card

- Receives a delete robot action from button
- Receives the modify robot action from button

- Show robots name inside a heading
- Show robots photo, speed, endurance and creartion date
- Show button component to delete a robot
- Show button component to modify robot

- Send "🗑️" to button component to delete a robot
- Send "📝" to button component to modify a robot

## Form

- Receives the add robot action

- Shows an input for the robot's name with label "Name"
- Shows an input for the robot's image with label "Image"
- Shows an input for the robot's speed with label "Speed"
- Shows an input for the robot's speed with label "Endurance"
- Shows a button to "Create" the robot
- On submit executes the received add robot action

## Button

- Receives a function
- Call the received function on click
- Shows a text for the user action inside a button
