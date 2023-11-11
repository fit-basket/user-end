import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ element: Element, restricted, ...props }) => {
  //   const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  //   useEffect(() => {
  //     if (!currentUser) {
  //       // Redirect to the login page if not authenticated
  //       navigate("/login");
  //     }
  //   }, [currentUser, navigate]);
  console.log("USERRRR", currentUser, restricted, currentUser && restricted);
  if (currentUser && restricted) {
    return <Navigate to="/" />; // Render nothing while the navigation occurs
  }

  return <Element {...props} />;

  //   return (
  //     // restricted = false meaning public route
  //     // restricted = true meaning restricted route
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         currentUser && restricted ? (
  //           <Navigate to="/dashboard" />
  //         ) : (
  //           <Component {...props} />
  //         )
  //       }
  //     />
  //   );
};

export default PublicRoute;
