import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'

import './style.scss'
import './favicon.ico'

import Home from './pages/Home'
import Test from './pages/Test'

import { Header, Page, Button, Grid, Hr, Brand, Table, Heading, Row } from '../src'

import Examples from './examples'
import doc from './doc.json'
import navigation from './navigation'

if (module && module.hot) {
  module.hot.accept()
}


const Layout = withRouter(({ children, location }) => {
  const name = location.pathname.replace('/', '')
  const description = doc['src\\' + name + '\\index.js'] ? doc['src\\' + name + '\\index.js'].description : null
  const props = doc['src\\' + name + '\\index.js'] ? doc['src\\' + name + '\\index.js'].props : null

  return (
    <Page
      title={name !== '' ? name : 'React UI Component Library'}
      sidebar={
        <Grid gap>

          <Row>
            <Link to='/' style={{ flexGrow: 1 }}><Brand> UI </Brand></Link>
            <a href='https://github.com/patomation/ui' rel='noopener noreferrer' target='_blank'><Button kind='none' title='repo' /></a>
          </Row>

          <Hr/>
          { Object.entries(navigation).map(([category, items]) =>
            <Grid gap key={`navCat-${category}`}>
              <div style={{ color: 'gray' }}>{ category }</div>
              { items.map(item =>
                <Link to={`/${item}`} key={`navLink-${item}`}>
                  <Button kind='none'
                    style={{
                      marginLeft: '1rem',
                      ...(name === item ? {
                        fontWeight: 'bold'
                      } : null)
                    }}
                    title={item}/>
                </Link>
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
            props[key].type ? props[key].type.name : null,
            props[key].required ? 'true' : null,
            props[key].defaultValue ? props[key].defaultValue.value : null,
            props[key].description
          ]) } />
        : null }

    </Page>
  )
})

render(
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={Home} />
      <Examples/>
      <Route path='/test' component={Test} />
    </Layout>
  </BrowserRouter>,
  document.getElementById('root')
)
