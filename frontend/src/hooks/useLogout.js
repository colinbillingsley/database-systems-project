import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // dispatch logout function
        dispatch({type:'LOGOUT'})
        // remove user from storage
        localStorage.removeItem('user')
    }
    
    return {logout}
}