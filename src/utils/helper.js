export function countryCodeToName(countryCode) {
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  const country = regionNamesInEnglish.of(countryCode);
  return country;
}
