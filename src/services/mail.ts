import axios from "axios";
import { IDataMessage } from "components/Contact";
import { toast } from "react-toastify";

export async function sendMail(mailData: IDataMessage) {
  const { email, text, phone, name } = mailData;
  return axios
    .post("/mail/send", { email, text, phone, name })
    .then(({ data }) => data)
    .catch(({ response }) => {
      toast.error(response?.data?.message || "Щось пішло не так!");
    });
}
