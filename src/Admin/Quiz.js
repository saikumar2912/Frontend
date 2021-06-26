import React,{useState} from 'react'
import * as XLSX from "xlsx";
import axios from 'axios'

const Quiz = ({id}) => {
console.log(id)
    const [items, setItems] = useState([]);

    const readExcel = (file) => {
      const promise = new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => {
          const bufferArray = e.target.result;
  console.log( bufferArray)
          const wb = XLSX.read(bufferArray, { type: "buffer" });
    console.log(wb)

          const wsname = wb.SheetNames[0];
          console.log(wsname)
 
          const ws = wb.Sheets[wsname];
          console.log(ws)

          const data = XLSX.utils.sheet_to_json(ws);
  data["bit_id"]=id
  console.log(data)

  resolve(data);
 

        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
      
  
      promise.then((d) => {
       
          console.log(d)
             
        setItems(d);
      });
      

    };
const question=items.map((e)=>{e.bit_id=id
return(e)
})

    console.log(question)
    
    
    const submit=()=>{
    
        axios.post('http://localhost:8000/quiz/addquiz',question)
        .then((res)=>console.log(res.data))
        .catch(error=>error.message)
        } 
  
    return (
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            readExcel(file);
          }}
        />
        <button class="btn btn-primary quiz-btn" onClick={()=>submit()}> add</button>
      </div>
    );
}

export default Quiz
