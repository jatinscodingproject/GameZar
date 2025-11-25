exports.homePage = async(req, res) => {
    try {
        res.render("pages/index", {
            title: "Home Page",
        });
    } catch (error) {
        console.error("Error loading home page:", error);

        res.status(500).render("pages/error", {
            message: "Something went wrong!",
        });
    }
};