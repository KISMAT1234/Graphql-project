const amqp = require('amqplib');

async function Practise() {
    try  {
        await amqp.connect('amqp://localhost', function(err, connection) {
            console.log('first')
          if(err) {
            console.log('error in connection')
            throw err;
          }

          connection.createCHannel(function(err, channel){
            console.log('second')
                if(err) { 
                    throw err;
                }

                channel.assertQueue('notification',{
                    durable:false
                })
                channel.sendToQueue('new_queue', Buffer.from('Hello World!'))
                console.log('data send to queue')
                channel.close()
                connection.close()
          })
       })
    }
    catch(error) {
        console.log(error,'error')
    }
}
Practise()