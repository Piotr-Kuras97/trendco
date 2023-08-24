import React, {useState, useEffect} from "react";

import { addOfferValidationSchema, addOfferCategories, addOfferSubCategories } from "./validation";
import { useFormik } from "formik";
import { TextField, MenuItem, Button } from "@mui/material";
import Menu from "../layout/Menu";
import Footer from "../layout/Footer";

function AddOfferForm({subCategory, category}) {
    // State do wypełnienia formularza
    const [showSubCategories, setShowSubCategories] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('');

    // Formik - wartości pod formik.values
    const formik = useFormik({
        initialValues: {
            addOfferTitle: '',
            addOfferCategories: category,
            addOfferSubCategories: subCategory,
            addOfferPrice: '',
            addOfferText: '',
            addOfferImage: '',
        },
        validationSchema: addOfferValidationSchema,

        // Działania przy wysyłce formularza
        onSubmit: (values, {resetForm}) => {
            resetForm()
        }
    })

    // Dynamiczna aktualizacja kategorii i podkategorii
    useEffect(() => {
        formik.setValues({
            ...formik.values,
            addOfferCategories: category,
            addOfferSubCategories: subCategory,
        });
    }, [category]);

    useEffect(() => {
        formik.setValues({
            ...formik.values,
            addOfferCategories: category,
            addOfferSubCategories: subCategory,
        });
    }, [subCategory]);

    const displaySubCategories = (e) => {
        setShowSubCategories(true)
    }

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
    };

    // console.log(formik.values.addOfferCategories, formik.values.addOfferSubCategories)

    return ( 
        <>
            <Menu />
            <div className="addofferform__container">

                <div className="addofferform">

                    {/* Formularz */}
                    <form onSubmit={formik.handleSubmit} className="addofferform__form">
                        <h3 className="addofferform__title">{subCategory ? `Dodaj ogłoszenie dla ${subCategory}` : 'Dodaj ogłoszenie'}</h3>

                        {/* Tytuł ogłoszenia */}
                        <TextField 
                            fullWidth
                            margin="normal"
                            id="addOfferTitle"
                            name="addOfferTitle"
                            label="Tytuł ogłoszenia"
                            value={formik.values.addOfferTitle}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.addOfferTitle && Boolean(formik.errors.addOfferTitle)}
                            helperText={formik.touched.addOfferTitle && formik.errors.addOfferTitle}
                        />

                        {/* Wybór kategorii */}
                        <TextField className="select"
                            disabled={category}
                            variant={category ? 'filled' : 'outlined'}
                            fullWidth
                            select
                            margin="normal"
                            id="addOfferCategories"
                            name="addOfferCategories"
                            label="Wybierz kategorię"
                            value={formik.values.addOfferCategories}
                            onChange={(e) => {
                                formik.handleChange(e)
                                displaySubCategories(e)
                                handleCategoryChange(e)
                            }}
                            onBlur={formik.handleBlur}
                            error={formik.touched.addOfferCategories && Boolean(formik.errors.addOfferCategories)}
                            helperText={formik.touched.addOfferCategories && formik.errors.addOfferCategories}
                        >
                            {addOfferCategories.map((category, index) =>(
                                <MenuItem key={index} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* Wybór podkategorii */}
                        <TextField className="select"
                            disabled={!showSubCategories}
                            variant={showSubCategories ? 'outlined' : 'filled'}
                            fullWidth
                            select
                            margin="normal"
                            id="addOfferSubCategories"
                            name="addOfferSubCategories"
                            label="Wybierz podkategorię"
                            value={formik.values.addOfferSubCategories}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.addOfferSubCategories && Boolean(formik.errors.addOfferSubCategories)}
                            helperText={formik.touched.addOfferSubCategories && formik.errors.addOfferSubCategories}
                        >

                            {subCategory ? 
                                <MenuItem value={subCategory}>{subCategory}</MenuItem>
                            : 
                                addOfferSubCategories[selectedCategory] && addOfferSubCategories[selectedCategory].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))
                            }
                            
                        </TextField>
                        
                        {/* Cena */}
                        <TextField 
                            type='number'
                            variant="outlined"
                            margin="normal"
                            id="addOfferPrice"
                            name="addOfferPrice"
                            label="Cena usługi (w PLN)"
                            value={formik.values.addOfferPrice}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.addOfferPrice && Boolean(formik.errors.addOfferPrice)}
                            helperText={formik.touched.addOfferPrice && formik.errors.addOfferPrice}
                        />

                        {/* Opis ogłoszenia */}
                        <div className="addofferform__input-group">
                            <TextField 
                                fullWidth
                                multiline
                                minRows={8}
                                variant="outlined"
                                margin="normal"
                                id="addOfferText"
                                name="addOfferText"
                                label="Treść ogłoszenia"
                                placeholder="Wpisz wszelkie informacje, które zachęcą Twoich klientów"
                                value={formik.values.addOfferText}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.addOfferText && Boolean(formik.errors.addOfferText)}
                                helperText={formik.touched.addOfferText && formik.errors.addOfferText}
                            />

                            {/* Dodadawanie zdjęcia - niewymagane */}
                            <TextField 
                                margin="dense"
                                type="file" 
                                id="addOfferImage"
                                name="addOfferImage"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                label='Dodaj zdjęcie (opcjonalnie)'
                                onChange={(event) => {
                                    formik.setFieldValue('addOfferImage', event.currentTarget.files[0]);
                                }}
                                onBlur={formik.handleBlur}
                                error={formik.touched.addOfferImage && Boolean(formik.errors.addOfferImage)}
                                helperText={formik.touched.addOfferImage && formik.errors.addOfferImage}
                            />
                            
                        </div>

                        <br /> <br />         
                        <hr />

                        {/* Przycisk do wysyłki formularza */}
                        <Button 
                            variant="contained" 
                            type="submit" 
                            fullWidth 
                            size="large" 
                            style={{ marginTop: '20px',}}>
                                Dodaj ogłoszenie
                        </Button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
     );
}

export default AddOfferForm;