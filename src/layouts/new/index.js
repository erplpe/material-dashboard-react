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
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react";


// Material Dashboard 2 React components
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Hooks
import useAddNewWorker from "hooks/useAddNewUser"
import useAddNewProject from "hooks/useAddNewProject"

// Child Components
import NewCustomer from "./newCustomer";
import NewProject from "./newProject";
import NewWorker from "./newWorker";

function New() {
  const [partsCount,setPartsCount] = useState(0);
  const [customer,setCustomer] = useState("");
  const [wName,setWName] = useState("");
  const [wNumber,setWNumber] = useState(0);
  const [show, setShow] = useState(false);
  const [sbTitle,setSbTitle] = useState("");
  const [sbContent,setSbContent] = useState("");
  const [sbColor,setSbColor] = useState("success");

  const toggleSnackbar = () => setShow(!show);
  const handleStatus = (title,content,color) => {
    setSbTitle(title);
    setSbContent(content);
    setSbColor(color);
    toggleSnackbar();
  }
  const handlePartsCountChange = (e) => (setPartsCount(parseInt(e.target.value,10)));
  const handleCustomerChange = (e) => (setCustomer(e.target.value));
  const handleWNameChange = (e) => (setWName(e.target.value));
  const handleWNumberChange = (e) => (setWNumber(e.target.value));
  const handleSaveProject = async(e) => {
    try{
      const dat = await useAddNewProject({id:3, customer, parts_count:partsCount});
      console.log(dat);
      setCustomer("");
      setPartsCount(0);
      setSbTitle("Project Added!");
      setSbContent(`New Project has been added.`);
      setSbColor("success");
      toggleSnackbar();
    }
    catch(error){
      if(error.toString().includes("invalid data")){
        setSbTitle("Project did not Added!");
        setSbContent(`All Fields are Required!`);
        setSbColor("error");
        toggleSnackbar();
      }
      else{
        setSbTitle("Server Error!");
        setSbContent(`Contact Admin!`);
        setSbColor("error");
        toggleSnackbar();
      }
    }
  };
  const handleSaveWorker = async (e) => {
    try{
      const dat = await useAddNewWorker({name:wName, id: wNumber, occupied: false, working: true});
      console.log(dat);
      setWName("");
      setWNumber(0);
      setSbTitle("Worker Added!");
      setSbContent(`${wName} has been added under the ID ${wNumber}.`);
      setSbColor("success");
      toggleSnackbar();
    }
    catch(error){
      if(error.toString().includes("invalid data")){
        setSbTitle("Worker did not Added!");
        setSbContent(`All Fields are Required!`);
        setSbColor("error");
        toggleSnackbar();
      }
      else{
        setSbTitle("Server Error!");
        setSbContent(`Contact Admin!`);
        setSbColor("error");
        toggleSnackbar();
      }
    }
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
        <NewCustomer
          handleStatus={handleStatus}
        />
        <NewProject 
          handleCustomerChange={handleCustomerChange} 
          handlePartsCountChange={handlePartsCountChange}
          handleSaveProject={handleSaveProject}
        />
        <NewWorker
          handleWNameChange={handleWNameChange}
          handleWNumberChange={handleWNumberChange}
          handleSaveWorker={handleSaveWorker}
        />
        <MDSnackbar
          color={sbColor}
          icon="notifications"
          title={sbTitle}
          content={sbContent}
          dateTime="now"
          open={show}
          close={toggleSnackbar}
        />
      <Footer />
    </DashboardLayout>
  );
}

export default New;
