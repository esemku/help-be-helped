import { createStyles, makeStyles } from '@material-ui/core/styles'
import { customColors, customSizes } from '../../../styles'
import { customForms } from '../../../styles/forms'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    usersWrapper: {
      backgroundColor: customColors.colorLight,
      width: '21.9rem',
      minHeight: '69vh',
      borderRadius: customSizes.radius,
      padding: '1.5rem 1.8rem',
      marginRight: '1.5rem',
      boxShadow: '0px 0px 30px 0px rgba(82, 63, 105, 0.05)'
    },
    input: {
      width: '17rem',
      ...customForms.input
    },
    searchBarWrapper: {
      display: 'flex'
    },
    searchIcon: {
      borderTopLeftRadius: customSizes.radius,
      borderBottomLeftRadius: customSizes.radius,
      backgroundColor: customColors.colorInputBcg,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '.7rem'
    }
  }),
)
