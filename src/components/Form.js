import React from 'react';


const Form =(props)=> {
    
        return (
            <div>
               <form onSubmit={props.getWeather}>
               <input  className="first-input"  type='text'  name="city" placeholder="City...."/>
                <input className="second-input" type='text'  name="country" placeholder="Country...."/>
               
                <button>Get Weather Info</button>
               </form>
            </div>
        )
    
}

export default Form;