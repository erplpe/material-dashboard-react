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
/* eslint-disable no-unused-vars */
import { 
  DataGrid,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
  GridToolbar
} from '@mui/x-data-grid';

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from 'components/MDButton';

// Material Dashboard 2 React example components
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";

// Data
import partsData from "./data";


function ProjectDetails({pKey}) {
  const [edited, setEdited] = useState([]);
  const { rows,columns } = partsData(pKey);

  const handlEdit = (id) => {
    setEdited(edited.concat(id));
  }

  const handleSave = (id) => {
    setEdited(edited.concat(id));
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  Parts
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={3}
                py={3}
                px={2}
              >
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                  <div style={{ height: 500, width: '100%' }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      experimentalFeatures={{ newEditingApi: true }}
                      onCellEditStop={(params, event) => {
                        handlEdit(params.id);
                      }}
                      components={{Toolbar: GridToolbar}}
                    />
                    </div>
                </Grid>
                <MDBox
                mx={2}
                mt={3}
                py={3}
                px={2}
                >
                  <MDButton onClick={handleSave} color="info">Save</MDButton>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

ProjectDetails.defaultProps={
  pKey: "uCNSDymar6721PgvYxrp",
}

ProjectDetails.propTypes={
  pKey: PropTypes.string,
}

export default ProjectDetails;
