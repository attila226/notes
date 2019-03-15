const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const testData = [
    {
        id: 1,
        title: 'A Tale of Two Cities',
        text: "It was the best of times, it was the blurst of times."
    }, {
        id: 2,
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
            const defaultData = this.init();
            return defaultData;
        }

        return notes;
    },

    get: function (id) {
        const note = db
            .get('notes')
            .find({id: Number(id)})
            .value();

            return note;
    },

    update: function (id, note) {
        console.log(`Updating record ${id}`, note);

        db
            .get('notes')
            .find({id: Number(id)})
            .assign(note)
            .write();
    },

    add: function (note) {}
}