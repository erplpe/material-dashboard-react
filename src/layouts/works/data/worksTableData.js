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

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// mport team4 from "assets/images/team-4.jpg";

import { getWorks } from "../../../redux/slices/worksSlice";

export default function data() {
  const [works, setWorks] = useState([]);
  const w = useSelector((state) => state.works);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorks());
    setWorks(w);
    console.log(w);
  }, [works]);

  const Name = ({ image, name, id }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{id}</MDTypography>
      </MDBox>
    </MDBox>
  );

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "assigned work", accessor: "work", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "working", accessor: "working", align: "center" },
    ],

    rows: works.map((worker) => ({
      name: <Name image={team2} name={worker.name} id={worker.id} />,
      work: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {worker.assigned_work}
        </MDTypography>
      ),
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={worker.occupied ? "Occupied" : "Available"}
            color="success"
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      working: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={worker.working ? "IN" : "OUT"}
            color="success"
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
    })),
  };
}
