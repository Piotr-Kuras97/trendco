import * as Yup from 'yup'
import mainCategories from '../categories/mainCategories'

// tworzenie podkategorii i kategorii na tablice

export const addOfferCategories = mainCategories.map(category => category.text)
export const addOfferSubCategories = mainCategories.reduce((options, category) => {
    options[category.text] = category.sub;
    return options;
  }, {});

// walidacja rejestracji

export const registerValidationSchema = Yup.object().shape({
    username: Yup.string().required('To pole jest wymagane').min(6, 'Minimum 6 znaków').max(20, 'Maksymalnie 20 znaków'),
    name: Yup.string().required('To pole jest wymagane').min(3, 'Minimum 3 znaki').max(20, 'Maksymalnie 20 znaków'),
    surname: Yup.string().min(3, 'Minimum 3 znaki').max(20, 'Maksymalnie 20 znaków'),
    birthdate: Yup.date()
    .required('Podaj datę urodzenia')
    .test('age', 'Musisz mieć co najmniej 16 lat', function(value) {
      const today = new Date();
      const birthdate = new Date(value);
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }
      
      return age >= 16;
    }),
    email: Yup.string().required('To pole jest wymagane').email('Nieprawidłowy adres email'),
    password: Yup
        .string()
        .required('To pole jest wymagane')
        .min(8, 'Minimum 8 znaków')
        .max(25, 'Maksymalnie 25 znaków')
        .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Hasło musi zawierać przynajmniej jedną wielką literę, jedną cyfrę i jeden znak specjalny'
        ),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Hasła nie są identyczne')
        .required('To pole jest wymagane'),
    code: Yup.string().min(8, 'Kod powinien mieć 8 znaków').max(8, 'Kod powinien mieć 8 znaków'),
    terms: Yup.bool().oneOf([true], 'Zaakceptowanie regulaminu oraz polityki prywatności jest wymagane'),
})

// walidacja logowania

export const loginValidationSchema = Yup.object().shape({
    loginUsername: Yup.string().required('Wpisz nazwę użytkownika').min(6, 'Minimum 6 znaków').max(20, 'Maksymalnie 20 znaków'),
    loginPassword: Yup
        .string()
        .required('Wpisz hasło')
        .min(8, 'Minimum 8 znaków')
        .max(25, 'Maksymalnie 25 znaków')
        .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Hasło musi zawierać przynajmniej jedną wielką literę, jedną cyfrę i jeden znak specjalny'
    ),
})

// walidacja dodawania ogłoszenia

export const addOfferValidationSchema = Yup.object().shape({
    addOfferTitle: Yup.string().required('Wpisz tytuł ogłoszenia').min(6, 'Minimum 6 znaków').max(30, 'Maksymalnie 30 znaków'),
    addOfferCategories: Yup.string().required('Wybierz kategorię').oneOf(addOfferCategories, 'Wybierz jedną z dostępnych opcji'),
    addOfferSubCategories: Yup.string().required('Wybierz podkategorię').when('addOfferCategory', {
        is: category => category && addOfferSubCategories.hasOwnProperty(category),
        then: Yup.string().required('Wybierz podkategorię')
    }),
    addOfferPrice: Yup.number().required("Wpisz cenę").min(1, 'Minimalna cena to 1 zł').max(100000, 'Maksymalna cena to 100000 zł'),
    addOfferText: Yup.string().required('Treść ogłoszenia jest wymagana').min(30, 'Minimum 30 znaków').max(1000, 'Maksymalnie 1000 znaków'),
    addOfferImage: Yup.mixed()
    .test('fileSize', 'Zdjęcie musi mieć maksymalnie 2MB', (value) => {
      if (!value) return true; 
      return value && value.size <= 2 * 1024 * 1024 * 1024;
    })
    .test('fileType', 'Niepoprawny format pliku', (value) => {
      if (!value) return true;
      return value && ['image/jpeg', 'image/png'].includes(value.type);
    }),
})
