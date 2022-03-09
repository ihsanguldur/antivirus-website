import React, {Component} from "react";
import Home from "./rootComponents/Home";
import Login from "./rootComponents/Login";
import {Route, Routes} from "react-router-dom";
import Signup from "./rootComponents/Signup";

export default class App extends Component{
  render(){
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/signup"} element={<Signup/>}/>
            </Routes>
        </div>
    );
  }

}