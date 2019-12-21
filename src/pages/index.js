import dynamic from 'next/dynamic'
import Preloader from '../components/Preloader'

// NOTE: SSR doesn't have access to the `window` object used to position panes
// and such. The code below prevents associated errors. To use Next.js static
// export functionality, I *think* I can just import/export App in this file
// without needing to use `dynamic()`. Will experiment. ~ RM
// TODO/BUG: During `npm run build`, encountering following error:
// `ReferenceError: TEXT_ENCODING_OR_PECULIAR_WEBCRYPTO_NOT_INSTALLED is not
// defined`. ~ RM
// * (similar to:) https://stackoverflow.com/questions/57235091/how-do-i-fix-deployment-error-ossl-webcrypto-or-text-encoding-not-installed-is
// * https://nextjs.org/learn/excel/static-html-export/export-the-index-page
// QUESTION: Is preloader component needed for static export? ~ RM
const DynamicAppWithNoSSR = dynamic(() => import('../App'), {
  loading: () => <Preloader />,
  ssr: false
})

export default DynamicAppWithNoSSR
