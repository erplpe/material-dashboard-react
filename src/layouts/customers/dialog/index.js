import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Card,Grid } from '@mui/material';
import MDTypography from 'components/MDTypography';
import MDBox from 'components/MDBox';


function SimpleDialog(props) {
  const { onClose, open,data } = props;

  const handleClose = () => {
    onClose("5656");
  };


  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{data.name}</DialogTitle>
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
                                    Customer Details
                                </MDTypography>
                            </MDBox>
                            <MDBox
                                mx={2}
                                mt={3}
                                py={3}
                                px={2}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={4} key={0}>
                                        <MDTypography variant="subtitle1" color="dark">
                                            Company
                                        </MDTypography>
                                        <MDTypography variant="caption" color="dark">
                                                {data.name}
                                        </MDTypography>
                                    </Grid>
                                    <Grid item xs={8} key={1}>
                                        <MDTypography variant="h7" color="dark">
                                            Address
                                        </MDTypography>
                                        <MDTypography variant="h7" color="dark">
                                                {data.address}
                                        </MDTypography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} key={0}>
                                        <MDTypography variant="h7" color="dark">
                                            Currency
                                        </MDTypography>
                                        <MDTypography variant="subtitle" color="dark">
                                                {data.currency}
                                            </MDTypography>
                                    </Grid>
                                    <Grid item xs={8} key={1}>
                                        <MDTypography variant="h7" color="dark">
                                            Payment Term
                                        </MDTypography>
                                        <MDTypography variant="subtitle" color="dark">
                                            {data.payment_term}
                                        </MDTypography>
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
                                                <MDTypography variant="h7" color="dark">
                                                    Contact Name
                                                </MDTypography>
                                                <MDTypography variant="subtitle" color="dark">
                                                    {data.contact_name}
                                                </MDTypography>
                                            </Grid>
                                            <Grid item xs={6} key={1}>
                                                <MDTypography variant="h7" color="dark">
                                                    Email
                                                </MDTypography>
                                                <MDTypography variant="subtitle" color="dark">
                                                    {data.email}
                                                </MDTypography>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6} key={0}>
                                                <MDTypography variant="h7" color="dark">
                                                    Phone(Mobile)
                                                </MDTypography>
                                                <MDTypography variant="subtitle" color="dark">
                                                    {data.mobile}
                                                </MDTypography>
                                            </Grid>
                                            <Grid item xs={6} key={1}>
                                                <MDTypography variant="h7" color="dark">
                                                    Phone(Work)
                                                </MDTypography>
                                                <MDTypography variant="subtitle">
                                                    {data.work}
                                                </MDTypography>
                                            </Grid>
                                        </Grid>
                                    </MDBox>
                                </Card>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
        </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.node.isRequired
};

export default SimpleDialog