import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
    matcher: [
        "/dashboard",
        "/create",
        "/createQuestions",
        "/notification",
        "/settings",
        "/stats"

    ]
};

//

export default authMiddleware