export default async (): Promise<string> => {
  // import package.json and return package version
  return (await import('../../package.json')).version
}
