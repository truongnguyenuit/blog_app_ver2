import { createContext, useReducer, useEffect } from "react";
import { authReducer } from "../reducers/authReducer";
import setAuthToken from "../untils/setAuthToken";
import axios from 'axios'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null
  })

  useEffect(() => {

    loadUser()

  }, [authState.isAuthenticated])

  //Authentication
  const loadUser = async () => {

    if (localStorage['LocalStorageTokenName']) {
      setAuthToken(localStorage['LocalStorageTokenName'])
      try {
        const response = await axios.get(`http://localhost:5000/api/auth`)
        if (response.data.success) {

          dispatch({
            type: 'SET_AUTH',
            payload: { isAuthenticated: true, user: response.data.user }
          })
        }
      } catch (error) {
        localStorage.removeItem('LocalStorageTokenName')
        setAuthToken(null)
        dispatch({
          type: 'SET_AUTH',
          payload: { isAuthenticated: false, user: null }
        })
      }
    }
    else {
      dispatch({
        type: 'SET_AUTH',
        payload: { isAuthenticated: false, user: null }
      })
    }
  }

  // Login
  const loginUser = async userForm => {
    try {

      const response = await axios.post(`http://localhost:5000/api/auth/login`, userForm)
      if (response.data.success)
        localStorage.setItem('LocalStorageTokenName', response.data.accessToken)

      await loadUser()
      return response.data

    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Register
  const registerUser = async userForm => {
    try {

      const response = await axios.post(`http://localhost:5000/api/auth/register`, userForm)
      if (response.data.success)
        localStorage.setItem('LocalStorageTokenName', response.data.accessToken)

      await loadUser()
      return response.data

    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Logout
  const logoutUser = () => {
    localStorage.removeItem('LocalStorageTokenName')
    dispatch({
      type: 'SET_AUTH',
      payload: { isAuthenticated: false, user: null }
    })
    alert('Logout Successful!')
  }

  // Get UserData
  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth`)
      if (response.data.success) {
        return response.data.user
      } else {
        console.log(response.data)
      }
    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Update User
  const updateUser = async (userForm) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/auth/update`,userForm)
      return response.data.user
    } catch (error) {
      if (error.response.data) return error.response.data
      else return { success: false, message: error.message }
    }
  }

  // Change Password
  const changePassword = async (userForm) => {
    try {
      cons
    }t 
  }

  // Context data
  const authContextData = { loginUser, registerUser, authState, logoutUser, loadUser, getUser, updateUser }

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider