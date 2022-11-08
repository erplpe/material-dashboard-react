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
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

import { getprojects } from "redux/slices/projectsSlice";
import sw from "assets/images/sw.png";


export default function data() {
  const [projects, setProjects] = useState([]);
  const prj = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getprojects());
    setProjects(prj);
  }, [prj.length]);

  return {
    cards: projects.map((project) => (
      <Grid item xs={12} md={6} lg={3} key={project.key}>
        <MDBox mb={1.5}>
          <DefaultProjectCard
            image={sw}
            label={`Project Id: ${project.id}`}
            title={`Customer: ${project.customer}`}
            description={`Parts Count: ${project.parts_count}`}
            action={{
              type: "internal",
              route: `/projects/${project.key}`,
              color: "info",
              label: "view project",
            }}
            authors={[]}
          />
        </MDBox>
      </Grid>
    )),
  };
}
