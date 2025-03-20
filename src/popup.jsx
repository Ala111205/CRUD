import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export default function POPUP(abc){
    console.log(abc.temp,"-----")
    
    const updateData=()=>{
      
fetch(`https://67d7ed1a9d5e3a10152c9b50.mockapi.io/student/details/${abc.temp.id}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify(abc.temp)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  abc.setChange(!abc.change)
}).catch(error => {
  // handle error
});

abc.boxclose();
    }

    const createUser=()=>{
  
      fetch('https://67d7ed1a9d5e3a10152c9b50.mockapi.io/student/details', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        // Send your data in the request body as JSON
        body: JSON.stringify(abc.temp)
      }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
      }).then(task => {
        // do something with the new task
        alert("Added successfully")
        abc.setChange(!abc.change)
        alert
      }).catch(error => {
        // handle error
      })
      abc.boxclose();
    }
  return (
    <>
      <Modal show={abc.boxshow} onHide={abc.boxclose}>
        <Modal.Header closeButton>
          <Modal.Title>{abc.temp.id?"Edit Data":"Add Data"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                autoFocus
                defaultValue={abc.temp.name}
                onChange={(e)=>abc.setTemp({...abc.temp,name:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                autoFocus
                defaultValue={abc.temp.emailid}
                onChange={(e)=>abc.setTemp({...abc.temp,emailid:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Your Phone No"
                autoFocus
                defaultValue={abc.temp.phoneNo}
                onChange={(e)=>abc.setTemp({...abc.temp,phoneNo:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Qualification"
                autoFocus
                defaultValue={abc.temp.qualification}
                onChange={(e)=>abc.setTemp({...abc.temp,qualification:e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Location"
                autoFocus
                defaultValue={abc.temp.location}
                onChange={(e)=>abc.setTemp({...abc.temp,location:e.target.value})}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={abc.boxclose}>
            Close
          </Button>
          {abc.temp.id?<Button variant="primary" onClick={updateData}>
            Save Changes
          </Button>:<Button variant="success" onClick={createUser}>
            Create
          </Button>}
          
        </Modal.Footer>
      </Modal>
    </>
  );
}