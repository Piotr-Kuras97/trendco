
import Main from './Main';
import RegisterForm from '../form/RegisterForm';
import LoginForm from '../form/LoginForm';
import SearchSubCategory from './SearchSubCategory';
import AddSubCategory from './AddSubCategory';
import AddOfferForm from '../form/AddOfferForm';
import Faq from '../components/Faq';

import { AppProvider } from '../utils/context';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../sass/main.scss'


function App() {

  return (
  
      <AppProvider>
        <Router basename="/trendco">
          <Routes>
            <Route path="*" element={<Main />} />
            <Route path='/register' element={<RegisterForm />}/>
            <Route path='/login' element={<LoginForm />}/>
            <Route path='/search/:subcategory' element={<SearchSubCategory />}/>
            <Route path='/add/:subcategory' element={<AddSubCategory />}/>
            <Route path='/add' element={<AddOfferForm />}/>
            <Route path='/faq' element={<Faq />}/>
          </Routes>
        </Router>
      </AppProvider>
  );
}

export default App;
