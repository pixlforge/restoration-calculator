module.exports = {
  theme: {
    fontFamily: {
      'title': 'Montserrat',
      'body': 'Nunito'
    },
    fontSize: {
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '30': '3rem',
      '36': '3.6rem',
      '48': '4.8rem',
      '60': '6rem',
      '72': '7.2rem',
      '84': '8.4rem',
      '96': '9.6rem',
      '132': '13.2rem',
      '144': '14.4rem'
    },
    container: {
      center: true,
      padding: '2rem',
    },
    maxWidth: {
      '800': '80rem',
    },
    spacing: {
      '5': '.5rem',
      '10': '1rem',
      '12': '1.2rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '18': '1.8rem',
      '20': '2rem',
      '24': '2.4rem',
      '30': '3rem',
      '36': '3.6rem',
      '48': '4.8rem',
      '60': '6rem',
      '72': '7.2rem',
      '84': '8.4rem',
      '96': '9.6rem',
      '132': '13.2rem',
      '-10': '-1rem',
      '-12': '-1.2rem',
      '-14': '-1.4rem',
      '-16': '-1.6rem',
      '-18': '-1.8rem',
      '-20': '-2rem',
      '-24': '-2.4rem',
      '-30': '-3rem',
      '-36': '-3.6rem',
      '-48': '-4.8rem',
      '-60': '-6rem',
      '-72': '-7.2rem',
      '-84': '-8.4rem',
      '-96': '-9.6rem',
      '-132': '-13.2rem',
    },
    extend: {
      screens: {
        'xxl': '1500px'
      },
      width: {
        '60': '6rem',
      },
      height: {
        '60': '6rem',
      },
      boxShadow: {
        'outline': '0 0 0 3px rgba(78, 209, 196, 1)'
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities, theme }) {
      const gradients = {
        '.gradient-blue-indigo': {
          backgroundImage: `linear-gradient(to bottom right, ${theme('colors.blue.500')}, ${theme('colors.indigo.700')})`
        }
      }

      addUtilities(gradients, {
        variants: ['hover']
      })
    }
  ]
}
