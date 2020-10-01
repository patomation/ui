
Tabs example:

```js
const [active, setActive] = React.useState('foo');

<Tabs
  data={['foo', 'cool']}
  active={active}
  onClick={(name) => {
    setActive(name)
  }}
/>
```
