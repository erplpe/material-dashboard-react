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

import { getParts } from "redux/slices/partsSlice";
import sw from "assets/images/sw.png";

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
    cards: parts.map((part) => (
      <Grid item xs={12} md={6} lg={3} key={part.drawing_number}>
        <MDBox mb={1.5}>
          <DefaultProjectCard
            image={sw}
            label={`Drawing Number: ${part.drawing_number}`}
            title={`Estimated Time: ${part.estimated_time}`}
            description={`${part.completed}/${part.works_count} done!`}
            action={{
              type: "internal",
              route: `/projects/${pKey}/${part.drawing_number}`,
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
