module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
        title : {
            type : Sequelize.STRING,
            allowNull : false
        },
        article : {
            type : Sequelize.TEXT,
            allowNull : false,
        },
        userName : {
            type : Sequelize.STRING,
            allowNull : false
        },
        date : {
            type : Sequelize.STRING,
            allowNull : false
        },
    });

    return Article;
}