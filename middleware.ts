import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
    matcher: [
        "/dashboard",
        "/create",
        "/createQuestions/[id]/[code]",
        "/notification",
        "/settings",
        "/stats/[id]/[code]",
        "/api/createPractice/createTestPractice"

    ]
};

//

export default authMiddleware