import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import "./valentine.css";

export default function ValentineSurprise() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-red-300 to-pink-400 animate-gradient p-4">
      <motion.h1
        className="text-5xl font-bold text-white drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Happy Valentine's Day! 💖
      </motion.h1>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Heart size={48} className="text-white animate-bounce" />
      </motion.div>

      <Button
        className="mt-6 bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-700 shadow-lg"
        onClick={() => setShowMessage(true)}
      >
        Click for a Surprise ❤️
      </Button>

      {showMessage && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Card className="bg-white p-6 rounded-2xl shadow-2xl max-w-md text-center">
            <CardContent>
              <h2 className="text-2xl font-semibold text-red-600">You're Amazing! 💕</h2>
              <p className="text-gray-700 mt-4">
                On this special day, just know that you are loved and appreciated more than words can say. Happy Valentine's Day! 💖
              </p>
              <div className="mt-4 text-sm text-gray-500">
                "Every moment with you is a treasure. Wishing you endless love and joy!"
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
}