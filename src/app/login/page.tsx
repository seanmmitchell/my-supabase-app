import { login, signup } from './actions'

export const runtime = 'edge';

export default function LoginPage() {
  return (
    <main className="container">
      <div className="container naax-w-screen-sm mx-auto">
        <form className="space-y-4 bg-white p-6 rounded-lg shadow-md">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input id="email" name="email" type="email" required className="mt-1 p-2 block w-full text-black rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input id="password" name="password" type="password" required className="mt-1 p-2 block w-full text-black rounded-md border-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div className="flex justify-between">
            <button formAction={login} className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-indigo-500 hover:bg-indigo-700">Log In</button>
            <button formAction={signup} className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Sign Up</button>
          </div>
        </form>
      </div>
    </main>
  )
}