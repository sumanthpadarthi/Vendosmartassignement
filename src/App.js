import React from 'react'
import './App.css'
//import Calendar from 'react-calendar';

const App = () => {
  const onclickCreat = ()=>{
    alert("YouHaveaddanitem")
  }
 return (
    <div className='bgContainer'>
      <div className='addnewItemContainer'>
        <p className='addheading'>Add new Item</p> 
        
         <input className='text' type="text" placeholder='movie exsting item'/>
         <img className="crossimage" src="/images/Icon ionic-ios-close.svg" alt="cross"/>
      </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
    <p className='addheading'>Item New</p>
    <input type="text" className='text2'/>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>Attachments</p>
      <p className='addheading'>Drop or Click to add files</p> 
      <input type="text" className='text2' placeholder='Maxmium10Files'/>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
    <p>Description</p>
    <input type="text" className='text2'/>
    </div>
    <hr className='line'/>
    <p style={{color:"blue"}}>DefaultSection</p>
    <hr className='line2'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>AssignUsers</p>
      <p className='addheading'>Selected Users</p>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>Staus</p>
      <label id="todo">Todo</label>
      <input list="browsers" className="browser"/>
     <datalist id="browsers">
      <option value="planning"/>
      <option value="readyto test"/>
      <option value="Reopen"/>
       <option value="Qa Rised Bugs"/>
      </datalist>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>Epic</p>
      <label id="todo">None</label>
      <input list="browsers" className="browser"/>
     <datalist id="browsers">
      <option value="planning"/>
      <option value="readyto test"/>
      <option value="Reopen"/>
       <option value="Qa Rised Bugs"/>
      </datalist>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>ItemType</p>
      <label id="todo">Story</label>
      <input list="browsers" className="browser"/>
     <datalist id="browsers">
      <option value="planning"/>
      <option value="readyto test"/>
      <option value="Reopen"/>
       <option value="Qa Rised Bugs"/>
      </datalist>
    </div>
    <hr className='line'/>
    <div className='addnewItemContainer'>
      <p className='addheading'>Priority</p>
      <label id="todo">None</label>
      <input list="browsers" className="browser"/>
     <datalist id="browsers">
      <option value="planning"/>
      <option value="readyto test"/>
      <option value="Reopen"/>
       <option value="Qa Rised Bugs"/>
      </datalist>
    </div>
    <div>
      <p>StartDate</p>
    </div>
      <hr className='line'/>
      <div>
      <p>EndDate</p>
    </div>
      <hr className='line'/>
      <div>
      <p>Duration</p>
    </div>
      <hr className='line'/>
      <div>
      <p>Estimation points</p>
    </div>
      <hr className='line'/>

      <div>
      <p>Release</p>
    </div>
      <hr className='line'/>

    <div>
      <button onClick={onclickCreat} className='button'>Create</button>
      <button className='button2'>AddMore</button>
      <button className='button2'>Cancle</button>
    </div>
    



   
    

      
      







    </div>
  )
}

export default App