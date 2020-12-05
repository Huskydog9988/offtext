export default async (): Promise<string> => {
  return (await import('../../package.json')).version
}
