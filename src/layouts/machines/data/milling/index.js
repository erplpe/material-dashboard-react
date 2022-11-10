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

export default function data() {


  return {
    columns: [
      { Header: "machine", accessor: "author", width: "45%", align: "left" },
      { Header: "ongoing project", accessor: "project", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "worker", accessor: "worker", align: "center" },
      { Header: "started time", accessor: "st", align: "center" },
      { Header: "time assigned", accessor: "ta", align: "center" },
    ],

    rows: [
    ],
  };
}
