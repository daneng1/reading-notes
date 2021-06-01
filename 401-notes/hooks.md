# React Hooks

## Questions

1. Why do we not need more .html pages in a multi-page React app? Because React is a Single Page Application meaning that the whole app renders within index.html even when it appears that you have changed pages.
1. If we wanted a component to show up on every page, where would we put it and why? It would go inside the `<BrowserRouter />`, outside `<Route/>`. BrowserRouter is used for doing client side routing with URL segments. You can load a top level component for each route. This helps separate concerns in your app and makes the logic/data flow more clear.
1. What does props.children contain? Props.children is a generic template that contains all the child components defined with a component.

## Vocab

- *Composition* - this is a way to restructure complex components into smaller components that can then be reused across more parts of your code.
- *Children / Child Components* - these are components that have a parent component that can share info with the child component. This is basically a component within a component.
- *Hash Routing* - this uses the hash part of the url to render components.
- *Link Routing* - this is more dynamic routing and updates/displays info based on the route.

---

[Back to Read Me](../README.md)
