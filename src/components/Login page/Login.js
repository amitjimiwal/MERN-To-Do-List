import { useRef } from "react";
import { useFormik } from "formik";
import LoadingBar from "react-top-loading-bar";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/todoSlice";
import auth from "../../api/auth";

const Login = ({ toggle }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      ref.current.continuousStart();
      ref.current.complete();
      try {
        const output = await auth("login", values);
        if (output.success) {
          toast.success(output.message);
          dispatch(setUser({
            isloggedin:true
          }))
        } else {
          toast.error(output.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    },
  });
  return (
    <div className=" w-100 h-75 d-flex justify-content-center align-items-center">
      <LoadingBar color="red" ref={ref} />
      <form
        className="w-50"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            placeholder="Enter your Email"
            required
            onChange={handleChange}
            name="email"
            value={values.email}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            placeholder="Enter your password"
            required
            onChange={handleChange}
            name="password"
            value={values.password}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div class="text-center">
          <p>
            Not a member?{" "}
            <span
              onClick={toggle}
              className="text-primary text-decoration-underline cursor-pointer"
              role="button"
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
