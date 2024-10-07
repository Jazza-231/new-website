import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve("src/lib/assets/images");
const outputDir = path.resolve("src/lib/assets/low-res-images");

export const imagePreprocessor = async () => {
   if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
   }

   const files = fs.readdirSync(inputDir).filter((file) => {
      const fullPath = path.join(inputDir, file);
      return fs.statSync(fullPath).isFile();
   });

   files.forEach((file) => {
      if (file.endsWith(".jpg") || file.endsWith(".png")) {
         const inputFilePath = path.join(inputDir, file);
         const outputFilePath = path.join(outputDir, file);

         sharp(inputFilePath)
            .resize(100)
            .toFile(outputFilePath, (err, info) => {
               if (err) {
                  console.error(`Error processing ${file}:`, err);
               } else {
                  console.log(`Processed ${file}:`, info);
               }
            });
      }
   });
};
