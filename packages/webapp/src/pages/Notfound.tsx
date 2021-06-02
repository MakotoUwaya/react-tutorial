import {
  Box,
  Button,
  Container,
  Typography
} from '@material-ui/core';
import React, { VFC } from 'react';
import { Link } from 'react-router-dom';

const Notfound: VFC = () => {
  return (
    <Box
      css={{
        bgcolor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404: The page you are looking for isn’t here
          </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
          </Typography>
        <Box css={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src="/images/undraw_page_not_found_su7k.svg"
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
        <Box css={{ textAlign: 'center', marginTop: 50 }}>
          <Button
            component={Link}
            variant="outlined"
            to="/"
          >Home</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Notfound;
