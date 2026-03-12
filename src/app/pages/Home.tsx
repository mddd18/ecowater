import { Droplet, Heart, Leaf, Shield } from "lucide-react";
import { motion } from "motion/react";

export function Home() {
  const slogans = [
    {
      text: "Suv - hayot manbai",
      icon: Droplet,
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "Toza suv - sog'lom hayot",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      text: "Suvni asrang - tabiatni qo'riqlab qoling",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Suv sifatini nazorat qiling",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <div className="min-h-full p-6">
      {/* Header */}
      <div className="text-center mb-8 pt-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg"
        >
          <Droplet className="w-10 h-10 text-white" />
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">EcoWater</h1>
        <p className="text-gray-600">Suv sifatini nazorat qilish tizimi</p>
      </div>

      {/* Slogans Grid */}
      <div className="space-y-4 mb-8">
        {slogans.map((slogan, index) => {
          const Icon = slogan.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${slogan.color} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg font-medium text-gray-800">
                  {slogan.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 text-white">
          <p className="text-3xl font-bold mb-1">150+</p>
          <p className="text-sm opacity-90">Test punktlari</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 text-white">
          <p className="text-3xl font-bold mb-1">98%</p>
          <p className="text-sm opacity-90">Toza suv</p>
        </div>
      </div>
    </div>
  );
}
