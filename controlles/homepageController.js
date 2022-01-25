const StuffedAnimal = require("../modules/stuffedAnimal");

async function homepage_get(req, res) {
    try {
        res.render('inventoryTable', {
            title: "Rafael's Stuffed Animals",
            info: {
                title: "Welcome to Rafael's inventory.",
                text: 'Below you can browse all of the items in the store inventory. Click specific item to know' +
                    ' more information about it.',
                text2: ' If you like to create new or delete current items, please login first!'
            },
            items: await StuffedAnimal.find({}).sort({createdAt: -1}).lean(),
            sidebarIsNeeded: true,
            moveElementToRight: 'margin-left',
            currentUser: req.currentUser,
            categories: req.itemCategories.all,
            query: req.query,
        })
    } catch (e) {
        console.log('Error happened during category and inventory fetching:', e);
    }
}

module.exports = homepage_get;
