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

import { Grid } from "@mui/material";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
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
      { 
        field: 'pnum', 
        headerName: 'Part Number', 
        type:"string", 
        width: 240, 
        editable: true,
        renderCell : (params) =>(
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4}>
              <MDTypography>{params.value}</MDTypography>
            </Grid>
            <Grid item xs={8}>
              <MDButton color="info">
              <a href={`${window.location.pathname}/${params.value}`}>Progress</a>
              </MDButton>
            </Grid>
          </Grid>
        ),
      },
      { field: 'et', headerName: 'Estimated Time', type:"number", width: 240, editable: true },
      { field: 'status', headerName: 'Status', type:"boolean", width: 180, editable: true },
      { 
        field: 'drawing', 
        headerName: 'Drawing', 
        width: 180, 
        editable: false,
        renderCell : () =>(
          <strong>
            <a href="/">Open Drawing</a>
          </strong>
          
        ),
       },
    ],
    rows:parts.map((part) => ({
      id:part.id,
      pnum: part.drawing_number,
      et: part.estimated_time,
      status:part.status,
    })),
  }
}