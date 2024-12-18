require('module-alias/register');

const { faker } = require('@faker-js/faker');

const mongoConnect = require('@Database/mongo-connect.js');
const { model: Message } = require('@Features/message/index.js');

const mongoUrl = process.argv[2] || 'mongodb://127.0.0.1:27017/StudioYosepRA';

const db = mongoConnect(mongoUrl);

const amountArg = parseInt(process.argv[3], 10) || 50;

faker.seed(100);

async function generateFakeMessages(amount) {
  const messages = [];

  for (let i = 0; i < amount; i += 1) {
    const newMessage = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      body: faker.lorem.paragraphs({ min: 3, max: 5 }),
      status: 'unread',
      createdAt: faker.date.recent({ days: 180 }),
    };

    messages.push(newMessage);
  }

  return messages;
}

async function resetAndGenerateFakeMessages(amount) {
  await Message.deleteMany({});

  const messages = await generateFakeMessages(amount);
  const savedMessages = await Message.create(messages);

  return savedMessages;
}

resetAndGenerateFakeMessages(amountArg).then((messages) => {
  console.log(
    `Fake message generation successful. Generated ${amountArg} messages.`,
  );
  console.log('Messages length:', messages.length);

  db.close();
});
