import { Box, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const employees = [
  { name: 'John', schedule: ['Working', 'Working', 'Sick', 'Working', 'Working', 'Off', 'Off'] },
  { name: 'Anna', schedule: ['Sick', 'Sick', 'Working', 'Working', 'Working', 'Off', 'Off'] },
  { name: 'Mark', schedule: ['Working', 'Off', 'Working', 'Working', 'Sick', 'Working', 'Off'] }
];

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function Schedule() {
  return (
    <Box bg="white" p="4" rounded="md" shadow="md">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Employee</Th>
            {daysOfWeek.map(day => (
              <Th key={day}>{day}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee, index) => (
            <Tr key={index}>
              <Td>{employee.name}</Td>
              {employee.schedule.map((status, idx) => (
                <Td
                  key={idx}
                  color={status === 'Sick' ? 'red.500' : 'green.500'}
                  fontWeight="bold"
                >
                  {status}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
