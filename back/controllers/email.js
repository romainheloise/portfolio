const transporter = require("../config/nodemailer");

class Mail {
  static contactP = async (req, res, next) => {
    const { nom, prenom, mail, contenu } = req.body;

    const message = {
      from: "rmnheo@gmail.com",
      to: "romheloise@gmail.com",
      subject: "Portfolio Message",
      html: `<!DOCTYPE html>
            <html lang="en">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title> 
            </head>
            
            <body>
                <h1>${nom}</h1>
                <h2>${prenom}</h2>
                <h2>${mail}</h2>
                <p>${contenu}</p>            
            </body>
            </html>`,
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        next(ApiError.mysql("Probleme dans l'envoi de mail"));
        return;
      }
      res.status(200).json("Mail envoyé");
    });
  };
}

module.exports = Mail;
