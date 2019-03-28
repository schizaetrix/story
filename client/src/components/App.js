// -------------------------------------------------
import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// -------------------------------------------------
import '../styles/App.css'
import { fetchUser } from '../actions'
import Header from './Header'
import Landing from './Landing'
import StoryTree from './trees/StoryTree'
import StoryNew from './StoryNew'
import history from '../history'
// -------------------------------------------------

class App extends Component {
    componentDidMount () {
        this.props.fetchUser()
    }
    render () {
        return (
            <div>
                <Router history={history}>
                    <div className="background-gradient">
                        <Header />
                        <Switch>
                            <Route 
                                path='/' exact
                                component={Landing} 
                            />
                            <Route 
                                path='/storytree' exact
                                component={StoryTree} 
                            />
                            <Route 
                                path='/storynew' exact
                                component={StoryNew} 
                            />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(
    null, 
    { fetchUser }
)(App)
// -------------------------------------------------