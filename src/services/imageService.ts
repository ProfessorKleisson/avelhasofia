import { GoogleGenAI } from "@google/genai";
import { useState, useEffect } from "react";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function useIshtarImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function generate() {
      try {
        const prompt = "Cinematic wide shot of a futuristic New York City under siege, blending ancient Mesopotamian ziggurats with glass skyscrapers. Dominant color palette is deep charcoal black, burnished bronze, and glowing vibrant Emerald Green. In the foreground, a young girl (Hannah) with a glowing brain implant stands before a colossal bronze statue of the goddess Ishtar that is integrated with server racks and cybernetic cables. Emerald energy flows like liquid magic through cuneiform script. Cybernetic soldiers and magical entities clash in the background. Dark, occult cyberpunk, brutalist, and intensely magical. Ultra-detailed, 8k, Unreal Engine 5 render style.";
        
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "16:9",
            },
          },
        });

        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
            break;
          }
        }
      } catch (err) {
        console.error("Failed to generate image:", err);
        setError("Failed to summon the divine image.");
      } finally {
        setLoading(false);
      }
    }

    generate();
  }, []);

  return { imageUrl, loading, error };
}
