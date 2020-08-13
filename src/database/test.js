// Importar função que cria as tabelas
const Database = require('./db')
// Importar função que insere os valores
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
        whatsapp: '89994635875',
        bio: 'Instrutor de Educação Física'
    }

    classValue = {
        subject: 3,
        cost: '20'
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 2320
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
        
    // Consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1 
    `) 

    
    // Pesquisa de horário disponível
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "700"

    `)

    // console.log(selectClassesSchedules)
})