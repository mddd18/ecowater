import { useState } from "react";
import { User, Mail, Phone, MapPin, Edit2, Save } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { motion } from "motion/react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alisher Karimov",
    email: "alisher@example.com",
    phone: "+998 90 123 45 67",
    location: "Toshkent shahri, Yunusobod tumani",
  });

  const [tempProfile, setTempProfile] = useState(profile);

  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };

  const stats = [
    { label: "O'tkazilgan testlar", value: "12" },
    { label: "Oxirgi test", value: "2 kun oldin" },
    { label: "O'rtacha sifat", value: "A'lo" },
  ];

  return (
    <div className="min-h-full p-6 pb-24">
      {/* Header */}
      <div className="mb-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Shaxsiy kabinet</h1>
        <p className="text-gray-600">Profil ma'lumotlari va statistika</p>
      </div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {profile.name}
                </h2>
                <p className="text-sm text-gray-500">EcoWater foydalanuvchisi</p>
              </div>
            </div>
            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Edit2 className="w-4 h-4" />
                Tahrirlash
              </Button>
            )}
          </div>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <Input
                  value={tempProfile.email}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, email: e.target.value })
                  }
                  className="flex-1"
                />
              ) : (
                <span className="text-gray-700">{profile.email}</span>
              )}
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <Input
                  value={tempProfile.phone}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, phone: e.target.value })
                  }
                  className="flex-1"
                />
              ) : (
                <span className="text-gray-700">{profile.phone}</span>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              {isEditing ? (
                <Input
                  value={tempProfile.location}
                  onChange={(e) =>
                    setTempProfile({ ...tempProfile, location: e.target.value })
                  }
                  className="flex-1"
                />
              ) : (
                <span className="text-gray-700">{profile.location}</span>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="flex gap-3 mt-6">
              <Button onClick={handleSave} className="flex-1 gap-2">
                <Save className="w-4 h-4" />
                Saqlash
              </Button>
              <Button onClick={handleCancel} variant="outline" className="flex-1">
                Bekor qilish
              </Button>
            </div>
          )}
        </Card>
      </motion.div>

      {/* Statistics */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistika</h3>
        <div className="grid grid-cols-1 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{stat.label}</span>
                  <span className="text-xl font-bold text-blue-600">
                    {stat.value}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Test History */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Oxirgi testlar
        </h3>
        <div className="space-y-3">
          {[
            {
              date: "09.03.2026",
              location: "Yunusobod, Toshkent",
              result: "A'lo",
              color: "bg-green-500",
            },
            {
              date: "05.03.2026",
              location: "Chilonzor, Toshkent",
              result: "Yaxshi",
              color: "bg-blue-500",
            },
            {
              date: "01.03.2026",
              location: "Mirzo Ulug'bek, Toshkent",
              result: "A'lo",
              color: "bg-green-500",
            },
          ].map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{test.location}</p>
                    <p className="text-sm text-gray-500">{test.date}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-white text-sm ${test.color}`}
                  >
                    {test.result}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
