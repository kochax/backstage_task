import { H3Event, EventHandlerRequest, MultiPartData } from "h3";
import { MAX_FILE_UPLOAD_SIZE_BYTES } from "~/shared/constants/file-size";

export async function validateFileUpload(
  event: H3Event<EventHandlerRequest>
): Promise<MultiPartData[]> {
  const files = await readMultipartFormData(event);

  const contentLength =
    getHeader(event, "content-length") || getHeader(event, "Content-Length");

  if (!files) {
    throw createError({ message: "Invalid file!", status: 400 });
  }

  if (files.length > 1) {
    throw createError({
      message: "Only 1 file upload is allowed!",
      status: 400,
    });
  }

  if (!contentLength) {
    throw createError({
      message: "content-length header is missing",
      status: 400,
    });
  } else if (parseInt(contentLength) >= MAX_FILE_UPLOAD_SIZE_BYTES) {
    throw createError({
      message: "Maximum file size exceeded.",
      statusCode: 400,
    });
  }

  return files;
}
