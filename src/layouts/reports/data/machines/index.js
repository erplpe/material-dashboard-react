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
      { Header: "machine type", accessor: "type", width: "45%", align: "left" },
      { Header: "machine number", accessor: "number", align: "left" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "shift", accessor: "shift", align: "center" },
      { Header: "M.O. Numbers", accessor: "mo", align: "center" },
      { Header: "Operator", accessor: "op", align: "center" },
      { Header: "hours", accessor: "hrs", align: "center" },
      { Header: "total working per day", accessor: "twpd", align: "center" },
      { Header: "available machine hours", accessor: "amh", align: "center" },
      { Header: "machine utilization", accessor: "mu", align: "center" },
    ],

    rows: [
     
    ],
  };
}
