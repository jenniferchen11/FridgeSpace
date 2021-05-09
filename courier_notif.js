import { CourierClient } from "@trycourier/courier";

const courier = CourierClient({ authorizationToken: "******************" });

// Sending a message (email & SMS) with courier API
const { messageId } = await courier.send({
  eventId: "PS4NEM8MPF44X2K40Z6NMGAMXY6T",
  recipientId: "239fec2a-f053-43a5-bc43-b90c039af5d4",
  profile: {
    phone_number: "**********",
  },
  data: {
    username: "Joshua",
    food_item: [
      "Green beans: 7 days",
      "Cheese: 10 days",
      "Orange Juice: 3 days",
      "Milk: 4 days",
    ],
  },
  override: {
  },
});
