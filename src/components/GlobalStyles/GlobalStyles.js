const GlobalStyles = () =>(
  <style jsx global>
    {`
      *, *:before, *:after {
        box-sizing: inherit;
      }

      * {
        background: none;
        border: none;
        color: white;
        font-family: 'Aldrich', sans-serif;
        font-size: 1rem;
        margin: 0;
        outline: none;
        padding: 0;
        user-select: none;
      }

      html {
        box-sizing: border-box;
        overflow: hidden;
      }


      ::selection {
        background: none;
      }

      body {
        --themeOverlayBackgroundColor: rgba(0, 0, 0, 0.65);
      }
    `}
  </style>
)

export default GlobalStyles
