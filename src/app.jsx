import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';

const LazyHome = React.lazy(() =>
    import(
        /* webpackChunkName: "home" */
        './views/Home/index.jsx'
    )
);

const LazyUser = React.lazy(() =>
    import(
        /* webpackChunkName: "user" */
        './views/User/index.jsx'
    )
);

const Loading = () => <div>Loading...</div>;

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/home" component={LazyHome}></Route>
                    <Route path="/user" component={LazyUser}></Route>
                    <Redirect exact from="/" to="/home" />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default App;
