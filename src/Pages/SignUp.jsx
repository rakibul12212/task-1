import { useForm } from 'react-hook-form'
import {FormErrorMessage,FormLabel,FormControl,Input,Button} from '@chakra-ui/react'

const SignUp = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
      } = useForm()
    
      function onSubmit(values) {
        return new Promise((resolve) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            resolve()
          }, 3000)
        })
      }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='p-20'>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor='name'>First name</FormLabel>
        <Input
          id='name'
          placeholder='name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.email}>
        <FormLabel htmlFor='email'>email</FormLabel>
        <Input
          id='email'
          type='email'
          placeholder='example@example.com'
          {...register('email', {
            required: 'This is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password}>
        <FormLabel htmlFor='password'>password</FormLabel>
        <Input
          id='password'
          type='password'
          placeholder='type password'
          {...register('password', {
            required: 'This is required',
            minLength: { value: 6, message: 'Minimum length should be 6' },
          })}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Sign Up
      </Button>
    </form>
    );
};

export default SignUp;





