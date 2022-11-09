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
import MDTypography from "components/MDTypography";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "redux/slices/customersSlice";


export default function data() {
  const [customers, setCustomers] = useState([]);
  const cust = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
    setCustomers(cust);
  }, [cust.length]);

  return {
    columns:[
      { 
        field: 'cid', 
        headerName: 'Customer ID', 
        type:"string", 
        width: 120, 
        editable: true,
        renderCell : (params) =>(
              <MDTypography>{params.value}</MDTypography>
        ),
      },
      { field: 'name', headerName: 'Company Name', type:"text", width: 240, editable: true },
    ],
    rows:customers.map((customer) => ({
      id: customer.id,
      cid: customer.id,
      name:customer.name,
    })),
  }
}