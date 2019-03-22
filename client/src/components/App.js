// -------------------------------------------------
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
// -------------------------------------------------

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const StoryNew = () => <h2>StoryNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/storytree' component={Dashboard} />
                        <Route exact path='/storynew' component={StoryNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

// -------------------------------------------------
export default connect(null, actions)(App)
// -------------------------------------------------