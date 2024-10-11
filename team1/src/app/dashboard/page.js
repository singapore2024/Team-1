
import { Box, Flex, Text, Grid, GridItem, Card, Container, Link } from '@chakra-ui/react';
import Schedule from '../components/Schedule';  // Import the Schedule component


export default function Dashboard() {
  return (
    <Flex>
      {/* Sidebar */}
      <Box w="250px" h="100vh" bg="gray.100" p="4">
        <Box mb="6">
          
          <Link href='/inventory' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
          Inventory
          </Link>
        </Box>
        <Box mb="6">
        <Link href='/schedule' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
          Schedule
          </Link>
        </Box>
        <Box mb="6">
        <Link href='/orders' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
          Orders
          </Link>
        </Box>
      </Box>

      {/* Main content */}
      <Container maxW="container.xl" p="4" h="100vh">
      <Grid templateColumns="repeat(2, 1fr)" gap={6} h="100%">
  {/* First row - 2 sections, 50% width each */}
  <GridItem colSpan={1} minHeight="50vh">
    <Card p="4" shadow="md" h="100%">
      <Link href='/inventory' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
        Inventory Section
      </Link>
      <Text>Manage orders from this section.</Text>
    </Card>
  </GridItem>

  <GridItem colSpan={1} minHeight="50vh">
    <Card p="4" shadow="md" h="100%">
      <Link href='/schedule' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
        Schedule Section
      </Link>
      
    </Card>
  </GridItem>


          {/* Second row - 1 section, 50% height */}
          <GridItem colSpan={2} minHeight="40vh">
            <Card p="4" shadow="md" h="100%">
              <Link href='/orders' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
                Order Section
              </Link>
              <Text>View and manage employee schedules.</Text>
            </Card>
          </GridItem>
        </Grid>
      </Container>
      
    </Flex>
  );
}
