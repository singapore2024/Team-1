'use client'
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export default function Summary() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
            <strong>Warning 1: There are items expiring within this week.</strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Items expiring within the week:
          <br></br>
          &nbsp;&nbsp;&nbsp;- 3 x Fish
          <br></br>
          &nbsp;&nbsp;&nbsp;- 5 cups of Rice
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as='span' flex='1' textAlign='left'>
              <strong>Warning 2: You are running dangerously low on these items. </strong>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Items on extremely low inventory:
          <br></br>
          &nbsp;&nbsp;&nbsp;- Eggs: 1
          <br></br>
          &nbsp;&nbsp;&nbsp;- Butter: 1
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}