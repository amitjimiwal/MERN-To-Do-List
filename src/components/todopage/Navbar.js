import React ,{useRef} from "react";
import LoadingBar from "react-top-loading-bar";
import { useDispatch } from "react-redux";
import auth from "../../api/auth";
import { toast } from "react-hot-toast";
import { setUser } from "../../store/todoSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const logout = async () => {
    ref.current.continuousStart();
    ref.current.complete();
    try {
      const output = await auth("logout", {});
      if (output.success) {
        toast.success(output.message);
        dispatch(
          setUser({
            isloggedin: false,
          })
        );
      } else {
        toast.error(output.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <nav className="navbar navbar-expand navbar-light navbar-custom d-flex align-items-center">
      <LoadingBar color="red" ref={ref} />
      <h1 className="navbar-brand">ToD0Web</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item">
            < className="nav-link" href="">
              Profile
            </>
          </li> */}
          <li className="nav-item">
            <button type="button" className="btn btn-info" onClick={logout}>Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
