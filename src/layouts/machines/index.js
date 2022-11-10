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
import sgMachinesTableData from "layouts/machines/data/sg";
import pgMachinesTableData from "layouts/machines/data/pg";
import edmMachinesTableData from "layouts/machines/data/edm";
import millingMachinesTableData from "layouts/machines/data/milling";

function Machines() {
  const tables=[
    {
      name:"SG",
      data:sgMachinesTableData(),
    },
    {
      name:"PG",
      data:pgMachinesTableData(),
    },
    {
      name:"EDM",
      data:edmMachinesTableData(),
    },
    {
      name:"Milling",
      data:millingMachinesTableData(),
    }
  ]
  
  /* eslint-disable prefer-destructuring */
  console.log(tables)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          {tables.forEach((tab)=>{
            const columns=tab.data.columns;
            const rows=tab.data.rows;
            console.log(columns)
            return(
              <Grid item xs={12}>
                <Card>
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
                      {tab.name}
                    </MDTypography>
                  </MDBox>
                  <MDBox pt={3}>
                    <DataTable
                      table={{columns,rows}}
                      isSorted={false}
                      entriesPerPage={false}
                      showTotalEntries={false}
                      noEndBorder
                    />
                  </MDBox>
                </Card>
              </Grid>
          )})}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Machines;
