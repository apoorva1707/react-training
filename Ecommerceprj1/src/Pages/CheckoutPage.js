import React,{useContext} from 'react'
import {useFormik} from 'formik';
import '../Formiik.css';
import AppContext from '../Context/AppContext';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";
import toast from 'react-hot-toast';
 function CheckoutPage() {

  const payment = ["Debit/Credit Card","Net-Banking","UPI","Cash On Delivery", "Wallet"]
  let appContext = useContext(AppContext);
  let navigate = useNavigate();
  const formik = useFormik({
      initialValues:{
        fname:"",
        lname:"",
        email:"",
        company:"",
        address:"",
        city:"",
        country:"",
        phone:""

      },
      onSubmit:function(values){
        console.log(values);
        localStorage.setItem('orderDetails',JSON.stringify(values)) 
        toast.success("Order placed successfully")
        appContext.saveOrder(values);
        navigate('/')

        appContext.setCartItems([]) 
      },
      validationSchema:Yup.object({
        fname:Yup.string().required('First Name is required').matches(/^[aA-zZ\s]+$/,"Only alphabets are allowed"),
        email:Yup.string().email("Please enter a valid email").required(),
        address:Yup.string().required(),
        payment:Yup.string().required("Select a payment option"),
      
      })
    });
    return(
    <div className='form-handler shadow-2xl'>
     <p className='font-bold'> Contact Information</p> <br></br><span>Already have an account?<a href="#">Log in</a></span>
          <form onSubmit={formik.handleSubmit}>
             {  /*For Email */}   

             <input type="email" placeholder='Email'
             className={`${formik.touched.email && formik.errors.email? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.email} 
              name="email" 
              id="email" />
              {/*Error For Email */}
               {formik.touched.email && formik.errors.email && (
                    <span className="error">{formik.errors.email}</span>
                 )}
             <br></br>
           <p className='font-bold'>Shipping Address</p>
           
        
         { /*</form> <div class="grid grid-cols-2">
              <div> */}
            {/*For First Name */}
            <div className="grid1">
              <div>
                 <input type="text" placeholder='First Name'
             className={`${formik.touched.fname && formik.errors.fname? 'red-border': 'grey-border'}`} 
             onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.fname} 
              name="fname" 
              id="fname" />
            </div>
        
        {/*Error For First Name */}
        {formik.touched.fname && formik.errors.fname && (
            <span className="error">{formik.errors.fname}</span>
        )} &nbsp;&nbsp;
        {/*For Last Name */}
      <div>
        <input type="text" placeholder='Last Name'
             className={`${formik.touched.lname && formik.errors.lname? 'red-border': 'grey-border'}`} 
             onChange={formik.handleChange}
              onBlur={formik.handleBlur} 
              value={formik.values.lname} 
              name="lname" 
              id="lname" />
        </div>
        </div>
        {/*Error For Last Name */}
        {formik.touched.lname && formik.errors.lname && (
            <span className="error">{formik.errors.lname}</span>
        )}

        <br></br>
      {/*For company */}
        <input type="text" placeholder='Company(optional)'
             className={`${formik.touched.company && formik.errors.company? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.company} 
              name="company" 
              id="company" />
       <br></br>
          {/*For address*/}
        <textarea placeholder='Address' 
             className={`${formik.touched.address && formik.errors.address? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.address} 
              name="address" 
              id="address" />
<br></br>
{formik.touched.address && formik.errors.address && (
            <span className="error">{formik.errors.address}</span>
        )}

         <div className="grid1 space-x-3">
          <div>
              {/*For city*/}
        <input type="text" placeholder='City' 
             className={`${formik.touched.city && formik.errors.city? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.city} 
              name="city" 
              id="city" />

          </div>
          <div>
            { /*For Country */}
            <input type="text" placeholder='Country' 
             className={`${formik.touched.country && formik.errors.country? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.country} 
              name="country" 
              id="country" />
              </div>
              </div>

<br/>
                 { /*For Phone */}
            <input type="text" placeholder='Phone(optional)' 
             className={`${formik.touched.phone && formik.errors.phone? 'red-border': 'grey-border'}`} 
              onChange={formik.handleChange} 
              onBlur={formik.handleBlur} 
              value={formik.values.phone} 
              name="phone" 
              id="phone" />
<br></br>
<p className="font-bold">Payment Method</p>
           {/* Payment method */}
             <select name="payment" id="payment" placeholder='Payment method'
             className={`${formik.touched.payment && formik.errors.payment? 'red-border': 'grey-border'}`} 
             onChange={formik.handleChange}
              onBlur={formik.handleBlur}
               value={formik.values.payment}>
               <option value="">Select a Payment Method</option>
                {payment.map((payment,index) => {
                    return(
                        <option value={payment} key={index}>
                            {payment}
                        </option>
                    );
                })}

             </select>
             {/*Error For Payment */}
        {formik.touched.payment && formik.errors.payment && (
            <span className="error">{formik.errors.payment}</span>
        )}
             <br></br>
          
           
          {/* //submit form */}
          
          <button className="bb2" type="submit">Complete Order</button>
         </form>
         </div>
    
)}
export default CheckoutPage;

