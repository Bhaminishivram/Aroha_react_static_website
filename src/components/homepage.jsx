import React from 'react';
import Clientslider from './clientsslider';
import Header from './header';
import NavBar from './navbar';
import Our_Values from './our_values';
import Testimonials from './testimonials';
import About from './about';


function Homepage() {
    return (
    <React.Fragment> 
       <Header/> 
       <About/> 
       <Our_Values/> 
       <Testimonials/>
       <Clientslider/>
       
  
  
      </React.Fragment>
    );
  }
  
  export default Homepage;






// class Homepage extends Component {
//     state = {  }
//     render() { 
//         return (   
//             <NavBar/> ,
//             <Header/>, 
//             <Homescreen1/> ,
//             <Our_Values/> ,
//             <Testimonials/>,
//             <Clientslider/>,
//             <Footer/> 
    
//           );
//     }
// }
 
// export default Homepage;