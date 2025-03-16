import * as Yup from 'yup'

export const logInSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email('Please enter a valid email'),
  password: Yup.string().required('Please enter the login password').min(6, 'Password must be at least 6 characters long'),
})

export const registerSchema = Yup.object().shape({
  name: Yup.string().required('Please enter the account name').min(3, 'Account name must be at least 3 characters long'),
  email: Yup.string().required('Email is required').email('Please enter a valid email'),
  password: Yup.string().required('Please enter the login password').min(6, 'Password must be at least 6 characters long'),
  confirmPassword: Yup.string()
    .required('Please re-enter the confirmation password')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
})

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Category name cannot be empty'),
  slug: Yup.string().required('Slug cannot be empty'),
  image: Yup.string()
    .required('Enter the image URL')
    .url('Invalid image URL')
    .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image URL must be a valid image format'),
})

export const bannerSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter the image URL')
      .url('Invalid URL')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image URL must be a valid image format'),
  }),
})

export const sliderSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter the image URL')
      .url('Invalid URL')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image URL must be a valid image format'),
  }),
})

export const reviewSchema = Yup.object().shape({
  title: Yup.string().required('Review title cannot be empty').min(4, 'Review title must be at least 4 characters long'),
  comment: Yup.string().required('Review text cannot be empty').min(4, 'Review text must be at least 4 characters long'),
})

export const addressSchema = Yup.object().shape({
  province: Yup.object().shape({
    name: Yup.string().required('Please select your province'),
  }),
  city: Yup.object().shape({
    name: Yup.string().required('Please select your city'),
  }),
  area: Yup.object().shape({
    name: Yup.string().required('Please select your area/district'),
  }),
  street: Yup.string().required('Street name cannot be empty'),
  postalCode: Yup.string().required('Please enter your postal code'),
})

export const nameSchema = Yup.object().shape({
  name: Yup.string().required('Name must be registered').min(3, 'Name must be more than 3 characters long'),
})

export const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number must be registered')
    .min(11, 'Mobile number must be 11 digits')
    .max(11, 'Mobile number must be 11 digits'),
})
