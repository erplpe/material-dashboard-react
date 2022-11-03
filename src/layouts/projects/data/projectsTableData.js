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
import Grid from "@mui/material/Grid";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

import { getprojects } from "redux/slices/projectsSlice";

export default function data() {
  const [projects, setProjects] = useState([]);
  const prj = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprojects());
    setProjects(prj);
  }, [projects]);

  return {
    cards: projects.map((project) => (
      <Grid item xs={12} md={6} lg={3}>
        <MDBox mb={1.5} href={`/projects/${project.id}`}>
          <ComplexStatisticsCard
            color="dark"
            icon="weekend"
            title={project.customer}
            count={project.id}
            percentage={{
              color: "success",
              amount: "55%",
              label: "Completed",
            }}
          />
        </MDBox>
      </Grid>
    )),
  };
}
