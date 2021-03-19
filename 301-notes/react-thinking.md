# Thinking in React

One of the many great parts of React is how it makes you think about apps as you build them.

### Step 1: Break The UI Into A Component Hierarchy

- Start by drawing boxes for every component, identifying them and their place in the heirarcy.

- After naming components, write them out in a list form to see the heiracry.

- App
  - Main
    - component 1
    - component 2
  - footer
    - info
    - links

### Step 2: Build A Static Version in React

-  Now that you have the heirarcy built, it's time to build a static version of your site. This means it won't take any inputs and won't have any state yet.
- To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. 
- Most people prefer to build top down for this work but sometime bottom up works well for bigger sites.
- At the end of this step, you’ll have a library of reusable components that render your data model. 

### Step 3: Identify The Minimal (but complete) Representation Of UI State

- To make your site inteactive, you'll to use state to trigger and pass changes.
- To build your app correctly, you first need to think of the minimal set of mutable state that your app needs. The key here is DRY: *Don’t Repeat Yourself*.
- Determine if data is props or state. Here's a few tips to make that determination:


  - Is it passed in from a parent via props? If so, it probably isn’t state.
  - Does it remain unchanged over time? If so, it probably isn’t state.
  - Can you compute it based on any other state or props in your component? If so, it isn’t state.

### Step 4: Identify Where Your State Should Live 

- For each piece of state in your application:

  - Identify every component that renders something based on that state.
  - Find a common owner component (a single component above all the components that need the state in the hierarchy).
  - Either the common owner or another component higher up in the hierarchy should own the state.
  - If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

### Step 5: Add Inverse Data Flow

- React makes this data flow explicit to help you understand how your program works, but it does require a little more typing than traditional two-way data binding.

[Back to Read Me](../README.md)