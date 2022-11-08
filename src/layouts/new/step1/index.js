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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



function Step1() {

  return (
    <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
    >
        <MDTypography variant="h7" color="dark">
        Customer
        </MDTypography>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key={0}>
            <MDInput/>
        </Grid>
        </Grid>
        <MDTypography variant="h7" color="dark">
        Parts Count
        </MDTypography>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key={1}>
            <MDInput onChange={handlePartsCountChange} type="number" value={partsCount}/>
        </Grid>
        </Grid>
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} key={1}>
            <MDButton color="success"/>
        </Grid>
        </Grid>
    </MDBox>
  );
}

export default Step1;
