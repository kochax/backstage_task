import { writeFileSync } from "fs";
import path from "path";
import { validateFileUpload } from "./validation/file-upload-validation";

export default defineEventHandler(async (event) => {
  const files = await validateFileUpload(event);
  const file = files[0];
  const fileName = path.join("uploads", file.filename || `file-${Date.now()}`);
  const filePath = path.join(process.cwd(), "public", fileName);

  try {
    writeFileSync(filePath, file.data);
    return fileName;
  } catch (error) {
    throw createError({ message: "File upload failed" });
  }
});
