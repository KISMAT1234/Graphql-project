const amqp = require('amqplib');

async function sendMail() {
    try {
       const connection = await amqp.connect('amqp://localhost');
       const channel = await connection.createChannel();
       const exchange = "main_exchange";
       const routingKey = "send_mail";
       const message = "Hello World!";

       await channel.assertExchange(exchange, "direct", {durable: false})
       await channel.assertQueue("mail_queue", {durable: false})

       await channel.bindQueue("mail_queue", exchange, routingKey)

       channel.publish(exchange, routingKey, Buffer.from(message))
       console.log(message, 'data')


    } catch (error) {
        console.log(error);
    }
}

sendMail()