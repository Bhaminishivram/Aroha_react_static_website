
import './App.css';
import React from 'react';
import{Route, Switch} from "react-router-dom";
import Homepage from './components/homepage';
import Footer from './components/footer'; 
import AboutLearning360 from './components/aboutlearning360';
import NavBar from './components/navbar';
import AppsInPlatform from './components/appsinplatform'; 
import AboutMy360 from './components/aboutmy360';
import SalesAnalytics from './components/salesanalytics';
import Cashflowanalytics from './components/cashflowanalytics';

function App() {
  return (
    <React.Fragment>
      <NavBar/>

      <main role="main" > 

        <Switch> 
      
        <Route path="/aboutLearning" component={AboutLearning360} /> 
        <Route path="/appsinlearning" component={AppsInPlatform} />
        <Route path="/aboutMy360" component={ AboutMy360} /> 
        <Route path="/salesAnalytics" component={SalesAnalytics} />
       <Route path="/financialAnalytics" component={Cashflowanalytics} /> 
       <Route path="/home" component={Homepage} />
       <Homepage/>
       

          

         

        </Switch> 

      </main>


      <Footer />

    </React.Fragment>
  );
}

export default App;