import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
    matcher: [
        "/dashboard",
        "/create",
        "/createQuestions",
        "/notification",
        "/settings",
        "/stats",
        "/api/createPractice/createTestPractice"

    ]
};

//

export default authMiddleware