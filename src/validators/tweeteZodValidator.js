export const validator = (schema) => {
    return async(req, res, next) => {
        try {
            console.log(req.body);
            schema.parse(req.body);
            next();
        } catch (err) {
            return res.status(400).json({
                error: err.error,
                success: false,
                message: "validation failed"
            });
        }
    }
}