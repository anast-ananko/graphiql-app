import { getFontName } from '../utils/stylesHandling';

const primaryFontFamilies = ['Rubik', 'sans serif'];
const secondaryFontFamilies = ['Russo One', 'arial'];

const PRIMARY_FONT = getFontName(primaryFontFamilies);
const SECONDARY_FONT = getFontName(secondaryFontFamilies);

export { PRIMARY_FONT, SECONDARY_FONT };
