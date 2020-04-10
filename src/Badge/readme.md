
Badge example:

```js
import { Notifications, Star } from '../icons/index';
import Grid from '../Grid';
<Grid auto>
  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Notifications/>
    <Badge/>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Notifications/>
    <Badge>9</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Notifications/>
    <Badge>10</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Notifications/>
    <Badge>100</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
    <Notifications/>
    <Badge>9999</Badge>
  </div>

  <div style={{ position: 'relative', width: '20px', height: '20px'}}>
      <Notifications/>
      <Badge icon={<Star/>}/>
  </div>
</Grid>
```
