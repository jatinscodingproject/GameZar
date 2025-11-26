exports.homePage = async(req, res) => {
    try {
        res.render("pages/index", {
            title: "Home Page",
        });
    } catch (error) {
        res.status(500).render("pages/error", {
            message: "Something went wrong!",
        });
    }
};

exports.loginPage = async(req, res) => {
    try {
        res.render("pages/login", {
            title: "Home Page",
        });
    } catch (error) {
        res.status(500).render("pages/error", {
            message: "Something went wrong!",
        });
    }
};