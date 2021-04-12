import React from 'react'; 
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import Animes from '../container/Animes'; 
import Favoritos from '../container/Favoritos';
import Layout from '../components/Layout';

const App = () =>
(

<BrowserRouter>

<Layout>
    <Switch>
        <Route exact path="/favorites" component={Favoritos} />
        <Route exact path="/" component={Animes} /> 
    
    </Switch>
</Layout>
</BrowserRouter>

);

export default App;