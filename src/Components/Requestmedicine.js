import React from 'react'
import '../cssFiles/requestmedicine.css'


import { useState } from 'react';
import axios from 'axios'
const Requestmedicine = () => {
    const [post, setpost] = useState({
        supplier_name: '', shopname: '', email: '', contact: '', drugname: '', quantity: '', order_date: '', status: 'Pending'
    })



    const clearInput = () => {
        setpost({
            supplier_name: '', shopname: '', email: '', contact: '', drugname: '', quantity: '', order_date: '', status: 'Pending'
        })
    }
    const savepost = async (e) => {
        try {
            e.preventDefault()
            await axios.post('http://localhost:4000/user/postmedicine', post)
        }
        catch (error) {
            alert(error)
            console.log("error")
        }

    }
    const datafield = (e) => {
        setpost({
            ...post, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='outerdiv'>
            <div className='box'>


                <form className='ppp'>
                  <h3>REQUESTING MEDICNE</h3>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address :</label>
                        <input type="email" class="form-control" onChange={(e) => datafield(e)} required name="email" value={post.email} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Supplier Name :</label>
                        <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="supplier_name" value={post.supplier_name} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Shop Name :</label>
                        <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="shopname" value={post.shopname} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contact :</label>
                        <input type="number" class="form-control" onChange={(e) => datafield(e)} required name="contact" value={post.contact} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Drug name :</label>
                        <input type="text" class="form-control" onChange={(e) => datafield(e)} required name="drugname" value={post.drugname} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Quantity :</label>
                        <input type="number" class="form-control" onChange={(e) => datafield(e)} required name="quantity" value={post.quantity} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Deliver date</label>
                        <input type="date" class="form-control" onChange={(e) => datafield(e)} required name="order_date" value={post.order_date} />
                    </div>

                    <button class=" sub btn btn-primary" onClick={savepost}>Apply for medicine</button>
                </form>
                {/* <div class="container" id='content'>
          <span filter-content="S" >request  medicine</span>
    
          <form >
            <div class="group">
              <label>Supplier Name :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="supplier_name" value={post.supplier_name} />
              <span class="highlight"></span>
              <span class="bar"></span>
    
            </div>
    
            <div class="group">
              <label>Shop Name :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="shopname" value={post.shopname} />
              <span class="highlight"></span>
              <span class="bar"></span>
            </div>
    
            <div class="group">
              <label>Your Email :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="email" value={post.email} />
              <span class="highlight"></span>
              <span class="bar"></span>
            </div>
    
            
    
            <div class="group">
              <label>Contact :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="contact" value={post.contact} />
              <span class="highlight"></span>
              <span class="bar"></span>
    
            </div>
    
            <div class="group">
              <label>Drug name :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="drugname" value={post.drugname} />
              <span class="highlight"></span>
              <span class="bar"></span>
    
            </div>
    
            <div class="group">
              <label>Quantity :</label>
              <input type="text" onChange={(e) => datafield(e)} required name="quantity" value={post.quantity} />
              <span class="highlight"></span>
              <span class="bar"></span>
    
            </div>
    
            <div class="group">
              <label>Deliver date</label>
              <input type="date" onChange={(e) => datafield(e)} required name="order_date" value={post.order_date} />
              <span class="highlight"></span>
              <span class="bar"></span>
            </div>
    
            <button class="custom-btn btn-3" onClick={savepost}>Apply for medicine</button>
          </form>
          <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
            </filter>
          </svg>
        </div> */}
            </div>
        </div>
    );
}

export default Requestmedicine;