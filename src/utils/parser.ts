export const parseArrayParam = (
  param: string | string[] | undefined,
  type: "number" | "boolean" | "string"
): (number | boolean | string)[] => {
  if (Array.isArray(param)) {
    if (param.length === 0) {
      return [];
    }
    return param.map((val) =>
      type === "boolean"
        ? val === "true"
        : type === "number"
        ? Number(val)
        : val
    ) as (number | boolean | string)[];
  }

  if (typeof param === "string") {
    const result = param
      .split(",")
      .map((val) =>
        type === "boolean"
          ? val === "true"
          : type === "number"
          ? Number(val)
          : val
      ) as (number | boolean | string)[];

    return result
      .filter((val) => val !== undefined)
      .filter((val) => val !== null)
      .filter((val) => val !== 0)
      .filter((val) => val !== "") as (number | boolean | string)[];
  }

  return [];
};

export const parseParam = (
  param: string | undefined,
  type: "number" | "boolean"
): number | boolean | undefined => {
  if (param === undefined) return undefined;

  if (type === "number") {
    const parsed = Number(param);
    return isNaN(parsed) ? undefined : parsed;
  }

  if (type === "boolean") {
    return param.toLowerCase() === "true";
  }

  return undefined;
};
