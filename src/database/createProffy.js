// exportar função que insere os valores
module.exports = async function(db, {proffyValue, classValue, classScheduleValues}){
    // Inserir dados na tabela de professores
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    // Adiciona o id do professor inserido a uma variável
    const proffy_id = insertedProffy.lastID

    // Inserir dados na tabela classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
           "${classValue.subject}",
           "${classValue.cost}",
           "${proffy_id}" 
        );
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule
    // map dá retorno
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    // Execução de cada horário de aula do professor
    await Promise.all(insertedAllClassScheduleValues) 
}