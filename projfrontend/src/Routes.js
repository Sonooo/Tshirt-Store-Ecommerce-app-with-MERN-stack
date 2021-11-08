import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import Addcategory from "./admin/AddCategory";
import Addproduct from "./admin/AddProduct";
import Manageproducts from "./admin/ManageProducts";
import Orders from "./admin/Orders";
import Updateproduct from "./admin/UpdateProduct";
import ManageCategories from "./admin/ManageCategories";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Signup" exact component={Signup}></Route>
        <Route path="/Signin" exact component={Signin}></Route>
        <Route path="/cart" exact component={Cart}></Route>
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute path="/admin/create/category" exact component={Addcategory} />
        <AdminRoute path="/admin/create/product" exact component={Addproduct} />
        <AdminRoute path="/admin/products" exact component={Manageproducts} />
        <AdminRoute path="/admin/orders" exact component={Orders} />
        <AdminRoute path="/admin/product/update/:productId" exact component={Updateproduct} />
        <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} />
        <AdminRoute path="/admin/categories" exact component={ManageCategories} />

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
