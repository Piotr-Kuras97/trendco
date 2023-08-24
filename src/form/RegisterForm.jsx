import React, {useState} from 'react';

import { registerValidationSchema } from './validation'
import { useFormik } from "formik";
import { Button, TextField, Checkbox, FormControlLabel, FormHelperText, Input, InputLabel, InputAdornment, FormControl, IconButton} from "@mui/material";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import LogoContainer from "../components/LogoContainer";
import Logo from '../assets/Standard Logo Files/Original on Transparent.png'
import { Link } from "react-router-dom";

function RegisterForm() {

    // pokazywanie hasła 

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show)
  
    const handleMouseDownPassword = (e) => {
      e.preventDefault();
    };

    // formik, na submicie mają być wysyłane formik.values

    const formik = useFormik({
        initialValues: {
            username: '',
            name: '',
            surname: '',
            birthdate: '00:00:00',
            email: '',
            password: '',
            confirmPassword: '',
            code: '',
            terms: false,
        },
        validationSchema: registerValidationSchema,

        // onSubmit, działa przy wysyłaniu
        onSubmit: (values, {resetForm}) => {
            resetForm()
        }
    })

    return ( 
        <>
            <div className="form__container">

                {/* logo na mobilne urządzenia */}
                <LogoContainer />

                {/* panel boczny na większe ekrany */}

                <div className="form__desktop">
                    <h2 className="form__desktop--title">Witaj!</h2>
                    <p className="form__desktop--text">30 sekund - tyle dzieli Cię od zanurzenia się w świat ofert na TrendCo</p>
                    <div className="form__desktop--image-container">
                        <Link to='/'><img src={Logo} alt="" /></Link>
                    </div>
                    <h4 className="form__desktop--slogan">PASJA. <br /> TO WIĘCEJ NIŻ WSZYSTKO.</h4>
                </div>

                {/* cześć formularza */}

                <div className="form">
                    <form onSubmit={formik.handleSubmit} className="form__form">
                        <h3 className="form__title">Załóż darmowe konto</h3>

                        {/* Nazwa użytkownika - wymagana */}

                        <TextField 
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="username"
                            name="username"
                            label="Nazwa użytkownika"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />

                        {/* Imię - wymagane */}

                        <TextField 
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="name"
                            name="name"
                            label="Imię"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        {/* Nazwisko - niewymagane */}

                        <TextField 
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="surname"
                            name="surname"
                            label="Nazwisko (opcjonalnie)"
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.surname && Boolean(formik.errors.surname)}
                            helperText={formik.touched.surname && formik.errors.surname}
                        />

                        {/* Data urodzenia - wymagana */}

                        <TextField 
                            type='date'
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="birthdate"
                            name="birthdate"
                            label="Podaj date urodzenia"
                            value={formik.values.birthdate}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.birthdate && Boolean(formik.errors.birthdate)}
                            helperText={formik.touched.birthdate && formik.errors.birthdate}
                        />

                        {/* Email - wymagany */}

                        <TextField 
                            type="email"
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="email"
                            name="email"
                            label="Adres e-mail"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />

                        {/* Hasło - wymagane */}

                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="password" variant="standard">Hasło</InputLabel>
                            <Input 
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={formik.values.password}
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

                            {formik.touched.password && formik.errors.password && (
                                <FormHelperText error variant='standard'>{formik.errors.password}</FormHelperText>
                            )}
                        </FormControl>
                        
                        {/* Powtórz hasło - wymagane */}

                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="confirmPassword" variant="standard">Powtórz hasło</InputLabel>
                            <Input 
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="cofirmPassword"
                                name="confirmPassword"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />

                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <FormHelperText error variant='standard'>{formik.errors.confirmPassword}</FormHelperText>
                        )}
                        </FormControl>

                        {/* Kod polecająego - niewymagane */}

                        <TextField 
                            fullWidth
                            variant="standard"
                            margin="dense"
                            id="code"
                            name="code"
                            label="Kod polecającego (opcjonalnie)"
                            value={formik.values.code}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.code && Boolean(formik.errors.code)}
                            helperText={formik.touched.code && formik.errors.code}
                        />

                        {/* Zgody - wymagane */}

                        <FormControlLabel
                            control={
                            <Checkbox
                                size="large"
                                name="terms"
                                checked={formik.values.terms}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            }
                            label="Akceptuj regulamin oraz politykę prywatności"
                        />
                        {formik.touched.terms && formik.errors.terms && (
                            <FormHelperText error margin="dense">{formik.errors.terms}</FormHelperText>
                        )}

                        {/* Przycisk do rejestracji */}

                        <Button 
                            type="submit" 
                            fullWidth 
                            variant="contained" 
                            style={{ marginTop: '20px' }}
                        >Zarejestruj</Button> 

                        <p className="form__login">Masz już konto? <Link to='/login'>Zaloguj się</Link></p>

                    </form>


                </div>
            </div>
        </>
     );
}

export default RegisterForm;