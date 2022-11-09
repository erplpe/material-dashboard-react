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

function NewWorker({handleWNameChange,handleWNumberChange,handleSaveWorker}){
    return(
        <div>
            <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                <Card>
                <FormControl>
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
                        Add New Worker
                        </MDTypography>
                    </MDBox>
                    <MDBox
                        mx={2}
                        mt={-3}
                        py={3}
                        px={2}
                    >
                        <MDTypography variant="h7" color="dark">
                        Name
                        </MDTypography>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4} key={0}>
                            <MDInput onChange={handleWNameChange} label="Worker's Name" required/>
                        </Grid>
                        </Grid>
                        <MDTypography variant="h7" color="dark">
                        Number
                        </MDTypography>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4} key={1}>
                            <MDInput type="number" label="Worker's Number" onChange={handleWNumberChange} required/>
                        </Grid>
                        </Grid>
                        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4} key={2}>
                        <MDBox
                            mx={2}
                            mt={1}
                            py={3}
                            px={2}
                        >
                            <MDButton color="info" onClick={handleSaveWorker} type="submit" >Add</MDButton>
                        </MDBox>
                        </Grid>
                        </Grid>
                    </MDBox>
                    </FormControl>
                </Card>
                </Grid>
            </Grid>
            </MDBox>
        </div>
    )
}

NewWorker.propTypes={
    handleWNameChange: PropTypes.func.isRequired,
    handleWNumberChange: PropTypes.func.isRequired,
    handleSaveWorker: PropTypes.func.isRequired
}

export default NewWorker;