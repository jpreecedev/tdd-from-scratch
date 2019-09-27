import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { NotFound } from "./pages/NotFound"
import { Layout } from "./components/Layout"

require("./global/styles.css")

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Layout>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  </Layout>,
  document.getElementById("root")
)
