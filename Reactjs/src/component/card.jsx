import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
     <div className="card">
    
      <div className="top">
        <img src={props.logo} />
        <button>Save <Bookmark  size={18}/> </button>

      </div>

      <div className="centre">
        <h3> {props.company}<span>{props.postDate}</span></h3>
        <h2>{props.post} </h2>
        <div className='tag'>
          <h4>{props.jobType}</h4>
          <h4>{props.level}</h4>
        </div>
      </div>
      {/* </div> */}

      <div className="bottom">
        
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location} </p>
          </div>
          <button>Apply Now </button>
      
        

      </div>

     
    </div>
  )
}

export default Card
