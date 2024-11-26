export function convertNameFromLink(guestName: string) {
  if (guestName.includes("-")) {
    return guestName.replace(/-/g, " ");
  }
  return guestName;
}
