const axios = require("axios");

exports.homePage = async (req, res) => {
    try {
        const { msisdn } = req.query;   // ✅ Correct way

        console.log("MSISDN:", msisdn);

        // 1️⃣ Check if exists
        if (!msisdn) {
            return res.status(400).render("pages/error", {
                message: "MSISDN is required.",
            });
        }

        console.log("I am here");

        // 2️⃣ If you want to allow specific number manually
        if (msisdn === "9874561230") {   // ✅ Must compare string
            console.log("Allowed directly");

            return res.render("pages/index", {
                title: "Home Page",
            });
        }

        // 3️⃣ Validate format
        if (!/^\d{10,15}$/.test(msisdn)) {
            return res.status(400).render("pages/error", {
                message: "Invalid MSISDN format.",
            });
        }

        const studioID = "8";

        // 4️⃣ API Call
        const apiResponse = await axios.post(
            "https://gamezar.co.za",
            {
                msisdn: msisdn,
                studioId: studioID
            },
            {
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 5000
            }
        );

        // 5️⃣ Check API response
        if (apiResponse.data.status === "Active") {

            return res.render("pages/index", {
                title: "Home Page",
                msisdn,
                studioID
            });

        } else {
            return res.status(403).render("pages/error", {
                message: "You are not allowed to access this page.",
            });
        }

    } catch (error) {
        console.error(error.message);

        return res.status(500).render("pages/error", {
            message: "Something went wrong!",
        });
    }
};