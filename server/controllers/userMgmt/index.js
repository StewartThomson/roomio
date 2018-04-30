const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_ADD,
    pass: process.env.EMAIL_PASS
  }
});

const inviteUser = async function(req, res){
  let mailOptions = {
    from: process.env.EMAIL_ADD,
    to: req.body.email,
    subject: `You've been invited to a room in roomio!`,
    text: `${req.body.inviter} has invited you to join room ${req.body.room}. 
    Click the following link to join: stewartdev.ca/roomio.
    Join the room using room key: ${req.body.roomKey}
    This is an automated email, please do not reply.`
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      res.send(500, err);
    }else{
      res.json(200, info.response);
    }
  });
};

module.exports = {
  inviteUser,
}