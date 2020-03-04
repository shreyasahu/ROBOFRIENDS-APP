import React, {component} from 'react'
import CardList from './CardList'
import {Robots} from './Robots'
import SearchBox from './SearchBox'
import { render } from '@testing-library/react'
 


 class App extends component {
     constructor() {
        
         super()
         this.state = {
              Robots: Robots,
              searchfield:''
         }
     }
     
    render()
    {
        return  (
            <div className='tc'>
            <h1>ROBOFRIENDS</h1>
            <SearchBox/>
            <CardList Robots= {this.state.Robots}/>
            </div>
        );
    }
   
}

export default App;
