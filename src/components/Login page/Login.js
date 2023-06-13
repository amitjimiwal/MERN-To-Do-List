import { useRef } from 'react';
import { useFormik } from 'formik';
import LoadingBar from 'react-top-loading-bar'
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Login = ({toggle}) => {
      const ref=useRef(null)
      const {values,handleChange,handleSubmit} = useFormik({
            initialValues: {
              email: '',
              password: '',
            },
            onSubmit:async (values) => {
              console.log(JSON.stringify(values))
              ref.current.continuousStart();
              ref.current.complete()
              const {data}=await axios.post('http://localhost:4000/api/v1/login',JSON.stringify(values),{
                headers:{
                  "Content-Type":"application/json"
                },
                withCredentials:true
              })
              console.log(data)
                    // alert(JSON.stringify(values, null, 2));
              // toast.success(data.message)
            },
          });
  return (
    <div className=" w-100 h-75 d-flex justify-content-center align-items-center">
        <LoadingBar color='red' ref={ref} />
      <form className="w-50" onSubmit={(e)=>{
        toast.success("Hurray")
        e.preventDefault()
        handleSubmit()
      }}> 
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" class="form-control" placeholder="Enter your Email" required onChange={handleChange} name="email" value={values.email}/>
        </div>
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
            Password
       </label>
          <input type="password" id="form2Example2" class="form-control" placeholder="Enter your password" required onChange={handleChange} name="password" value={values.password}/>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div class="text-center">
          <p>
            Not a member? <span onClick={toggle} className="text-primary text-decoration-underline cursor-pointer" role="button">Register</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
