module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    boxShadow:{
      shadd: '0px 0px 10px rgba(0, 0, 0, 0.16)',
      hov: '0px 0px 10px rgba(253,192,148)'
    },
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      }
    },
    inset: { 
      '1/2': '50%'
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif']
    },

    extend: {
 
      colors: {
        worange: '#FDC094',
        blue: '#120C6E',
        greyBlue: '#8D99AE',
        grey: '#7e7e7e',
        wblack: '#2b2d42'
      }
    }
  },
  variants: {},
  plugins: []
}
