import { getProviders, signIn as signIntoProvider } from 'next-auth/react'
import Header from '../../components/Header'

// BROWSER
function Signin({providers}) {
  console.log(providers);
  return (
    <>
      <Header />
      <div className='flex flex-col items-center justify-center 
      min-h-screen py-2 -mt-56 px-14 text-center'>
        <img src='/images/logo.png' className='w-80'/> 
        
        <p className='font-xs italic'>
          This application was developed for 
          educational purposes by  <a className='underline' href='mailto:rlopeslameira@gmail.com' target="_blank">Rodrigo Lopes</a>
        </p>

        <div className='mt-40 '>
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button 
              className='p-3 bg-blue-500 rounded-lg text-white'
              onClick={() => signIntoProvider(provider.id, { callbackUrl: '/' })}>
                Sigin with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}

// SERVER SIDE RENDER
export async function getServerSideProps(){
  const providers = await getProviders();
  return {
    props: {
      providers,
    }
  }
}

export default Signin;