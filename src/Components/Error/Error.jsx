import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()

    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="flex flex-col items-center max-w-md text-center">
          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-12 h-12 text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-stone-100">Something Went Wrong!</h1>
          <p className="mt-3 text-stone-400">Here are some helpful links:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-stone-200 bg-stone-800 hover:bg-stone-700 border border-stone-600 rounded-xl transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              Go back
            </button>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-xl transition-colors"
            >
              Take Me Home
            </button>
          </div>
        </div>
      </section>
    )
  }

export default Error;