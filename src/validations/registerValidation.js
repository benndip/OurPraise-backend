const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = {
        name: Joi.string()
            .min(3)
            .required(),
        email: Joi.string()
            .min(3)
            .required()
            .email(),
        password: Joi.string()
            .min(6).
            required(),
        phone: Joi.string()
            .min(3).
            required()
    }
    return Joi.object(schema).validate(data)

}

module.exports = registerValidation