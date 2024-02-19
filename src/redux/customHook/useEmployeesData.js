// useEmployeesData.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setEmployees } from '../slices/employeesSlice';
import myEmployees from "../../data/myData" // Import your employees data

const useEmployeesData = () => {
    const dispatch = useDispatch();
    // console.log(dispatch)
    useEffect(() => {
        // Dispatch setEmployees action with employees data
        dispatch(setEmployees(myEmployees));
    }, [dispatch]);

    return myEmployees;
};

export default useEmployeesData;
