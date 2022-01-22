import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Label} from './views/Label';
import {Statistics} from './views/Statistics';
import {Money} from './views/Money';
import {NoMatch} from './views/NoMatch';
import {EditLabel} from './views/EditLabel';
import styled from 'styled-components';
import {Echart} from './views/Echart';

const AppWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;
if (document.documentElement.clientWidth > 500) {
  window.alert("请使用手机打开本页面，以保证浏览效果");
}
function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Label/>
          </Route>
          <Route exact path="/tags/:id">
            <EditLabel/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="/statistics/:type">
            <Echart/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
