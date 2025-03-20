import { useEffect } from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
export default function TABLE(cba){
    let [tableData,setTableData]=useState(null);
    useEffect(()=>{
        fetch('https://67d7ed1a9d5e3a10152c9b50.mockapi.io/student/details', {
            method: 'GET',
            headers: {'content-type':'application/json'},
          }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
          }).then(tasks => {
            setTableData(tasks.reverse())
          }).catch(error => {
            console.log(error)
          })
    },[cba.change])
    console.log(tableData);

    const deleteUser=(id)=>{
      
fetch(`https://67d7ed1a9d5e3a10152c9b50.mockapi.io/student/details/${id}`, {
  method: 'DELETE',
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with deleted task
  alert("deleted successfully");
  cba.setChange(!cba.change)
}).catch(error => {
  // handle error
})

// const createUser=()=>{
  
//   fetch('https://67d7ed1a9d5e3a10152c9b50.mockapi.io/student/details', {
//     method: 'POST',
//     headers: {'content-type':'application/json'},
//     // Send your data in the request body as JSON
//     body: JSON.stringify(cba.newData)
//   }).then(res => {
//     if (res.ok) {
//         return res.json();
//     }
//     // handle error
//   }).then(task => {
//     // do something with the new task
//     alert("Added successfully")
//     cba.setChange(!cba.change)
//     alert
//   }).catch(error => {
//     // handle error
//   })
  
// }
    }
    return(
        <>
        <button onClick={()=>cba.click()} className='p-1 ps-3 pe-3 br-5 border-radius-3 bg-warning'>Add</button>
            <Table striped bordered hover variant="dark">
      <thead className='text-center'>
        <tr>
          <th>Serial No</th>
          <th>First Name</th>
          <th>EmailId</th>
          <th>PhoneNo</th>
          <th>Qualification</th>
          <th>Location</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {tableData&&tableData.map((item,i)=>{
            return(
                <tr>
          <td>{i+1}</td>
          <td>{item.name}</td>
          <td>{item.emailid}</td>
          <td>{item.phoneNo}</td>
          <td>{item.qualification}</td>
          <td>{item.location}</td>
          <td><button onClick={()=>cba.click(item)} className='p-1 ps-3 pe-3 border-radius-3 bg-success'>Edit</button>
           <button onClick={()=>deleteUser(item.id)} className='p-1 ps-3 pe-3 br-5 border-radius-3 bg-danger'>Delete</button>
           </td>
        </tr> 
            )
        })}
        
    
      </tbody>
            </Table>
        </>
    )
}