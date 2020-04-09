
Badge example:

```js
import Icon from '../Icon';
import Grid from '../Grid';
<Grid auto>
  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Icon name='notifications'/>
    <Badge/>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Icon name='notifications'/>
    <Badge>9</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Icon name='notifications'/>
    <Badge>10</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Icon name='notifications'/>
    <Badge>100</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Icon name='notifications'/>
    <Badge>9999</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
      <Icon name='notifications'/>
      <Badge icon='star'/>
  </div>
</Grid>
```
