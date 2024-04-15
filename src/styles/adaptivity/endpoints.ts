export const mobileWidth = 991;
export const tabletWidth = 1350;
export const desktopContainerWidth = 1360;

export const forMobile = `@media screen and (max-width: ${mobileWidth}px)`;
export const forTablet = `@media screen and (min-width: ${mobileWidth + 1}px) and (max-width: ${tabletWidth}px)`;
export const forDesktop = `@media screen and (min-width: ${tabletWidth + 1}px)`;
export const forMobileAndTablet = `@media screen and (max-width: ${tabletWidth}px)`;
export const forTabletAndDesktop = `@media screen and (min-width: ${mobileWidth + 1}px)`;
