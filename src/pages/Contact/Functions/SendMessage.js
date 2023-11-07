import { app } from "../../../services/firebase/credentials";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { fields } from "./InitialFields";
import swal from "sweetalert";

const SendMessage = (fieldEmail, setFieldEmail) => {
  const db = getFirestore(app);
  const { yourName, email, message } = fieldEmail;
  /* Validations + sending data to bbdd */

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    if (!yourName || !email || !message) return swal("Oops", "Fields cannot be empty...", "error");
    else {
      try {
        await addDoc(collection(db, "usuarios"), {
          name: yourName,
          email: email,
          message: message,
        });
        setFieldEmail(fields);
        return swal("Thanks!", "Submitted form", "success");
      } catch (error) {
        alert(error);
      }
    }
  };
  return { handleSubmitMessage };
};

export default SendMessage;
