import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../Navigation/MainNavigation'
import Footer from '../Elements/Footer'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Root = () => {
  return (
    <> 
      <header>
          <MainNavigation />
      </header>
      <Container fixed>
      <Box sx={{ bgcolor: '#f5f5f5', padding: 2}} mt={3}>
         <main>
            <Outlet />
        </main>
        </Box>
      </Container>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Root;