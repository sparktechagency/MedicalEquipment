import { IoMdNotificationsOutline } from "react-icons/io";

// Mock JSON data
const notifications = [
  {
    _id: "1",
    title: "Order Placed",
    body: "A new order has been placed successfully.",
    createdAt: "2025-05-10T10:00:00Z",
    isRead: false,
  },
  {
    _id: "2",
    title: "Payment Received",
    body: "Payment for order #1234 has been received.",
    createdAt: "2025-05-09T15:30:00Z",
    isRead: true,
  },
  {
    _id: "3",
    title: "Shipping Update",
    body: "Your order has been shipped.",
    createdAt: "2025-05-08T09:00:00Z",
    isRead: false,
  },
];

const SellerNotificationPage = () => {
  if (notifications.length === 0) {
    return <div>No notifications available</div>;
  }

  return (
    <div className="p-4  rounded-xl m-2 h-[88vh] w-full">
      <h1 className="text-2xl font-bold mb-4">Notification</h1>

      <div className="space-y-4">
        {notifications.map((item) => (
          <div
            key={item._id}
            className={`rounded-md p-4 flex items-center space-x-4 border border-[#1397D5] ${
              item.isRead ? "bg-gray-100" : "bg-white"
            }`}
          >
            <div className="text-[#1397D5] border border-[#1397D5] rounded-full p-2">
              <IoMdNotificationsOutline size={30} />
            </div>
            <div>
              <p className="font-semibold">{item.title}</p>
              {item.isRead && (
                <p className="text-gray-500 mt-2">{item.body}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerNotificationPage;