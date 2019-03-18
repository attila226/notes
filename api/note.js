const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const uuidv4 = require('uuid/v4');

const adapter = new FileSync('db.json');
const db = low(adapter);

const testData = [
    {
        id: "1",
        title: 'A Tale of Two Cities',
        text: "It was the best of times, it was the blurst of times."
    }, {
        id: "2",
        title: 'The Sound of Silence',
        text: "Hello darkness, my old friend. I've come to talk with you again."
    }
];

module.exports = {
    init: function () {
        const defaults = db
            .defaults({notes: testData})
            .write();

        return defaults;
    },
    getAll: function () {
        const notes = db
            .get('notes')
            .value();

        if (!notes) {
            const defaultData = this
                .init()
                .notes;

            return defaultData;
        }

        return notes;
    },

    get: function (id) {
        const note = db
            .get('notes')
            .find({id})
            .value();

        return note;
    },

    update: function (id, note) {
        db
            .get('notes')
            .find({id})
            .assign(note)
            .write();

        console.log(`Updated record ${id}`, note);
    },

    add: function (note) {
        const id = uuidv4();
        const newNote = {
            id,
            ...note
        }

        db
            .get('notes')
            .push(newNote)
            .write()

        console.log('Added note ', newNote);

        return newNote;
    }
}