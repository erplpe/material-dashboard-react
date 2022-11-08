/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getParts } from "redux/slices/partsSlice";

export default function data() {
  const [parts, setParts] = useState([]);
  const pKey = window.location.pathname.split("/")[2];
  const prt = useSelector((state) => state.parts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getParts(pKey));
    setParts(prt);
    console.log(prt);
  }, [prt.length]);

  return {
    columns:[
      { field: 'dnum', headerName: 'Drawing Number', type:"number", width: 180, editable: true },
      { field: 'et', headerName: 'Estimated Time', type:"number", width: 180, editable: true },
      { field: 'status', headerName: 'Status', type:"boolean", width: 180, editable: true },
    ],
    rows:parts.map((part) => ({
      id:Math.round(Math.random()*1000),
      dnum: part.drawing_number,
      et: part.estimated_time,
      status:part.status,
    })),
  }
}