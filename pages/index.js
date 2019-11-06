import dynamic from 'next/dynamic'
import Preloader from '../src/components/Preloader'

// NOTE: SSR doesn't have access to the `window` object used to position panes
// and such. The code below prevents associated errors. To use Next.js static
// export functionality, I *think* I can just import/export App in this file
// without needing to use `dynamic()`. Will experiment. ~ RM
// QUESTION: Is preloader component needed for static export? ~ RM
const DynamicAppWithNoSSR = dynamic(() => import('../src/App'), {
  loading: () => <Preloader/>,
  ssr: false
})

export default DynamicAppWithNoSSR
