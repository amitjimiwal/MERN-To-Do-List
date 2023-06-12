import "bootstrap/dist/css/bootstrap.min.css"; 
const Login = ({toggle}) => {
  return (
    <div className=" w-100 h-75 d-flex justify-content-center align-items-center">
      <form className="w-50"> 
        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" class="form-control" placeholder="Enter your Email" required/>
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form2Example2">
            Password
       </label>
          <input type="password" id="form2Example2" class="form-control" placeholder="Enter your password" required/>
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
