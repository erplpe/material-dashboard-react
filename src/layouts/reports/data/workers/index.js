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

// Material Dashboard 2 React components


export default function data() {

  return {
    columns: [
      { Header: "date", accessor: "date", width: "45%", align: "left" },
      { Header: "m.o number", accessor: "mo", align: "left" },
      { Header: "machine no", accessor: "mn", align: "center" },
      { Header: "estimated hours", accessor: "eh", align: "center" },
      { Header: "consumed hours", accessor: "ch", align: "center" },
      { Header: "operator performance job", accessor: "opj", align: "center" },
      { Header: "operator performance factor daily", accessor: "opfd", align: "center" },
      { Header: "operator performance factor monthly", accessor: "opfm", align: "center" },
    ],

    rows: [

    ],
  };
}
