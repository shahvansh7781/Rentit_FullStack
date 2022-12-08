import axios from "axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get("/myapp/admin/users");
    dispatch({ type: "getAllUsersSuccess", payload: data.allUsers });
  } catch (error) {
    dispatch({
      type: "getAllUsersFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllBookings = () => async (dispatch) => {
try {
  dispatch({type:"getAllBookingsRequest"});
  const {data} = await axios.get("/myapp/admin/bookings");
  dispatch({type:"getAllBookingsSuccess",payload:data.allBookings})
} catch (error) {
  dispatch({type:"getAllBookingsFailure",payload:error.response.data.message})
}
}

export const getAllCarsAdmin = () => async (dispatch) => {
  try {
    dispatch({type:"getAllCarsAdminRequest"});
    const {data} = await axios.get("/myapp/cars");
    dispatch({type:"getAllCarsAdminSuccess",payload:data.cars})
  } catch (error) {
    dispatch({type:"getAllCarsAdminFailure",payload:error.response.data.message})
  }
}

export const deleteCar = (id) => async (dispatch) => {
try {
  dispatch({type:"deleteCarRequest"});
  const {data} = await axios.delete(`/myapp/admin/car/${id}`);
  dispatch({type:"deleteCarSuccess",payload:data.message})
} catch (error) {
  dispatch({type:"deleteCarFailure",payload:error.response.data.message})
}
}