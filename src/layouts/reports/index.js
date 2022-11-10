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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import workersTableData from "layouts/reports/data/workers";
import machinesTableData from "layouts/reports/data/machines";
import { useState } from "react";
import { MenuItem, Select } from "@mui/material";

/* eslint-disable no-unused-vars */

function Reports() {
  const tables={
    0:"Worker Performance",
    1:"Machine Performance"
  }
  const data={
    0:workersTableData(),
    1:machinesTableData()
  }
  const [type,setType] = useState(0);
  let { columns, rows } = data[type];

  const handleChange = (event) => {
    setType(event.target.value);
    columns= data[type].columns;
    rows= data[type].rows;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={type}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>
                    Workers Performance
                  </MenuItem>
                  <MenuItem value={1}>
                    Machine Performance
                  </MenuItem>
                </Select>
                <MDBox
                mx={2}
                mt={3}
                py={3}
                px={5}
              >{" "}</MDBox>
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
                  {tables[type]} Report
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
