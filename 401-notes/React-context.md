# `<login/>` and `<auth/>`

## Questions

1. Why is the Context API useful? It is a way to store state in a single component and you can share it anywhere in your component tree without needing to pass it down as props.
1. Can a component outside of a provider get its context? Nope it can not.
1. What are some common use cases for using the Context API? Whenever you need to apply global state, meaning some UI change that would affect every componenent in your app, like dark mode, language, country.
1. Describe “Context Hell”. Context hell is when you have context nested inside context inside context inside context.

```
<ReduxProvider value={store}>
  <ThemeProvider value={theme}>
    <OtherProvider value={otherValue}>
      <OtherOtherProvider value={otherOtherValue}>
        {/** ... other providers*/}
          <HellProvider value={hell}>
              <HelloWorld />
          </HellProvider>
        {/** ... other providers*/}
      </OtherOtherProvider>
    </OtherProvider>
  </ThemeProvider>
</ReduxProvider>
```

## Vocab

- *global state* - state that applies to all components in your app
- *global context* - context that is applied to all components inside your code
- *provider* - provider is the component that is sharing context to child components
- *consumer* - consumers are components that use the context given to them by a parent component

---

[Back to Read Me](../README.md)
