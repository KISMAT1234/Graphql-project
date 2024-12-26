const amqp = require('amqplib');

async function receiveMail() {
    try {
          const connection = await amqp.connect("amqp://localhost")
          const channel = await connection.createChannel()

          await channel.assertQueue("mail_queue", {durable:false})
          channel.consume("mail_queue", (message) => {
              console.log(message,'received message aaaa')
              channel.ack(message);
          })
    } catch (error) {
        console.log(error);
    }
}
receiveMail()