import React, { Suspense, lazy } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

import './style.scss'
import './favicon.ico'

import Home from './pages/Home'

import { Page, Button, Grid, Hr, Brand, Loader, Table, Gutter, Heading, Row } from '../src'

import Examples from './examples'
import doc from './doc.json'
import navigation from './navigation'

if (module && module.hot) {
  module.hot.accept()
}

const Layout = withRouter( ({children, location}) => {
  const name = location.pathname.replace('/','')
  const description  = location.pathname !== '/' ? doc['src\\'+name+'\\index.js'].description : null
  const props = location.pathname !== '/' ? doc['src\\'+name+'\\index.js'].props : null

  return (
    <Page
      title={name !== '' ? name : 'React UI Component Library'}
      sidebar={
        <Grid gap>

          <Row>
            <Link to='/' style={{flexGrow: 1}}><Brand> UI </Brand></Link>
            <a href='https://github.com/patomation/ui' target='_blank'><Button kind='none' title='repo' /></a>
          </Row>

          <Hr/>
          { Object.entries(navigation).map(([category, items]) =>
            <Grid gap key={`navCat-${category}`}>
              <div style={{color: 'gray'}}>{ category }</div>
              { items.map( item =>
                <Link to={`/${ item }`} key={`navLink-${ item }`}>
                  <Button kind='none' style={{marginLeft: '1rem'}}> { item } </Button></Link>
              )}
            </Grid>
          )}
        </Grid>
      }>

      { description
        ? <p>{description}</p>
        : null }

      { children }

      { props ? <Heading Tag='h2'> Props </Heading> : null }
      { props
        ? <Table
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
