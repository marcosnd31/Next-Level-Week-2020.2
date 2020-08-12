module.exports = async function (db, {proffyValue, classValue, classScheduleValue}){
    // Inserir dados na tabela de professores
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );
    `)

    const proffy_id = insertedProffy.lastID
}