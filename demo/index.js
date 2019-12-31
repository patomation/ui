import React, { Suspense, lazy } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

import './style.scss'
import './favicon.ico'

import Home from './pages/Home'

import { Page, Button, Grid, Hr, Brand, Loader, Table, Gutter } from '../src'

import Examples from './examples'
import doc from './doc.json'
import Navigation from './components/Navigation'

if (module && module.hot) {
  module.hot.accept()
}

const Layout = withRouter( ({children, location}) => {
  const name = location.pathname.replace('/','')
  const description  = location.pathname !== '/' ? doc['src\\'+name+'\\index.js'].description : null
  const props = location.pathname !== '/' ? doc['src\\'+name+'\\index.js'].props : null

  return (
    <Page
      title={name !== '' ? name : null}
      sidebar={<Navigation />}>

      { description
        ? <p style={{paddingBottom: '1rem'}}>{description}</p>
        : null }

      { children }

      { props ? <h2 style={{paddingTop:'1rem'}}> Props </h2> : null }
      { props
        ? <Table
            style={{
              marginTop: '1rem'
            }}
            header={[
              'Property',
              'Type',
              'Required',
              'Default',
              'Description'
            ]}
            data={ Object.keys(props).map(key => [
              key,
              props[key].type.name,
              `${props[key].required}`,
              props[key].default,
              props[key].description
            ]) } />
        : null }

    </Page>
  )
})


render(
  <BrowserRouter>
    <Suspense fallback={<Loader/>}>
      <Layout>
        <Route exact path='/' component={Home} />
        <Examples/>
      </Layout>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
)
