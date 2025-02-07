export const formatWithUnderscore = s => s.replace(/\W+/g, '_');

export const formatToLowercase = s => formatWithUnderscore(s).toLowerCase();
