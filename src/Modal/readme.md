
Modal example:

```js
const [show, setShow] = React.useState(false);
<div>
  <Modal
    show={show}
    onClose={() => setShow(false)}>
    {'Modal Example'}
  </Modal>
  <button onClick={() => setShow(true)}>Show Modal</button>
</div>
```
