import Joi from 'joi';

export const cvSchema = Joi.object({
  personal: Joi.object({
    name: Joi.string().min(2).required(),
    city: Joi.string().min(2).required(),
    position: Joi.string().min(2).required(),
    email: Joi.string()
      .pattern(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)
      .required(),
    tel: Joi.string()
      .pattern(/^\+[0-9\s\-()]{12}$/)
      .required(),
  }).required(),
  education: Joi.string().min(10).max(1000).required(),
  experience: Joi.string().min(10).max(1000).required(),
  skills: Joi.string().min(5).max(1000).required(),
  goals: Joi.string().min(10).max(1000).required(),
});
