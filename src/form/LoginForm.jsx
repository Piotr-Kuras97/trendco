import React, {useState} from 'react';

import { loginValidationSchema } from './validation'
import { useFormik } from "formik";
import { Button, TextField, FormControl, Input, InputLabel, InputAdornment, IconButton, FormHelperText } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Link, useNavigate, redirect } from 'react-router-dom';

import LogoContainer from "../components/LogoContainer";
import Logo from '../assets/Standard Logo Files/Original on Transparent.png'

import { useAppContext } from "../utils/context";

function LoginForm(){
    // pokazywanie hasła
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    // cofnięcie do poprzedniej strony po zalogowaniu
    const navigate = useNavigate();


    // formik - dane do logowania pod formik.values
    const formik = useFormik({
        initialValues: {
            loginUsername: '',
            loginPassword: '',
        },
        validationSchema: loginValidationSchema,

        // onSubmit, działa przy wysyłaniu
        onSubmit: (values, {resetForm}) => {
            resetForm()
            navigate(-1);
            setIsLogged(true)
            setUsername(formik.values.loginUsername)
        }
    })

    // pobranie czy użytkownik jest już zalogowany, wtedy się komponent nie wyświetli
    const { setIsLogged, setUsername } = useAppContext()

    return ( 
        <div className='form__container'>

            {/* Logo na telefony */}
            <LogoContainer />

            {/* Panel boczny na większe ekrany */}
            <div className="form__desktop">
                <h2 className="form__desktop--title">Witaj!</h2>
                <p className="form__desktop--text">Nie trać ani chwili - zaloguj się i eksploruj świat TrendCo</p>
                <div className="form__desktop--image-container">
                    <Link to='/'><img src={Logo} alt="" /></Link>
                </div>
                <h4 className="form__desktop--slogan">PASJA. <br /> TO WIĘCEJ NIŻ WSZYSTKO.</h4>
            </div>

            {/* Formularz */}
            <div className="form">
                <form onSubmit={formik.handleSubmit} className='form__form'>
                    <h3 className="form__title">Zaloguj się</h3>

                    {/* Nazwa użytkownika */}
                    <TextField 
                        fullWidth
                        variant="standard"
                        margin="normal"
                        id="loginUsername"
                        name="loginUsername"
                        label="Nazwa użytkownika"
                        value={formik.values.loginUsername}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.loginUsername && Boolean(formik.errors.loginUsername)}
                        helperText={formik.touched.loginUsername && formik.errors.loginUsername}
                    />

                    {/* Hasło */}
                    <FormControl fullWidth margin="dense">
                        <InputLabel htmlFor="loginPassword" variant="standard">Hasło</InputLabel>
                        <Input 
                            type={showPassword ? 'text' : 'password'}
                            id="loginPassword"
                            name="loginPassword"
                            value={formik.values.loginPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                            }
                        />

                        {formik.touched.loginPassword && formik.errors.loginPassword && (
                            <FormHelperText error variant='standard'>{formik.errors.loginPassword}</FormHelperText>
                        )}
                    </FormControl>

                    {/* Przycisk do logowania i wysyłki formularza */}
                    <Button 
                        type="submit" 
                        fullWidth 
                        variant="contained" 
                        style={{ marginTop: '20px' }}>
                            Zaloguj
                    </Button> 

                    <p className="form__register">Nie masz jeszcze konta? <Link to='/register'>Zarejestruj się</Link></p>
                </form>
            </div>
        </div>
     );
}

export default LoginForm;