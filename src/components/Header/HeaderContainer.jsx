import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserData } from '../../store/authSlice'
import Header from './Header'
import { setCurrentUserId } from '../../store/currentUserSlice'

const HeaderContainer = () => {

  const isLoggedIn = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const logOut = () => {
    // eslint-disable-next-line no-restricted-globals
    const logOutCheck = confirm('Do you really want to Log Out?')
    if(logOutCheck){
      dispatch(setCurrentUserData({
        currentUserId: null,
        currentUseremail: null,
        rememberMe: false,
        isAuth: false,
      }))
      dispatch(setCurrentUserId(null))
    }
  }

  return <Header isLoggedIn={isLoggedIn} logOut={logOut}/>
}

export default HeaderContainer