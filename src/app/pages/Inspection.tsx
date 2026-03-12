import { useState } from "react";
import { Droplet, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Slider } from "../components/ui/slider";
import { motion, AnimatePresence } from "motion/react";

interface TestResult {
  ph: number;
  turbidity: number;
  chlorine: number;
  bacteria: number;
}

interface Recommendation {
  condition: string;
  safe: boolean;
}

export function Inspection() {
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [ph, setPh] = useState([7]);
  const [turbidity, setTurbidity] = useState([1]);
  const [chlorine, setChlorine] = useState([0.5]);
  const [bacteria, setBacteria] = useState([5]);

  const startTest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTestResult({
        ph: ph[0],
        turbidity: turbidity[0],
        chlorine: chlorine[0],
        bacteria: bacteria[0],
      });
      setIsLoading(false);
    }, 2000);
  };

  const getRecommendations = (result: TestResult): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    // pH level recommendations
    if (result.ph < 6.5 || result.ph > 8.5) {
      recommendations.push({
        condition: "Yurak-qon tomir kasalliklari",
        safe: false,
      });
      recommendations.push({
        condition: "Oshqozon yarasi",
        safe: false,
      });
    }

    // Turbidity recommendations
    if (result.turbidity > 5) {
      recommendations.push({
        condition: "Buyrak kasalliklari",
        safe: false,
      });
      recommendations.push({
        condition: "Jigar kasalliklari",
        safe: false,
      });
      recommendations.push({
        condition: "Allergiya kasalliklari",
        safe: false,
      });
    }

    // Chlorine recommendations
    if (result.chlorine > 4) {
      recommendations.push({
        condition: "Nafas yo'llari kasalliklari",
        safe: false,
      });
      recommendations.push({
        condition: "Astma",
        safe: false,
      });
    }

    // Bacteria recommendations
    if (result.bacteria > 10) {
      recommendations.push({
        condition: "Immunitet zaif odamlar",
        safe: false,
      });
      recommendations.push({
        condition: "Homilador ayollar",
        safe: false,
      });
      recommendations.push({
        condition: "Kichik yoshdagi bolalar",
        safe: false,
      });
      recommendations.push({
        condition: "Ich-ichak kasalliklari",
        safe: false,
      });
    }

    // If water is good quality
    if (recommendations.length === 0) {
      recommendations.push({
        condition: "Barcha iste'molchilar uchun xavfsiz",
        safe: true,
      });
    }

    return recommendations;
  };

  const getOverallQuality = (result: TestResult) => {
    const phOk = result.ph >= 6.5 && result.ph <= 8.5;
    const turbidityOk = result.turbidity <= 5;
    const chlorineOk = result.chlorine <= 4;
    const bacteriaOk = result.bacteria <= 10;

    if (phOk && turbidityOk && chlorineOk && bacteriaOk) {
      return { status: "excellent", text: "A'lo sifatli", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-500" };
    } else if (
      (phOk || (result.ph >= 6.0 && result.ph <= 9.0)) &&
      result.turbidity <= 10 &&
      result.chlorine <= 5 &&
      result.bacteria <= 20
    ) {
      return { status: "good", text: "Yaxshi", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-500" };
    } else if (result.bacteria > 50 || result.turbidity > 20) {
      return { status: "poor", text: "Yomon", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-500" };
    } else {
      return { status: "fair", text: "O'rtacha", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-500" };
    }
  };

  return (
    <div className="min-h-full p-6">
      {/* Header */}
      <div className="mb-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Suv Tekshiruvi</h1>
        <p className="text-gray-600">Suv namunasining parametrlarini kiriting</p>
      </div>

      {!testResult ? (
        <div className="space-y-6">
          {/* pH Level */}
          <Card className="p-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                pH darajasi: <span className="text-blue-600 font-semibold">{ph[0].toFixed(1)}</span>
              </label>
              <Slider
                value={ph}
                onValueChange={setPh}
                min={0}
                max={14}
                step={0.1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">Normal: 6.5 - 8.5</p>
            </div>
          </Card>

          {/* Turbidity */}
          <Card className="p-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loyqalik (NTU): <span className="text-blue-600 font-semibold">{turbidity[0].toFixed(1)}</span>
              </label>
              <Slider
                value={turbidity}
                onValueChange={setTurbidity}
                min={0}
                max={30}
                step={0.1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">Normal: 0 - 5 NTU</p>
            </div>
          </Card>

          {/* Chlorine */}
          <Card className="p-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Xlor (mg/L): <span className="text-blue-600 font-semibold">{chlorine[0].toFixed(1)}</span>
              </label>
              <Slider
                value={chlorine}
                onValueChange={setChlorine}
                min={0}
                max={10}
                step={0.1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">Normal: 0.2 - 4 mg/L</p>
            </div>
          </Card>

          {/* Bacteria */}
          <Card className="p-5">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bakteriyalar (CFU/100ml): <span className="text-blue-600 font-semibold">{bacteria[0].toFixed(0)}</span>
              </label>
              <Slider
                value={bacteria}
                onValueChange={setBacteria}
                min={0}
                max={100}
                step={1}
                className="mb-2"
              />
              <p className="text-xs text-gray-500">Normal: 0 - 10 CFU/100ml</p>
            </div>
          </Card>

          <Button
            onClick={startTest}
            disabled={isLoading}
            className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Droplet className="w-5 h-5" />
                </motion.div>
                Tekshirilmoqda...
              </div>
            ) : (
              "Tekshirishni boshlash"
            )}
          </Button>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Overall Quality */}
            <Card className={`p-6 border-2 ${getOverallQuality(testResult).borderColor} ${getOverallQuality(testResult).bgColor}`}>
              <div className="text-center">
                <div className={`text-5xl font-bold mb-2 ${getOverallQuality(testResult).color}`}>
                  {getOverallQuality(testResult).text}
                </div>
                <p className="text-gray-600">Umumiy suv sifati</p>
              </div>
            </Card>

            {/* Test Results */}
            <Card className="p-5">
              <h3 className="font-semibold text-gray-800 mb-4">Test natijalari:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">pH darajasi:</span>
                  <span className="font-semibold">{testResult.ph.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Loyqalik:</span>
                  <span className="font-semibold">{testResult.turbidity.toFixed(1)} NTU</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Xlor:</span>
                  <span className="font-semibold">{testResult.chlorine.toFixed(1)} mg/L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Bakteriyalar:</span>
                  <span className="font-semibold">{testResult.bacteria.toFixed(0)} CFU/100ml</span>
                </div>
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-5">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Tavsiyalar:
              </h3>
              <div className="space-y-3">
                {getRecommendations(testResult).map((rec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      rec.safe ? "bg-green-50" : "bg-red-50"
                    }`}
                  >
                    {rec.safe ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className={`font-medium ${rec.safe ? "text-green-800" : "text-red-800"}`}>
                        {rec.condition}
                      </p>
                      {!rec.safe && (
                        <p className="text-sm text-red-600 mt-1">
                          Foydalanish tavsiya qilinmaydi
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Button
              onClick={() => setTestResult(null)}
              variant="outline"
              className="w-full h-12 text-base"
            >
              Yangi tekshiruv
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
