import { customColors, customSizes } from '../styles'


export const customForms = {
  input: {
    backgroundColor: customColors.colorInputBcg,
    border: 'none',
    paddingLeft: '.5rem',
    borderTopRightRadius: customSizes.radius,
    borderBottomRightRadius: customSizes.radius,
    height: '45px',
    width: '100%',
    color: customColors.colorLightBlack,
    '&::placeholder': {
      color: '#B5B5C3'
    }
  }
}
