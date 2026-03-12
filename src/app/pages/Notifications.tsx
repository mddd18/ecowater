import { Bell, Droplet, AlertTriangle, CheckCircle, MapPin } from "lucide-react";
import { Card } from "../components/ui/card";
import { motion } from "motion/react";

interface Notification {
  id: string;
  type: "info" | "warning" | "success" | "alert";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export function Notifications() {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "warning",
      title: "Suv sifati o'zgarishi",
      message: "Yunusobod tumanida suv sifati o'rtachadan pastga tushdi. Tekshiruv tavsiya etiladi.",
      time: "2 soat oldin",
      read: false,
    },
    {
      id: "2",
      type: "success",
      title: "Test yakunlandi",
      message: "Oxirgi testingiz muvaffaqiyatli yakunlandi. Natija: A'lo sifatli.",
      time: "2 kun oldin",
      read: false,
    },
    {
      id: "3",
      type: "info",
      title: "Yangi test punkti",
      message: "Chilonzor tumanida yangi test punkti ochildi. Endi u yerda ham suv sifatini tekshirishingiz mumkin.",
      time: "3 kun oldin",
      read: true,
    },
    {
      id: "4",
      type: "alert",
      title: "Muhim ogohlantirish",
      message: "Mirzo Ulug'bek tumanida bakteriya darajasi me'yordan oshdi. Suvni qaynating!",
      time: "5 kun oldin",
      read: true,
    },
    {
      id: "5",
      type: "info",
      title: "Tizim yangilandi",
      message: "EcoWater ilovasi yangi xususiyatlar bilan yangilandi. Endi real vaqt rejimida ma'lumot olishingiz mumkin.",
      time: "1 hafta oldin",
      read: true,
    },
    {
      id: "6",
      type: "success",
      title: "Profil to'ldirildi",
      message: "Profilingiz muvaffaqiyatli to'ldirildi va tasdiqlandi.",
      time: "2 hafta oldin",
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "info":
        return <Bell className="w-5 h-5 text-blue-600" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "alert":
        return <Droplet className="w-5 h-5 text-red-600" />;
      default:
        return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  const getBgColor = (type: string, read: boolean) => {
    if (read) return "bg-gray-50";
    switch (type) {
      case "info":
        return "bg-blue-50";
      case "warning":
        return "bg-yellow-50";
      case "success":
        return "bg-green-50";
      case "alert":
        return "bg-red-50";
      default:
        return "bg-white";
    }
  };

  const getBorderColor = (type: string, read: boolean) => {
    if (read) return "border-gray-200";
    switch (type) {
      case "info":
        return "border-blue-200";
      case "warning":
        return "border-yellow-200";
      case "success":
        return "border-green-200";
      case "alert":
        return "border-red-200";
      default:
        return "border-gray-200";
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-full p-6 pb-24">
      {/* Header */}
      <div className="mb-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Bildirishnomalar
        </h1>
        <p className="text-gray-600">
          {unreadCount > 0
            ? `${unreadCount} ta o'qilmagan xabar`
            : "Barcha xabarlar o'qilgan"}
        </p>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card
              className={`p-4 border ${getBgColor(notification.type, notification.read)} ${getBorderColor(notification.type, notification.read)} ${
                !notification.read ? "shadow-md" : "shadow-sm"
              }`}
            >
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className={`font-semibold text-gray-800 ${
                        !notification.read ? "font-bold" : ""
                      }`}
                    >
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State (if no notifications) */}
      {notifications.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Bell className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-600">Bildirishnomalar yo'q</p>
        </div>
      )}
    </div>
  );
}
