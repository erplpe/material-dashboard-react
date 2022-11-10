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

import { Launch } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCustomers } from "redux/slices/customersSlice";
import SimpleDialog from "../dialog";


export default function data() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = useState(false);
  const cust = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomers());
    setCustomers(cust);
  }, [cust.length]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return {
    columns:[
      { Header: "Customer Id", accessor: "cid", width:"20%" ,align: "left" },
      { Header: "Customer Name", accessor: "name", align: "left" },
      { Header: "Details", accessor: "details", align: "left" },
    ],
    rows:customers.map((customer) => ({
      cid: customer.id,
      name:customer.name,
      details:(
        <div>
          <IconButton onClick={handleClickOpen}>
            <Launch/>
          </IconButton>
          <SimpleDialog
            open={open}
            onClose={handleClose}
            data={customer}
          />
        </div>
        
      )
    })),
  }
}