import React from 'react'

import Card from './component/card'
import User from './component/User'

const App = () =>{

  const jobs = [
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/google.svg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazon.svg",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoft.svg",
    company: "Microsoft",
    datePosted: "1 week ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/meta.svg",
    company: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apple.svg",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/netflix.svg",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobe.svg",
    company: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/salesforce.svg",
    company: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/uber.svg",
    company: "Uber",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/airbnb.svg",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Remote, India",
  },
];

console.log(jobs)


  return(
    <div className ='parent'>
     

    {
      jobs.map(function(elem , idx){
        return  <div key={idx}>
        <Card company = {elem.company }
        post={elem.post}
        postDate = {elem.datePosted}
        logo = {elem.brandLogo}
        jobType ={elem.tag1}
        level = {elem.tag2}
        salary ={elem.pay}
        location={elem.location}

        />
        </div>
      })

      
    }

   
      
   </div>
    
  )
}

export default App;
