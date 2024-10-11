'use client';
import { Box, Flex, Text, Grid, GridItem, Card, Container, Link } from '@chakra-ui/react';
import Calendar from '../components/Calendar';

export default function Dashboard() {
  return (
    <Flex>
      {/* Sidebar */}
      <Box w="180px" h="100vh" bg="gray.100" p="4">
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
        <Grid templateColumns="repeat(10, 1fr)" gap={6} h="100%">
          {/* First row - 6/10 (60%) for the left section, 4/10 (40%) for the right section */}
          <GridItem colSpan={6} minHeight="50vh">
            <Card p="4" shadow="md" h="100%">
              <Link href='/inventory' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
                Inventory Section
              </Link>
              <Text>Manage orders from this section.</Text>
            </Card>
          </GridItem>

          <GridItem colSpan={4} minHeight="50vh">
            <Card p="4" shadow="md" h="100%" overflowX="auto">
              <Link href='/schedule' fontSize="lg" fontWeight="bold" _hover={{ color: 'blue.500' }}>
                Schedule Section
              </Link>
              {/* Apply overflowX here to make the calendar horizontally scrollable */}
              <Box overflowX="auto">
                <Calendar />
              </Box>
            </Card>
          </GridItem>

          {/* Second row - full width (10/10) */}
          <GridItem colSpan={10} minHeight="40vh">
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
