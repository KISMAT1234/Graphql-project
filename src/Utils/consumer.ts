const amqp = require('amqplib');

async function receiveMail() {
    try {
          const connection = await amqp.connect("amqp://localhost")
          const channel = await connection.createChannel()

          await channel.assertQueue("subscribed_queue", {durable:false})
          channel.consume("subscribed_queue", (message) => {
              console.log(message,'received message in subscribed queue')
              channel.ack(message);
          })
    } catch (error) {
        console.log(error);
    }
}
receiveMail()