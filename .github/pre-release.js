import fs from 'node:fs/promises'


async function readThemeVersion () {
  const text = await fs.readFile('theme.json', {encoding: 'utf-8'})
  const theme = JSON.parse(text)
  return theme.version
}


async function updatePackageInfo () {
  const text = await fs.readFile('package.json', {encoding: 'utf-8'})
  const pkg = JSON.parse(text)
  const version = await readThemeVersion()
  pkg.version = version
  delete pkg.private
  delete pkg.scripts
  delete pkg.devDependencies
  await fs.writeFile('package.json', JSON.stringify(pkg, null, 2) + '\n')
}


updatePackageInfo()
