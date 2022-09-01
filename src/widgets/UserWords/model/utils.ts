export const getAggregatedWordsFilter = (
  params: { page: number; group: number } | null = null,
  difficulty: string | null = null,
  isLearned: boolean | null = null
) => {
  if (!params) {
    if (difficulty !== null) {
      return isLearned === null
        ? `{ "$and": [{ "userWord.difficulty": "${difficulty}" }] }`
        : `{ "$and": [{ "userWord.difficulty": "${difficulty}" }, { "userWord.optional.isLearned": ${isLearned} }] }`;
    } else {
      return isLearned === null
        ? ``
        : `{ "$and": [{ "userWord.optional.isLearned": ${isLearned} }] }`;
    }
  } else {
    const { page, group } = params;

    if (difficulty === null && isLearned === null) {
      return `{ "$and": [{ "page": ${page} }, {"group": ${group} }] }`;
    }

    if (difficulty !== null) {
      return isLearned === null
        ? `{ "$and": [{ "page": ${page} }, {"group": ${group} }, { "userWord.difficulty": "${difficulty}" }] }`
        : `{ "$and": [{ "page": ${page} }, {"group": ${group} }, { "userWord.difficulty": "${difficulty}" }, { "userWord.optional.isLearned": ${isLearned} }] }`;
    } else {
      return isLearned === null
        ? `{ "$and": [{ "page": ${page} }, {"group": ${group} }] }`
        : `{ "$and": [ { "$or": [ { "userWord": null }, { "userWord.optional.isLearned": ${isLearned} } ] }, { "page": ${page} }, {"group": ${group} } ] }`;
    }
  }
};
