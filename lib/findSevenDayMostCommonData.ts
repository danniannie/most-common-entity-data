// For each entity of the data, find the most common range
// over the last seven days and add this to an array

export const findSevenDayMostCommonData = (
  latestData: Data | undefined,
  previousWeekData: Data | undefined,
  range: string[],
  rangeLookup: { [index: string]: string }
): undefined | { entityId: string; tag: string | undefined }[] => {
  const overallAverages: { entityId: string; tag: string | undefined }[] = [];

  if (latestData && previousWeekData) {
    for (let i = 0; i < latestData.entities.length; i += 1) {
      const entityId = latestData.entities[i].id;

      let highestValue: {
        count: number | undefined;
        value: string | undefined;
      } = {
        count: undefined,
        value: undefined,
      };

      const previousEntityData = previousWeekData.entities[i];
      const latestEntityData = latestData.entities[i];

      range.forEach((key: string, index: number) => {
        const value = latestEntityData?.[key] - previousEntityData?.[key];
        if (highestValue.value === undefined || value > highestValue.count!) {
          highestValue.value = key;
          highestValue.count = value;
        }
      });

      if (!highestValue.value || !highestValue.count) {
        overallAverages.push({
          entityId,
          tag: undefined,
        });
      } else {
        overallAverages.push({
          entityId,
          tag: rangeLookup[highestValue.value],
        });
      }
    }
    return overallAverages;
  }
  return undefined;
};
