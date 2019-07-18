const { Alice, Reply } = require('yandex-dialogs-sdk')
const alice = new Alice();
const allCafes = ['SUSHI city', 'Столовка', 'Мама кафе', 'Burger King', 'KFC', 'MacDonalds', 'Масленица', 'Миндаль', 'Большой', 'Аврора', 'Bekker', 'True Cebab'];
const junkCafes = ['Burger King', 'KFC', 'MacDonalds', 'True Cebab', 'Bekker']
const healthCafes = ['SUSHI city', 'Столовка', 'Мама кафе', 'Масленица', 'Миндаль', 'Большой', 'Аврора']

const welcomeMatcher = ctx => ctx.data.session.new === true;

alice.command(welcomeMatcher, ctx =>
    Reply.text('Привет! Спроси меня где поесть сегодня и я отвечу.')
);

alice.command(['Где похавать сегодня?', 'Куда пойти поесть сегодня?', 'Куда пойти поесть', 'Где пообедать?', 'Где покушать?', 'Где поесть?'], async ctx =>
    Reply.text('Идите в: ' + allCafes[Math.floor(Math.random() * allCafes.length)])
);

alice.command('Спасибо', ctx =>
    Reply.text('Не за что) Обращайтесь завтра'));

alice.any(ctx => Reply.text('Ты не спросил где покушать сегодня ( Вот и будешь голодный. Спроси ещё раз!'));

const server = alice.listen(3001, '/');
