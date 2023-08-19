import {authMiddleware} from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
    matcher: [
        "/dashboard",
        "/create",
        "/createQuestions/[id]/[code]",
        "/stats/[id]/[code]",
        "/api/createPractice/createTestPractice",
        "/api/createPractice/createExamPractice",
        "/api/createQuestions",
        
    ]
};

//

export default authMiddleware