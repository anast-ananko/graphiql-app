import i18n from 'i18next';
import { developersData } from '../constants/developersData';
const localize = i18n.t;

function getDevelopersData() {
  return developersData.map((developerData) => {
    return {
      name: localize(`welcomeSlider.developers.${developerData.idName}.name`),
      description: localize(`welcomeSlider.developers.${developerData.idName}.description`),
      imageUrl: developerData.imageUrl,
      github: developerData.github,
    };
  });
}

export { getDevelopersData };
