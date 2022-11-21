import React from 'react'
import "../styles/cards.css";
import { IoCloudUpload } from "react-icons/io5";

const UploadFile = () => {
  return (
    <div>
        <div className='upload py-3 d-flex justify-content-center align-items-center flex-column'>
            <div>
                <IoCloudUpload className='icon' size={30}/>
            </div>
            <div>
                <h6>Browse File</h6>
            </div>
            <div>
                Drag and drop files here
            </div>
            <input type="file" value=""/>
        </div>
    </div>
  )
}

export default UploadFile