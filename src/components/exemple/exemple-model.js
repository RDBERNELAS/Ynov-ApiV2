import mongoose from "mongoose";

const { Schema } = mongoose

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
})

const Exemple = mongoose.model('Exemple', exempleSchema)

// Exemple.create({
//     name: 'Test product',
//     description: 'Lorem ipsum',
//     color: ['Bleue', 'Blanc', 'Rouge'],
//     price: 10000
// })

const findAll = async () => {
    const exemples = await Exemple.find({})
    console.log('FIND ALL ====', exemples);
}

const findById = async () => {
    const exemple = await Exemple.findById('63721c6b48a5b1f6fd85cd5a')
    console.log('FIND BY ID ====', exemple);
}

const updateById = async () => {
    //méthode 1
    const exemple = await Exemple.findByIdAndUpdate('63721c6b48a5b1f6fd85cd5a',
    {name: 'Premier élément'},
    {runValidators: true})

//     //méthode 2
//     const exemple2 = await Exemple.findById('637219a3110f137d930daf73')
//     exemple2.name = 'Modification'
//     exemple2.save()

//     //Méthode 3
//     const exemple3 = await Exemple.findById('637219a3110f137d930daf73')
//     exemple3.set({
//         name:'Modifié par test 3'
//     })

//     exemple3.save()
findAll()
}

const deleteById = async () => {
    const exemple = await Exemple.findByIdAndDelete('63721c6b48a5b1f6fd85cd5a')
}

// findAll()
// findById()
// updateById()
// deleteById()

export default Exemple