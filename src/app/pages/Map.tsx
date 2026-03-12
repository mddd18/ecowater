import { useState } from "react";
import { MapPin, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

interface District {
  name: string;
  waterQuality: "excellent" | "good" | "fair" | "poor";
  testCount: number;
}

interface Region {
  name: string;
  districts: District[];
}

export function Map() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions: Region[] = [
    {
      name: "Qoraqalpog'iston Respublikasi",
      districts: [
        { name: "Nukus", waterQuality: "good", testCount: 45 },
        { name: "To'rtko'l", waterQuality: "fair", testCount: 23 },
        { name: "Qo'ng'irot", waterQuality: "good", testCount: 31 },
        { name: "Taxtako'pir", waterQuality: "fair", testCount: 18 },
        { name: "Chimboy", waterQuality: "good", testCount: 27 },
        { name: "Xo'jayli", waterQuality: "excellent", testCount: 34 },
        { name: "Mo'ynoq", waterQuality: "fair", testCount: 15 },
        { name: "Kegeyli", waterQuality: "good", testCount: 22 },
      ],
    },
    {
      name: "Andijon viloyati",
      districts: [
        { name: "Andijon", waterQuality: "excellent", testCount: 52 },
        { name: "Asaka", waterQuality: "good", testCount: 38 },
        { name: "Xo'jaobod", waterQuality: "good", testCount: 29 },
      ],
    },
    {
      name: "Buxoro viloyati",
      districts: [
        { name: "Buxoro", waterQuality: "good", testCount: 48 },
        { name: "Kogon", waterQuality: "good", testCount: 35 },
        { name: "Olot", waterQuality: "fair", testCount: 21 },
      ],
    },
    {
      name: "Farg'ona viloyati",
      districts: [
        { name: "Farg'ona", waterQuality: "excellent", testCount: 56 },
        { name: "Marg'ilon", waterQuality: "good", testCount: 41 },
        { name: "Qo'qon", waterQuality: "good", testCount: 39 },
      ],
    },
    {
      name: "Jizzax viloyati",
      districts: [
        { name: "Jizzax", waterQuality: "good", testCount: 33 },
        { name: "Zomin", waterQuality: "excellent", testCount: 25 },
        { name: "Do'stlik", waterQuality: "good", testCount: 19 },
      ],
    },
    {
      name: "Namangan viloyati",
      districts: [
        { name: "Namangan", waterQuality: "excellent", testCount: 47 },
        { name: "Chortoq", waterQuality: "good", testCount: 28 },
        { name: "Pop", waterQuality: "good", testCount: 24 },
      ],
    },
    {
      name: "Navoiy viloyati",
      districts: [
        { name: "Navoiy", waterQuality: "fair", testCount: 36 },
        { name: "Zarafshon", waterQuality: "good", testCount: 30 },
        { name: "Nurota", waterQuality: "fair", testCount: 17 },
      ],
    },
    {
      name: "Qashqadaryo viloyati",
      districts: [
        { name: "Qarshi", waterQuality: "good", testCount: 42 },
        { name: "Shahrisabz", waterQuality: "excellent", testCount: 26 },
        { name: "Muborak", waterQuality: "good", testCount: 20 },
      ],
    },
    {
      name: "Samarqand viloyati",
      districts: [
        { name: "Samarqand", waterQuality: "excellent", testCount: 61 },
        { name: "Bulung'ur", waterQuality: "good", testCount: 32 },
        { name: "Jomboy", waterQuality: "good", testCount: 27 },
      ],
    },
    {
      name: "Sirdaryo viloyati",
      districts: [
        { name: "Guliston", waterQuality: "good", testCount: 37 },
        { name: "Yangiyer", waterQuality: "good", testCount: 22 },
        { name: "Sirdaryo", waterQuality: "fair", testCount: 18 },
      ],
    },
    {
      name: "Surxondaryo viloyati",
      districts: [
        { name: "Termiz", waterQuality: "good", testCount: 44 },
        { name: "Denov", waterQuality: "excellent", testCount: 29 },
        { name: "Sho'rchi", waterQuality: "good", testCount: 21 },
      ],
    },
    {
      name: "Toshkent viloyati",
      districts: [
        { name: "Angren", waterQuality: "good", testCount: 40 },
        { name: "Olmaliq", waterQuality: "fair", testCount: 35 },
        { name: "Chirchiq", waterQuality: "good", testCount: 38 },
      ],
    },
    {
      name: "Toshkent shahri",
      districts: [
        { name: "Yunusobod", waterQuality: "excellent", testCount: 58 },
        { name: "Chilonzor", waterQuality: "excellent", testCount: 54 },
        { name: "Mirzo Ulug'bek", waterQuality: "good", testCount: 49 },
      ],
    },
    {
      name: "Xorazm viloyati",
      districts: [
        { name: "Urganch", waterQuality: "good", testCount: 43 },
        { name: "Xiva", waterQuality: "excellent", testCount: 31 },
        { name: "Shovot", waterQuality: "good", testCount: 23 },
      ],
    },
  ];

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "excellent":
        return "bg-green-500";
      case "good":
        return "bg-blue-500";
      case "fair":
        return "bg-yellow-500";
      case "poor":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getQualityText = (quality: string) => {
    switch (quality) {
      case "excellent":
        return "A'lo";
      case "good":
        return "Yaxshi";
      case "fair":
        return "O'rtacha";
      case "poor":
        return "Yomon";
      default:
        return "Noma'lum";
    }
  };

  const selectedRegionData = regions.find((r) => r.name === selectedRegion);

  return (
    <div className="min-h-full p-6">
      {/* Header */}
      <div className="mb-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Xarita</h1>
        <p className="text-gray-600">Viloyatlar va tumanlar bo'yicha suv sifati</p>
      </div>

      {!selectedRegion ? (
        /* Regions List */
        <div className="space-y-3">
          {regions.map((region, index) => (
            <motion.button
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedRegion(region.name)}
              className="w-full bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{region.name}</p>
                    <p className="text-sm text-gray-500">
                      {region.districts.length} ta tuman
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        /* Districts List */
        <div>
          <button
            onClick={() => setSelectedRegion(null)}
            className="mb-4 text-blue-600 flex items-center gap-1"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Orqaga
          </button>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {selectedRegion}
          </h2>

          <div className="space-y-3">
            {selectedRegionData?.districts.map((district, index) => (
              <motion.div
                key={district.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-4 shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-800">{district.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {district.testCount} ta test o'tkazilgan
                    </p>
                  </div>
                  <div className="text-right">
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-white text-sm ${getQualityColor(
                        district.waterQuality
                      )}`}
                    >
                      {getQualityText(district.waterQuality)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
