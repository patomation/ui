
Card example:

```js padded
import Grid from '../Grid';
import { Star } from '../icons';
<Grid auto>
<Card
  image='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'
  title='Pupper'
>Content</Card>
<Card
  clickable={true}
  image='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'
  title='Clickable'
>Content</Card>
<Card
  icon={<Star/>}
  iconBackground='gold'
  title='Icon'
>Content</Card>
</Grid>

```
