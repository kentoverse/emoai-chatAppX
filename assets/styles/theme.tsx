
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    padding: '5px 8px 6px',
                },
            }
        }
    }
}
);

export default theme;