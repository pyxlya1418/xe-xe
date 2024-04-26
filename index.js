const mongoose = require('mongoose');
const uuid = require('uuid');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test')

    const clientShell = new mongoose.Mongo({
        name: String,
        surname: String,
        email: String,
        phone: String,
        address: String,
        client_id: String
    })
    const pharmacist_aptekaShell = new mangoose.Mongo({
        name: String,
        surname: String,
        email: String,
        phone: String,
        address: String,
    })
    const medicine_historyShell = new mongoose.Mongo({
        client_id: String,
        name: String,
        create: String,
        medicine: String,
    })
    const medicinesresept_historyShell = new mangoose.Mongo({
        client_id: String,
        name: String,
        create: String,
        medicine: String,
    })


    const client = mongoose.model('client', clientShell);
    const pharmacist = mangoose.model('pharmacist', pharmacist_aptekaShell);
    const medicine = mangoose.model('medicine', medicine_historyShell);
    const medicinesresept__historyShell = mangoose.model('medicine', medicine_historyShell);

    const clients = await client.create({
        name: 'Ivan', surname: 'Ivanow', email: 'ivanonivan@gmail.com',
        phone: '+380 (54) 38 456 43', address: 'Malinowo 7b, apartment 55'
    })
    const pharmacists = await pharmacist({
        name: 'Maryna', surname: 'Ivanowa', email: 'marynaivan@gmail.com',
        phone: '+380 (54) 38 456 43', address: 'Malinowo 7b, apartment 55'
    })
    const medicines = await medicine.create(
    {
        create_id: create._id,
        client_id: client._id,
        medicine: 'Analgin'
    })

    const medicinesresept = await medicine.create(
    {
        create_id: create._id,
        client_id: client._id,
        medicine: 'Noshpa'
    })    

    await medicinesresept. deleteOne() 

    await pharmacist. replaceOne({
        name: 'Maryna', surname: 'Ivanowa', email: 'marynaivan@gmail.com',
        phone: '+380 (54) 38 456 43', address: 'Malinowo 7b, apartment 55'
    })
    
    client.find({ name: 'Ivan'}).then((names) => console.log(names)) 
}