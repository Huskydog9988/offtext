#!/usr/bin/env node

import { Command } from 'commander'

import genBizarre from './utils/genBizarre'
import isASCII from './utils/isASCII'
import getPackageVersion from './utils/getPackageVersion'
;(async () => {
  const program = new Command()

  program
    .version(await getPackageVersion(), '-v, --version')
    .description('Makes your ascii text look bizarre')
    .option('-d, --debug', 'extra output for debugging')

  program
    .command('convert <text...>', { isDefault: true })
    .aliases(['c'])
    .description('Converts ASCII into bizarre looking text')
    .action((textArray: string[]) => {
      const text = textArray.join(' ')

      if (!isASCII(text)) {
        console.error("Text isn't ASCII")
        process.exit(1)
      }
      console.log(genBizarre(text))
    })

  program.parse(process.argv)

  if (program.debug) console.log(program.opts())
})()
