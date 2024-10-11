"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Stack,
  Text,
  Button,
  IconButton,
  useBreakpointValue,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  const side = useBreakpointValue({ base: "10px", md: "20px" });
  const top = useBreakpointValue({ base: "50%", md: "50%" });

  return (
    <IconButton
      aria-label="right-arrow"
      variant="ghost"
      position="absolute"
      right={side}
      top={top}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={onClick}
    >
      <BiRightArrowAlt size="40px" />
    </IconButton>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  const side = useBreakpointValue({ base: "10px", md: "20px" });
  const top = useBreakpointValue({ base: "50%", md: "50%" });

  return (
    <IconButton
      aria-label="left-arrow"
      variant="ghost"
      position="absolute"
      left={side}
      top={top}
      transform={"translate(0%, -50%)"}
      zIndex={2}
      onClick={onClick}
    >
      <BiLeftArrowAlt size="40px" />
    </IconButton>
  );
};

const OrderPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      menuItem: "Menu Item A",
      quantity: 2,
      date: "2023-10-15",
      offeredPrice: "$20.00",
      phoneNumber: "+1234567890",
      remarks: "Please deliver by 5 PM.",
      status: null, // null, "accepted", or "declined"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      menuItem: "Menu Item B",
      quantity: 1,
      date: "2023-10-16",
      offeredPrice: "$15.00",
      phoneNumber: "+0987654321",
      remarks: "No onions, please.",
      status: null,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      menuItem: "Menu Item C",
      quantity: 3,
      date: "2023-10-17",
      offeredPrice: "$30.00",
      phoneNumber: "+1122334455",
      remarks: "Extra spicy.",
      status: null,
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      menuItem: "Menu Item D",
      quantity: 4,
      date: "2023-10-18",
      offeredPrice: "$25.00",
      phoneNumber: "+2233445566",
      remarks: "Please call before delivery.",
      status: null,
    },
    {
      id: 5,
      name: "Charlie Green",
      email: "charlie.green@example.com",
      menuItem: "Menu Item E",
      quantity: 1,
      date: "2023-10-19",
      offeredPrice: "$10.00",
      phoneNumber: "+3344556677",
      remarks: "No delivery after 6 PM.",
      status: null,
    },
    {
      id: 6,
      name: "Diana White",
      email: "diana.white@example.com",
      menuItem: "Menu Item F",
      quantity: 2,
      date: "2023-10-20",
      offeredPrice: "$18.00",
      phoneNumber: "+4455667788",
      remarks: "Leave at the front door.",
      status: null,
    },
  ]);

  const handleAccept = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "accepted" } : order
      )
    );
  };

  const handleDecline = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "declined" } : order
      )
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" mb={4} textAlign="center" fontWeight="bold">
        Orders
      </Text>
      <Slider {...settings}>
        {orders.map((order) => (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={2}
            key={order.id}
          >
            <GridItem>
              <Card boxShadow="md" width="300px" margin="0 auto">
                <CardHeader>
                  <Text fontSize="xl">Order #{order.id}</Text>
                </CardHeader>
                <CardBody>
                  <Stack spacing={4}>
                    <Text>
                      <strong>Name:</strong> {order.name}
                    </Text>
                    <Text>
                      <strong>Email:</strong> {order.email}
                    </Text>
                    <Text>
                      <strong>Menu Item:</strong> {order.menuItem}
                    </Text>
                    <Text>
                      <strong>Quantity:</strong> {order.quantity}
                    </Text>
                    <Text>
                      <strong>Date:</strong> {order.date}
                    </Text>
                    <Text>
                      <strong>Offered Price:</strong> {order.offeredPrice}
                    </Text>
                    <Text>
                      <strong>Phone Number:</strong> {order.phoneNumber}
                    </Text>
                    <Text>
                      <strong>Remarks:</strong> {order.remarks}
                    </Text>
                    {order.status === null ? (
                      <Stack direction="row" spacing={4}>
                        <Button
                          colorScheme="green"
                          onClick={() => handleAccept(order.id)}
                        >
                          Accept
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDecline(order.id)}
                        >
                          Decline
                        </Button>
                      </Stack>
                    ) : (
                      <Text>
                        {order.status === "accepted" ? (
                          <span style={{ color: "green" }}>
                            <CheckIcon boxSize={5} /> Accepted
                          </span>
                        ) : (
                          <span style={{ color: "red" }}>
                            <CloseIcon boxSize={5} /> Declined
                          </span>
                        )}
                      </Text>
                    )}
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>
          </Grid>
        ))}
      </Slider>
    </Box>
  );
};

export default OrderPage;
