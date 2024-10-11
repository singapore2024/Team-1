import React, { useState } from 'react';
import { Box, Grid, Text, Button, Flex } from '@chakra-ui/react';
import { addWeeks, subWeeks, format, startOfWeek, addDays } from 'date-fns';

export default function WeeklyCalendar() {
  // Track the current start of the week
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 })); // Start the week on Monday

  // Sample worker data with leave information
  const workerData = {
    Monday: ['Alice (Leave)', 'Bob (MC)'],
    Tuesday: ['Charlie (Leave)'],
    Wednesday: [],
    Thursday: ['Diana (MC)', 'Eve (Leave)'],
    Friday: ['Frank (Leave)'],
    Saturday: [],
    Sunday: ['Grace (MC)'],
  };

  // Function to get the worker data for each day
  const getWorkerDataForDay = (day) => {
    const dayOfWeek = format(day, 'EEEE'); // Get the day of the week, e.g., "Monday"
    return workerData[dayOfWeek] || [];
  };

  // Function to go to the previous week
  const goToPreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1));
  };

  // Function to go to the next week
  const goToNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1));
  };

  // Generate the days for the current week (Monday to Sunday)
  const weekDays = [...Array(7)].map((_, index) => addDays(currentWeek, index));

  return (
    <Box w="100%" p={4} bg="gray.50" borderRadius="md" shadow="md">
      {/* Calendar Header */}
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Button onClick={goToPreviousWeek}>&lt; Previous Week</Button>
        <Text fontSize="2s" fontWeight="bold">
          Week of {format(currentWeek, 'MMM d, yyyy')}
        </Text>
        <Button onClick={goToNextWeek}>Next Week &gt;</Button>
      </Flex>

      {/* Days of the Week (Monday to Sunday) */}
      <Grid templateColumns="repeat(7, 1fr)" gap={6}>
        {weekDays.map((day, index) => (
          <Box
            key={index}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            p={4}
            borderRadius="md"
            h="150px"
          >
            {/* Display the day */}
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              {format(day, 'EEEE, MMM d')}
            </Text>

            {/* Display worker leave/MC information */}
            {getWorkerDataForDay(day).length > 0 ? (
              getWorkerDataForDay(day).map((worker, i) => (
                <Text key={i} color={worker.includes('MC') ? 'red.500' : 'blue.500'}>
                  {worker}
                </Text>
              ))
            ) : (
              <Text>No leave/MC</Text>
            )}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
