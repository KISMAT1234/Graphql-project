const amqp = require('amqplib');

async function receiveMail() {
    try {
          const connection = await amqp.connect("amqp://localhost")
          const channel = await connection.createChannel()

          await channel.assertQueue("normal_queue", {durable:false})
          channel.consume("normal_queue", (message) => {
              console.log(message,'received message in normal queue')
              channel.ack(message);
          })
    } catch (error) {
        console.log(error);
    }
}
receiveMail()