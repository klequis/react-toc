import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import './App.css';
import routes from './toc'

function RouteWithSubRoutes(route) {
  return (
    <Route
      exact
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} title={route.title} />
      )}
    />
  );
}
class App extends Component {
  state = {
    previousEnabled: false,
    nextEnabled: true,
  }
  componentDidMount() {
    this.props.history.push('/home')
  }

  navigate = (direction) => {
    const currPath = this.props.location.pathname
    const currIdx = routes.findIndex(i => i.path === currPath)
    const numRoutes = routes.length -1

    let newIdx
    if (direction === 'previous') {
      newIdx = currIdx - 1
      if (newIdx > -1) {
        this.props.history.push(routes[newIdx].path)
      }
    }

    if (direction === 'next') {
      newIdx = currIdx + 1
      if (newIdx <= numRoutes ) {
        this.props.history.push(routes[newIdx].path)
      }
    }

    this.setState({
      nextEnabled: newIdx < numRoutes,
      previousEnabled: newIdx > 0,
    })

  }

  render() {
    return (
      <div>
        <ul>
          {
            routes.map(route => (
              <li key={route.id} >
                <NavLink
                  to={route.path}
                  activeStyle={{
                    fontWeight: 900,
                    color: 'red',
                  }}
                >
                  {route.title}
                </NavLink>
              </li>
            ))
          }
        </ul>
        <button
          onClick={() => this.navigate('previous')}
          disabled={!this.state.previousEnabled}
        >
          Previous
        </button>
        <button
          onClick={() => this.navigate('next')}
          disabled={!this.state.nextEnabled}
        >
          Next
        </button>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.id} {...route} />
        ))}
      </div>
    );
  }
}

export default withRouter(App);
