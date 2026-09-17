export function getContactEmail(): string {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!email) {
    throw new Error("NEXT_PUBLIC_CONTACT_EMAIL is not set");
  }

  return email;
}
