import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 px-4">
      <div className="w-full max-w-md">
        <SignIn 
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "w-full bg-white rounded-lg shadow-xl",
              header__title: "text-2xl font-bold text-gray-900 text-center mb-2",
              header__subtitle: "text-gray-600 text-center mb-6",
              formFieldInput: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent",
              formFieldLabel: "text-sm font-medium text-gray-700 mb-2",
              formButtonPrimary: "w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-lg transition-colors",
              footerActionLink: "text-primary-600 hover:text-primary-700 font-medium",
              socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50 rounded-lg",
            },
          }}
        />
      </div>
    </div>
  );
}
