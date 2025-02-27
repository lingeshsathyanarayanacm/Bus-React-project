// ContactComponent.js
import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
  TextField,
  Button,
} from '@mui/material';
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const ContactComponent = () => {
  const headerStyle = {
    marginBottom: '24px',
    textAlign: 'center',
    backgroundColor: '#474E5D',
    color: 'white',
    padding: '16px',
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    color: '#474E5D',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const dividerStyle = {
    margin: '32px 0',
  };

  const formContainerStyle = {
    marginTop: '32px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  return (
    <Container 
      style={{
        marginTop: '32px',
        width: '100%', // Set the width to 100% for full-page width
        padding: '0', // Remove default padding
        maxWidth: '100%', // Set maxWidth to 100%
      }}
    >
      <Typography variant="h4" style={headerStyle}>
        Contact Us
      </Typography>
      <fieldset>
        <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={contactInfoStyle}>
            <div style={infoItemStyle}>
              <FaPhone style={iconStyle} />
              <Typography variant="body1">+1 (123) 456-7890</Typography>
            </div>
            <div style={infoItemStyle}>
              <FaEnvelope style={iconStyle} />
              <Typography variant="body1">info@example.com</Typography>
            </div>
            <div style={infoItemStyle}>
              <FaMapMarker style={iconStyle} />
              <Typography variant="body1">123 Main St, Cityville</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h5">We'd love to hear from you!</Typography>
          <div style={formContainerStyle}>
            <form style={formStyle}>
              <TextField label="Your Name" variant="outlined" />
              <TextField label="Your Email" variant="outlined" />
              <TextField
                label="Your Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button variant="contained" color="primary">
                Send Message
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
      </Container>
      </fieldset>
      <Divider style={dividerStyle} />
      {/* Additional sections or content */}
    </Container>
  );
};

export default ContactComponent;
