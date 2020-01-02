import React from 'react'
import { Page, Code, Gutter, Device, Grid, Skeleton, Heading } from '../../src'

const PageExample = () => {
  return (
    <div>
      <Grid col={2} gap>
        <Heading Tag='h2'>Example</Heading>
        <Heading Tag='h2'>Demo</Heading>
        <Code block={`
          <Page
            title={'Page Title'}
            sidebar={
              // Side Bar Items
            }>

            // Content

          </Page>
          `}/>
        <style>
          {`
          .device h1, nav, main {
            background: rgba(255,255,255,0.4);
            font-size: 0.75rem !important;
          }
        `}
        </style>
        <Device>
          <Page
            title={'Page Title'}
            sidebar={<div style={{ padding: '1rem' }}>
              Side Bar <Gutter/>
              <Skeleton lines={30} />
            </div>}
            style={{ height: 'auto' }}>

            Content <Gutter/>
            <Skeleton lines={30} />

          </Page>
        </Device>

      </Grid>

    </div>
  )
}

export default PageExample
