import { Routes,Route} from 'react-router-dom'

import Blogs from '../pages/Blogs'
import Users from '../pages/Users';
import AddUsers from '../pages/AddUsers';
import EditUsers from '../pages/EditUsers';

import Products from '../pages/Products';
import AddProducts from '../pages/AddProducts';
import EditProducts from '../pages/EditProducts';
import Dashboard from '../pages/Dashboard';

export function AllRoutes(){
    return(
<Routes>
        <Route path='/' element={<Dashboard />} />
    <Route path='/blogs' element={<Blogs />}/>
     <Route path='/users' element={<Users />}/>
      <Route path='/addusers' element={<AddUsers />}/>
       <Route path='/editusers/:id' element={<EditUsers />}/>
        <Route path='/products' element={<Products />}/>
         <Route path='/addproducts' element={<AddProducts />}/>
          <Route path='/editproducts/:id' element={<EditProducts />}/>
</Routes>
);
}

export default AllRoutes;