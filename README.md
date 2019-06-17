# useAction

Almost same to useEffect, but not deferred.

## Why `useAction`?

> Unlike componentDidMount and componentDidUpdate, the function passed to useEffect fires after layout and paint, during a deferred event. This makes it suitable for the many common side effects, like setting up subscriptions and event handlers, because most types of work shouldn’t block the browser from updating the screen.

From [React docs](https://reactjs.org/docs/hooks-reference.html#timing-of-effects).

But `useAction` can execute the action function immediately after `useAction` get called.

## Example

### useEffect

```jsx
function Foo(props) {
  ref = useRef(null)
  useEffect(() => {
    ref.current = 'initialized'
  }, [])
  console.log(ref.current) // -> null
  return null
}
```

### useAction

```jsx
function Foo(props) {
  ref = useRef(null)
  useAction(() => {
    ref.current = 'initialized'
  }, [])
  console.log(ref.current) // -> initialized
  return null
}
```
