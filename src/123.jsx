//       // validate={values => {
//       //   const errors = {}
//       //   if (!values.email) {
//       //     errors.email = 'Required'
//       //   } else if (
//       //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//       //   ) {
//       //     errors.email = 'Invalid email address'
//       //   }
//       //   (!values.password) && (errors.password = 'Required')
//       //   return errors
//       // }}
//
//       // {(props) => {
//       //   const { values, touched, errors,
//       //     handleChange, handleBlur, handleSubmit, handleReset
//       //   } = props;
//
// const Login = (props) => {}
//   return(
//     <Formik
//       initialValues={
//         { email: "" , password: '' , rememberMe: false }
//       }
//       validate={values => {
//         const errors = {}
//         if (!values.email) {
//           errors.email = 'Required'
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address'
//         }
//         (!values.password) && (errors.password = 'Required')
//         return errors
//       }}
//       onSubmit={async (values) => {
//         console.log(values);
//       }}
//     >
//       {(props) => {
//         const { values, touched, errors,
//           handleChange, handleBlur, handleSubmit, handleReset
//         } = props;
//         return (
//     <LoginWrapper>
//       <form onSubmit={handleSubmit}>
//       <h1>Log In</h1>
//       <InputWrapperStyled>
//         <Input type={'text'}
//                placeholder={'Email'}
//                id="email"
//                value={values.email}
//                onChange={handleChange}
//                onBlur={handleBlur}
//         />
//         <ErrorMessage>
//           &ensp;{errors.email && touched.email && errors.email}
//         </ErrorMessage>
//       </InputWrapperStyled>
//       <InputWrapperStyled>
//         <Input type={'password'}
//                placeholder={'Password'}
//                id="password"
//                value={values.password}
//                onChange={handleChange}
//                onBlur={handleBlur}
//                autocomplete={"current-password"}
//         />
//         <ErrorMessage>
//           &ensp;{errors.password && touched.password && errors.password}
//         </ErrorMessage>
//       </InputWrapperStyled>
//       <label htmlFor="remenberMe">
//         remember me &ensp;
//         <Field type={'checkbox'}  name={'rememberMe'} />
//       </label>
//
//       <ButtonsWrapper>
//         <Button
//           title={'Resset'}
//           bgColor={colors.blueColor}
//           bgColorHover={colors.blueColorHover}
//           onClick={handleReset}
//         />
//         <Button
//           type="submit"
//           title={'Log In'}
//           bgColor={colors.redColor}
//           bgColorHover={colors.redColorHover}
//         />
//       </ButtonsWrapper>
//
//         <span>Dont have an account?<br/>
//           Please run<NavLink to="/registration" style={{ color: colors.blueColor }}> REGISTRATION </NavLink>
//         </span>
//       </form>
//     </LoginWrapper>
//         );
//       }}
//     </Formik>
//   )
// }