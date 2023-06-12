import { useRef } from 'react';
import { useFormik } from 'formik';
import LoadingBar from 'react-top-loading-bar'
const Register = ({toggle}) => {
      const ref = useRef(null)
const {values,handleChange,handleSubmit} = useFormik({
            initialValues: {
              name:'',
              email: '',
              password: '',
            },
            onSubmit:async(values)  => {
                 ref.current.continuousStart();
            //   alert(JSON.stringify(values, null, 2));
              ref.current.complete()
            },
          });
  return (
      <div className=" w-100 h-75 d-flex justify-content-center align-items-center">
            <LoadingBar color='red' ref={ref} />
      <form className="w-50" onSubmit={handleSubmit}>
      <div class="form-outline mb-4">
        <label class="form-label" for="form2Example3">
            Name
          </label>
          <input type="text" id="form2Example3" class="form-control" placeholder="Enter your Name" required onChange={handleChange} name="name" value={values.name}/>
        </div>
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" class="form-control" placeholder="Enter your Email" required  onChange={handleChange} name="email" value={values.email}/>
        </div>
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
            Password
       </label>
          <input type="password" id="form2Example2" class="form-control" placeholder="Enter your password" required onChange={handleChange} name="password" value={values.password}/>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Register
        </button>

        <div class="text-center">
          <p>
            Already a user ? <span onClick={toggle} className="text-primary text-decoration-underline pe-auto" role="button">Login</span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register
