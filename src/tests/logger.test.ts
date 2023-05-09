import logger, { level } from "../logger";

describe("Logger", () => {
    test("logger level", async () => {
        logger.info("I'm running");
        const actualLevel = level("development");
        expect(actualLevel).toEqual("debug");
        const nextLevel = level();
        expect(nextLevel).toEqual("warn");
    });
});
