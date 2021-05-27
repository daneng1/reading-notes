# React Routing

## Questions

1. Do child components have direct access to props/state from the parent? 

  > No, the child component can only acces props/state from the parent if the parent sends the child a function.

1. When a component “wraps” another component, how does the child component’s output get rendered? 

  > The child component only gets rendered if the parent component is also rendered.

1. Can a component, such as <Content />, which is a child also be used as a standalone component elsewhere in the application?

  > Absolutely!

1. What trick can a parent use to share all props with it’s children?

  > By using the spread operator(...props)

## Vocab

- *props.children* - The React docs say that you can use props.children on components that represent 'generic boxes' and that don't know their children ahead of time. What props.children does is that it is used to display whatever you include between the opening and closing tags when invoking a component.
- *composition* - React Composition is a development pattern based on React's original component model where we build components from other components using explicit defined props or the implicit children prop. In terms of refactoring, React composition is a pattern that can be used to break a complex component down to smaller components, and then composing those smaller components to structure and complete your application.

 [Back to Read Me](../README.md)
 