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

import {addNewproject} from "./functions"
import newParts from "./parts"

function New() {
  const [partsCount,setPartsCount] = useState(0);
  const [customer,setCustomer] = useState(0);
  const [step,setStep] = useState(1);

  const handlePartsCountChange = (e) => (setPartsCount(parseInt(e.target.value,10)));
  const handleCustomer = (e) => (setCustomer(e.target.value));
  const handleStepChange = (e) => {
    setStep(step+1);
    addNewproject({customer, id: 3, parts_count: partsCount});
  };

  const NewParts = newParts(10);

  return (
    <DashboardLayout>
      <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
              <FormControl>
                  <MDBox
                    mx={2}
                    mt={-3}
                    py={3}
                    px={2}
                    variant="gradient"
                    bgColor="info"
                    borderRadius="lg"
                    coloredShadow="info"
                  >
                    <MDTypography variant="h6" color="white">
                      Add New Project
                    </MDTypography>
                  </MDBox>
                  {step===1?(
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
                        <MDInput onChange={handleCustomer}/>
                      </Grid>
                    </Grid>
                    <MDTypography variant="h7" color="dark">
                      Parts Count
                    </MDTypography>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={2} sm={4} md={4} key={1}>
                        <MDInput onChange={handlePartsCountChange} type="number" lable="Parts Count..."/>
                      </Grid>
                    </Grid>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item xs={2} sm={4} md={4} key={2}>
                      <MDBox
                        mx={2}
                        mt={1}
                        py={3}
                        px={2}
                      >
                        <MDButton color="info" onClick={handleStepChange}>Next</MDButton>
                      </MDBox>
                      </Grid>
                    </Grid>
                  </MDBox>):(
                  <MDBox
                    mx={2}
                    mt={1}
                    py={3}
                    px={2}
                  >
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <NewParts/>
                    </Grid>
                    
                  </MDBox>
                  )}
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default New;
