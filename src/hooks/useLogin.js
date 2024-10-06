import { useDispatch } from "react-redux";
import {loginSuccess, loginFailure } from '../features/authSlice';

const useLogin = () => {
    const dispatch = useDispatch();

    const login = async (values) => {
        try {
            const user = { username: values.username};
            dispatch(loginSuccess(user));
        }catch (error){
            dispatch(loginFailure('Login failed. Please try again.'))
        }
    };
     
return {login};
};
 
export default useLogin;