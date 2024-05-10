import * as Yup from 'yup';

const userValidation = Yup.object().shape({
    user: Yup.string().required('username is required')
})

const emailValidation = Yup.object().shape({
    email: Yup.string().required('email is required')
})

const genderValidation = Yup.object().shape({
    gender: Yup.string().required('gender is required')
})

const statusValidation = Yup.object().shape({
    status: Yup.string().required('status is required')
})

export {
    userValidation,
    emailValidation,
    genderValidation,
    statusValidation
}