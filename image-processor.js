import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve("static/images");
const outputDir = path.resolve("static/low-res-images");

const imagePreprocessor = async () => {
   if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
   }

   const files = fs.readdirSync(inputDir).filter((file) => {
      const fullPath = path.join(inputDir, file);
      return fs.statSync(fullPath).isFile();
   });

   for (const file of files) {
      if (file.endsWith(".jpg") || file.endsWith(".png")) {
         const inputFilePath = path.join(inputDir, file);
         const outputFilePath = path.join(outputDir, file);

         await sharp(inputFilePath)
            .resize(100)
            .toFile(outputFilePath, (err) => {
               if (err) {
                  console.error(`Error processing ${file}:`, err);
               }
            });
      }
   }
   console.log("Image preprocessing complete.");
};

// Vite plugin
export default function imageProcessingPlugin() {
   return {
      name: "vite-image-processing-plugin",
      buildStart() {
         imagePreprocessor();
      },
   };
}
