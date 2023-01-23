import React, { createContext, useContext, useState } from "react";
// import { Link } from "react-router-dom";
// Initialize new context for students
// import { useNavigate } from "react-router-dom";
// import { Rooms } from "../components/Rooms";

// const Navigate = useNavigate();

const DateContext = createContext();

// import { withRouter } from "react-router-dom"; // We create a custom hook to provide immediate usage of the student context value (students) in other components
export const useDateContext = () => useContext(DateContext);
// import { Rooms } from "../components/Rooms";
// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const DateProvider = ({ children }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  //   const [username, setUsername] = useState("");

  const onStartDateChange = (e) => {
    const startDateInput = e.target.value;

    setStartDate(startDateInput);
  };

  const onEndDateChange = (e) => {
    const endDateInput = e.target.value;

    setEndDate(endDateInput);
  };
  //   function checkDates() {
  //     if (startDate !== "" && endDate !== "") {
  //     //   <Navigate to="/rooms" replace={true} />;
  //     } else {
  //       alert("please check dates input");
  //       return false;
  //     }
  //   }

  // The value prop expects an initial state object
  return (
    <>
      <DateContext.Provider
        value={{
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          onStartDateChange,
          onEndDateChange,
          //   handleFormSubmit,
        }}
      >
        {/* We render children in our component so that any descendent can access the value from the provider */}
        {children}
      </DateContext.Provider>
    </>
  );
};
