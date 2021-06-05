import * as React from "react";
import {Home} from "./features/Home/Home";
import './App.css';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import {Header} from "./features/header/header";

const App = () => (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid>
          <Header />
          <VStack spacing={8}>
            <Home />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
)

export default App;
