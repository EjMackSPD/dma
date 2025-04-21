// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

// /**
//  * loads and decorates the governmentBanner
//  * @param {Element} block The governmentBanner block element
//  */
// export default async function decorate(block) {
//   // load governmentBanner as fragment
//   const governmentMeta = getMetadata('governmentbanner');
//   const governmentPath = governmentMeta ? new URL(governmentMeta, window.location).pathname : '/governmentbanner';
//   const fragment = await loadFragment(governmentPath);

//   // decorate governmentBanner DOM
//   block.textContent = '';
//   const governmentBanner = document.createElement('div');
//   while (fragment.firstElementChild) governmentBanner.append(fragment.firstElementChild);

//   block.append(governmentBanner);
// }
