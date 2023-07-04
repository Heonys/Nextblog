import { sendMailer } from "@/service/email";
import * as yup from "yup";

const dataSchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const data = await req.json();

  if (!dataSchema.isValidSync(data)) {
    return new Response(JSON.stringify("유효하지 않는 포맷"), { status: 400 });
  }

  return sendMailer(data)
    .then(
      (res) =>
        new Response(JSON.stringify({ message: "메시지 성공적" }), {
          status: 200,
        })
    )
    .catch(
      (res) =>
        new Response(JSON.stringify({ message: "메시지 실패" }), {
          status: 500,
        })
    );
}
