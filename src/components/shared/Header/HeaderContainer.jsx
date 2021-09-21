import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUserData } from '../../../redux/authSlice'

const HeaderContainer = () => {

  const isLoggedIn = useSelector((state) => state.auth.isAuth)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(setCurrentUserData({
      userId: null,
      email: null,
      rememberMe: false,
      isAuth: false,
    }))
  }


  return <Header isLoggedIn={isLoggedIn} logOut={logOut}/>

}

export default HeaderContainer