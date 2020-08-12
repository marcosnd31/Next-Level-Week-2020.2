const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) => {
    // Inserir dados

    proffy = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '89994635875',
        bio: 'Instrutor de Educação Física'
    }

    classValue = {
        subject: 'Educação Física',
        cost: '20'
    }

    classSchedule = [{
        weekday: 1,
        time_from: 720,
        time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 2320
    }]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})

    // Consultar dados inseridos
})