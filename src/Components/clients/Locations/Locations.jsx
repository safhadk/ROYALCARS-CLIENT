
import React ,{useEffect,useState }from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import axios from '../../../Axios/adminAxios';


function Locations() {
    const [location,setLocation]=useState({})

    const navigate = useNavigate();
    let token = useSelector((state) => state.Admin.Token);


    if (!token) {
        navigate("/admin");
    }

    useEffect(() => {
      axios.get("/locations", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
              console.log(res.data,"response")
              setLocation(res.data)
            })
            .catch((error) => {
                console.log(error.messsage);
            });
    }, []);
    
  return (
    <div class="container-fluid py-5">
    <div class="container pt-5 pb-3">

        <h1 class="display-4 text-uppercase text-center mb-5 bg-warning">Available Locations</h1>
      

        <div class="row" style={{gap:'20px',display:'flex',justifyContent:"center"}}>
     

          
{location.length > 0 && location.map((location,index)=>(
  <div class="card" style={{width: '10rem',padding:'0'}}>
  <img class="card-img-top " src={`/safad/${location.images[0]}`} alt="Card image cap" style={{height:'150px'}} />
  <div class="card-body">
    <h5 class="card-title">{location.location}</h5>
  </div>
</div>
))}



    </div>
</div>
</div>
  )
}

export default Locations