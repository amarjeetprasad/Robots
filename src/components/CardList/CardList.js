import React from 'react'
import Card from "../Card/Card";
import Robots from "../robots";


 const   CardList = ({searchField}) => {
  // const [Robots, setRobots] = useState([]);

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //   .then(res=>res.json())
  //   .then(data=>setRobots(data))
    
  // })

  const filteredRobots=Robots.filter((robot)=>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  
  const roboList=filteredRobots.map((robot)=>{
    return( <Card Robot={robot} key={robot.id}/> );
  })

  if(Robots.length===0)
  {return <h1 style={{color:"#fff"}}>Loading.....</h1>}
  else
  {
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
              roboList
             }
        </div>
    )
  }
}

export default CardList;