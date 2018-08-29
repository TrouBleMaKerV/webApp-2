import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import threeVariation4 from './threeNumVariation4'
import threeVariation3 from './threeNumVariation3'
import threeVariation2 from './threeNumVariation2'
import threeVariation1 from './threeNumVariation1'
import speculation1 from './speculation1'
import speculation2 from './speculation2'
import speculation3 from './speculation3'
import speculationMenu from './speculationMenu'
import speculation4 from './speculation4'
import triangleNum12 from './triangleNum12'
import triangleNum13 from './triangleNum13'
import triangleNum14 from './triangleNum14'
import triangleNum23 from './triangleNum23'
import triangleNum24 from './triangleNum24'
import triangleNum34 from './triangleNum34'
import triangleMenu from  './triangleMenu'
import threeNumMenu from './threeNumMenu'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
ReactDOM.render(
    (   <Router>
            <div>
                <Route path="/speculation4" component ={ speculation4 }/>
                <Route path="/speculation4" component ={ speculationMenu }/>
                <Route path="/speculation3" component ={ speculation3 }/>
                <Route path="/speculation3" component ={ speculationMenu }/>
                <Route path="/speculation2" component ={ speculation2 }/>
                <Route path="/speculation2" component ={ speculationMenu }/>
                <Route path="/speculation1" component ={ speculation1 }/>
                <Route path="/speculation1" component ={ speculationMenu }/>
                <Route path="/ThreeVariation4" component ={ threeNumMenu }/>
                <Route path="/ThreeVariation4" component ={ threeVariation4 }/>
                <Route path="/ThreeVariation3" component ={ threeNumMenu }/>
                <Route path="/ThreeVariation3" component ={ threeVariation3 }/>
                <Route path="/ThreeVariation2" component ={ threeNumMenu }/>
                <Route path="/ThreeVariation2" component ={ threeVariation2 }/>
                <Route path="/ThreeVariation1" component ={ threeNumMenu }/>
                <Route path="/ThreeVariation1" component ={ threeVariation1 }/>
                <Route path="/TriangleNum12" component ={ triangleNum12 }/>
                <Route path="/TriangleNum12" component ={ triangleMenu }/>

                <Route path="/TriangleNum13" component ={ triangleNum13 }/>
                <Route path="/TriangleNum13" component ={ triangleMenu }/>

                <Route path="/TriangleNum14" component ={ triangleNum14 }/>
                <Route path="/TriangleNum14" component ={ triangleMenu }/>

                <Route path="/TriangleNum23" component ={ triangleNum23 }/>
                <Route path="/TriangleNum23" component ={ triangleMenu }/>

                <Route path="/TriangleNum24" component ={ triangleNum24 }/>
                <Route path="/TriangleNum24" component ={ triangleMenu }/>

                <Route path="/TriangleNum34" component ={ triangleNum34 }/>
                <Route path="/TriangleNum34" component ={ triangleMenu }/>
                <Route path="/App" component ={ App }/>
            </div>
        </Router>
    ),document.getElementById('root')
);
registerServiceWorker();
