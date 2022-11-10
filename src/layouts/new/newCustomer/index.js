import { useState } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl"

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Hooks
import useAddNewCustomer from "hooks/useAddNewCustomer";

function NewCustomer({handleStatus}){
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [currency,setCurrency] = useState("");
    const [pT,setPT] = useState("");
    const [cName,setCName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState(0);
    const [work,setWork] = useState(0);

    const handleNameChange = (e) =>(setName(e.target.value));
    const handleAddressChange = (e) => (setAddress(e.target.value));
    const handleCurrencyChange = (e) =>(setCurrency(e.target.value));
    const handlePTChange = (e) =>(setPT(e.target.value));
    const handleMobileChange = (e) => (setMobile(e.target.value));
    const handleCNameChange = (e) => (setCName(e.target.value));
    const handleEmailChange = (e) => (setEmail(e.target.value));
    const handleWorkPChange = (e) => (setWork(e.target.value));
    const handleSaveCustomer = async () =>{
        try{
            await useAddNewCustomer({
                name,address,currency,email,mobile,work,contact_name:cName,payment_term:pT
            });
            handleStatus("New Customer Added!",`${name} added successfully.`,"success");
        }
        catch(e){
            handleStatus("New Customer is not Added!",`Customer insertation failed.`,"error");
        }
        
    }

    return(
        <div>
            <MDBox pt={6} pb={3}>
                <Grid container spacing={2}>
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
                                    Add New Customer
                                </MDTypography>
                            </MDBox>
                            <MDBox
                                mx={2}
                                mt={-3}
                                py={3}
                                px={2}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={4} key={0}>
                                        <FormControl>
                                            <MDTypography variant="h7" color="dark">
                                                Name/Company
                                            </MDTypography>
                                            <MDInput onChange={handleNameChange} label="Customer's Name" required/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8} key={1}>
                                        <FormControl>
                                            <MDTypography variant="h7" color="dark">
                                                Address
                                            </MDTypography>
                                            <MDInput type="text" label="Address" onChange={handleAddressChange} required/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} key={0}>
                                        <FormControl>
                                            <MDTypography variant="h7" color="dark">
                                                Currency
                                            </MDTypography>
                                            <MDInput type="text" label="Currency" onChange={handleCurrencyChange} required/>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={8} key={1}>
                                        <FormControl>
                                            <MDTypography variant="h7" color="dark">
                                                Payment Term
                                            </MDTypography>
                                            <MDInput type="text" label="Payment Term" onChange={handlePTChange} required/>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                <Card>
                                    <MDBox
                                    mx={2}
                                    mt={2}
                                    py={1}
                                    px={5}
                                    variant="contained"
                                    bgColor="success"
                                    borderRadius="lg"
                                    coloredShadow="info"
                                    >
                                        <MDTypography variant="h9" color="white">
                                            Contact Details
                                        </MDTypography>
                                    </MDBox>
                                    <MDBox
                                        mx={2}
                                        mt={-3}
                                        py={3}
                                        px={2}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} key={0}>
                                                <FormControl>
                                                    <MDTypography variant="h7" color="dark">
                                                        Contact Name
                                                    </MDTypography>
                                                    <MDInput onChange={handleCNameChange} label="Contact Name" required/>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} key={1}>
                                                <FormControl>
                                                    <MDTypography variant="h7" color="dark">
                                                        Email
                                                    </MDTypography>
                                                    <MDInput type="email" label="Email" onChange={handleEmailChange} required/>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} key={0}>
                                                <FormControl>
                                                    <MDTypography variant="h7" color="dark">
                                                        Phone(Mobile)
                                                    </MDTypography>
                                                    <MDInput type="text" label="Phone(Mobile)" onChange={handleMobileChange} required/>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6} key={1}>
                                                <FormControl>
                                                    <MDTypography variant="h7" color="dark">
                                                        Phone(Work)
                                                    </MDTypography>
                                                    <MDInput type="text" label="Phone(Work)" onChange={handleWorkPChange} required/>
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </MDBox>
                                </Card>
                                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={4} key={2}>
                                        <MDBox
                                            mx={2}
                                            mt={1}
                                            py={3}
                                            px={2}
                                        >
                                            <MDButton color="info" onClick={handleSaveCustomer} type="submit" >Add</MDButton>
                                        </MDBox>
                                    </Grid>
                                </Grid>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
        </div>
    );
}

NewCustomer.propTypes={
    handleStatus: PropTypes.func.isRequired
}

export default NewCustomer;