import React, {useState, useEffect} from "react";
import axios from "axios";
import "./index.css"


const Team = ()=>{
  const [data, setData] = useState([]);
  const loadData =  async ()=>{
    const response = await axios.get("http://localhost:3000/cooperatives");
    setData(response.data);
  };
  useEffect(()=>{
    loadData();
  
  }, []); 
  
return(
  <div style = {{ marginTop: "150px" }}>
    <table className="styled-table">
      <thead>
        <tr>
          <th style={{ textAlign: "center" }}>Nom de la coopérative</th>
          <th style={{ textAlign: "center" }}> Localisation de la coopérative</th>
          <th style={{ textAlign: "center" }}>Contact de la coopérative</th>
          <th style={{ textAlign: "center" }}>Nombre de contrats</th>
          <th style={{ textAlign: "center" }}>Nombre de transactions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index)=> {
          return(
            <tr key = {item.id_coop} >
              <td>{item.nom_coop}</td>
              <td> {item.adress_coop}</td>
              <td>{item.contact_coop}</td>    
              <td>{item.nombre_contrats} </td>
              <td>{item.nombre_transactions}</td>

            </tr>
          )

        })}

      </tbody>
    </table>

  </div>
)
}
export default Team;




