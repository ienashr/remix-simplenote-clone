import { FaLock, FaUserPlus } from 'react-icons/fa';
import { Form, Link, useActionData, useNavigation, useSearchParams } from '@remix-run/react';

function AuthForm() {
const [searchParams] = useSearchParams()
const navigation = useNavigation()
const validationErrors = useActionData()

const authMode = searchParams.get('mode') || 'login';

const submitBtnCaption = authMode === 'login' ? 'login' : 'Create User'
const toggleBtnCaption = authMode === 'login' ? 'Create a new user' : 'Log in with existing user'

const isSubmitting = navigation.state !== 'idle'

  return (
    <div className='w-full max-w-sm mx-auto my-32'>
    <Form method="post" className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="w-12 mx-auto my-4">
       {authMode === 'login' ? <FaLock className='w-12'/> : <FaUserPlus className='w-12'/>}
      </div>
      <p className='mb-4'>
        <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2' >Email Address</label>
        <input type="email" id="email" name="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />
      </p>
      <p className='mb-4'>
        <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
        <input type="password" id="password" name="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' minLength={7} />
      </p>

      {validationErrors && <ul>
  {Object.values(validationErrors).map(error => <li key={error}>{error}</li>)}
  </ul>}

      <div className="flex items-center justify-between">
        <button disable={isSubmitting} className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{isSubmitting? 'Authenticating...' : submitBtnCaption}</button>
        <Link to={authMode === 'login' ? '?mode=signup' : '?mode=login'}  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >{toggleBtnCaption}</Link>
      </div>
    </Form>
    </div>
  );
}

export default AuthForm;
