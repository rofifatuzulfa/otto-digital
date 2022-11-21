import React from 'react';
import { Row, Form, Button } from 'react-bootstrap';
import "../styles/cards.css";
import UploadFile from './UploadFile';

const Cards = () => {
  return (
    <div className='box d-flex justify-content-center'>
        <div className='cards bg-white'> 
            <div className='border-bottom'>
                <h4>Gift Card</h4>
            </div>
            <div className='mt-3 pb-2 border-bottom'>
                <Form>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>File Upload</Form.Label>
                    <UploadFile />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Dear</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='w-50'/>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" as="textarea" className='w-50' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>From</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='w-50' />
                    </Form.Group>
                </Form>
            </div>
            <div className='d-flex justify-content-center mt-4'>
                <Button variant="success">Download</Button>
            </div>
        </div>
    </div>
  )
}

export default Cards