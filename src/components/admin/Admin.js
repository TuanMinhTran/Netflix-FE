
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import  DefaultLayout from './component/DefaultLayout/DefaultLayout';
import Login from "./component/Login/Login";
import Movies from "./component/Movies/Movies";
import Detail from "./component/Detail/Detail";
import AddMovie from "./component/AddMovie/AddMovie";
import EditMovie from "./component/EditMovie/EditMovie";




function Admin() {

    const [isLogin, setIsLogin] = useState(false)
    const handleIsLogin = (data)=>{
        setIsLogin(data)
    }
    return ( <>
        <DefaultLayout isLogin={isLogin}>
            <div >
                {isLogin?
                <Routes>
                    <Route path="/" Component={Movies }  exact />
                    <Route path="/:movieId" Component={Detail }/>
                    <Route path="/add" Component={AddMovie } exact />
                    <Route path="/:movieId/edit/" Component={EditMovie } exact/>
                </Routes>
                :
                <Login isLogin={handleIsLogin} />}
            </div>
        </DefaultLayout>
    </> );
}

export default Admin;