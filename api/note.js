const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

module.exports = {
    getAll: function () {
        return [
            {
                id: 1,
                title: 'A Tale of Two Cities',
                text: "It was the best of times, it was the blurst of times"
            }, {
                id: 2,
                title: 'The Sound of Silence',
                text: "Hello darkness, my old friend"
            }
        ];
    },

    get: function (id) {
        return {id: 1, title: 'A Tale of Two Cities', text: "It was the best of times, it was the blurst of times"};
    },

    update: function (id) {
        console.log(`Updating record ${id}`);
    }
}