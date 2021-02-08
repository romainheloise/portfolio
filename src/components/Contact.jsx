import "./Contact.css";
import { useEffect, useState } from "react";
import Axios from "axios";

const errorInit = {
  nom: "",
  prenom: "",
  mail: "",
  contenu: "",
};

const Contact = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [anim, setAnim] = useState(false);
  const [inputs, setInputs] = useState({
    nom: "",
    prenom: "",
    mail: "",
    contenu: "",
  });
  const [error, setError] = useState(errorInit);
  const [success, setSuccess] = useState("");

  const inputsHandler = (e) => {
    setError(errorInit);
    setSuccess("");
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };

  const animEnd = () => {
    if (!anim) {
      setIsDisplayed(false);
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();
    let writeError = { ...error };
    let validate = [];
    for (const key in inputs) {
      if (!inputs[key]) {
        writeError[key] = "Merci de remplir " + [key];
        validate.push(false);
      }
    }
    setError(writeError);

    if (validate.length === 0) {
      try {
        await Axios.post("/mail", inputs);
        setSuccess("Message envoyé");
      } catch (err) {}
    }
  };

  return (
    <div className="contact-ball">
      <form
        style={{
          animation: `${anim ? "formon" : "formoff"} 0.2s ease forwards`,
        }}
        onAnimationEnd={animEnd}
        onSubmit={sendForm}
      >
        {isDisplayed && (
          <div className="contact-inputs">
            <input
              id="nom"
              type="text"
              value={inputs.nom}
              placeholder={error.nom ? error.nom : "Nom"}
              onChange={inputsHandler}
            />

            <input
              id="prenom"
              type="text"
              value={inputs.prenom}
              placeholder={error.prenom ? error.prenom : "Prenom"}
              onChange={inputsHandler}
            />

            <input
              id="mail"
              type="text"
              value={inputs.mail}
              placeholder={error.mail ? error.mail : "E mail"}
              onChange={inputsHandler}
            />

            <textarea
              id="contenu"
              value={inputs.contenu}
              onChange={inputsHandler}
              placeholder={error.contenu ? error.contenu : "Contenu"}
            />
            <input type="submit" value={success ? success : "envoyer"} />
          </div>
        )}
      </form>

      <span
        onClick={() => {
          setIsDisplayed(!isDisplayed);
          setAnim(!anim);
        }}
      >
        .CONTACT
      </span>
    </div>
  );
};

export default Contact;

// <div
// className="network"
// style={{
//   transform: `translateX(${(1 - ratio) * -800}px )`,
// }}
// >
// <a href="https://www.linkedin.com/in/romain-heloise/" target="blank">
//   <AiFillLinkedin size={30} />
// </a>
// <a href="https://github.com/romainheloise" target="blank">
//   <AiFillGithub size={30} />
// </a>
// </div>
