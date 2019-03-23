// -------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

// -------------------------------------------------
import '../styles/App.css'
import Header from './Header'
import Landing from './Landing'
import StoryTree from './trees/StoryTree'
// -------------------------------------------------

const StoryNew = () => <h2>StoryNew</h2>

class App extends Component {
    componentDidMount () {
        this.props.fetchUser()
    }
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div className="background-gradient">
                        <Header />
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
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(null, actions)(App)
// -------------------------------------------------