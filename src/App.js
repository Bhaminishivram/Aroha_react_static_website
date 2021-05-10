
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
import DataManagment from "./components/datamanagment";
import DataIntegration from './components/dataintegration';
import DataReport from './components/datareport';
import OpenSource from './components/openSource';
import Digitalization from './components/digitalization'; 
import DataWareHouse from './components/datawarehouse';
import CloudTechnologies from './components/cloudtechnologies';
import MobileTechnologies from './components/mobileTechnologies';
import Consulting_services from './components/consulting_services';
import Knowledge_Services from './components/knowledge_Services';
import Project_Service from './components/projectService';
import Blog_EltActivity from './components/blog-EltActivity';
import Blog_Storytelling from './components/blog-storytelling';
import Blog from './components/blog';
import Contact from './components/contact';
import Books from './components/books';
import Books1 from './components/books1';
import Approach from './components/approach';
import Culture from './components/culture'; 
import Team from './components/team'; 
import Career from './components/career';
import Career2 from './components/career2';
import Career1 from './components/career1'; 
import Positions from './components/positions'; 
import Blog_DataCitizen from './components/blog-datacitizen';
import Blog_platform from './components/blog-platform';
import Blog_Conversational from './components/blog_conversational';
import Blog_datamoderization from './components/blog-datamoderization';
import Blog_database from './components/blog-database';
import Blog_visulization from './components/blog-visulization';
import Blog_single from './components/blog-single';
import Blog_culture from './components/blog-culture';
import Blog_dataScience from './components/blog-dataScience';
import Blog_datalayer from './components/blog-datalayer';
import Blog_rio from './components/blog-rio';
import Blog_insight from './components/blog-insight';
import Blog_business from './components/blog-business';


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
       <Route path="/dataManagment" component={DataManagment}/> 
       <Route path="/dataIntegration" component={ DataIntegration} /> 
       <Route path="/datareport" component={DataReport} /> 
       <Route path="/openSource" component={OpenSource} /> 
       <Route path="/digitalTechnologies" component={Digitalization} />   
       <Route path="/dataWarehouse" component={DataWareHouse} />  
       <Route path="/cloudTechnologies" component={CloudTechnologies} />
       <Route path="/mobileTechnologies" component={MobileTechnologies}/>  
       <Route path="/consulting" component={Consulting_services} />
       <Route path="/knowledge" component={ Knowledge_Services}/> 
       <Route path="/projectService" component={Project_Service} />   
       <Route path="/blog-EltActivity" component={Blog_EltActivity}/> 
       <Route path="/blog-storytelling" component={Blog_Storytelling} />
       <Route path="/blog" component={Blog} /> 
       <Route path="/books" component={Books}/> 
       <Route path="/books1" component={Books1}/> 
       <Route path="/approach" component={Approach} /> 
       <Route path="/culture" component={Culture} />
       <Route path="/team" component={Team}/> 
       <Route path="/career" component={Career} /> 
       <Route path="/career1" component={Career1} />
       <Route path="/career2" component={Career2} /> 
       <Route path="/positions" component={Positions} /> 
       <Route path="/blog-datacitizen" component={Blog_DataCitizen}/> 
       <Route path="/blog-platform" component={Blog_platform}/> 
       <Route path="/blog-conversational" component={Blog_Conversational} />
       <Route path="/blog-datamoderization" component={Blog_datamoderization} /> 
       <Route path="/blog-database" component={Blog_database} />  
       <Route path="/blog-visulization" component={Blog_visulization} />  
       <Route path="/blog-single" component={Blog_single} />
       <Route path="/blog-culture" component={Blog_culture}/>
       <Route path="/blog-dataScience" component={Blog_dataScience}/>  
       <Route path="/blog-datalayer" component={Blog_datalayer} /> 
       <Route path="/blog-rio" component={Blog_rio}/> 
       <Route path="/blog-insight" component={Blog_insight} /> 
       <Route path="/blog-business" component={Blog_business} /> 

       <Route path="/contact" component={Contact}/>
       <Route path="/home" component={Homepage} />
       <Homepage/>
       
     </Switch> 
 </main>
     <Footer />
</React.Fragment>
  );
}

export default App;