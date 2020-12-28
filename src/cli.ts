#!/usr/bin/env node

import { Command } from 'commander'

import genCracked from './utils/genCracked'
import genRandomCase from './utils/genRandomCase'
import genReverse from './utils/genReverse'
import isASCII from './utils/isASCII'
import getPackageVersion from './utils/getPackageVersion'

// Work around for top level await
;(async () => {
  const program = new Command()

  program
    .version(await getPackageVersion(), '-v, --version')
    .description('Makes your ascii text look bizarre')
    .option('-d, --debug', 'extra output for debugging')

  program
    .command('randomcase <text...>', { isDefault: true })
    .aliases(['rc'])
    .description('Randomizes the case of text in a string')
    .action((textArray: string[]) => {
      const text = textArray.join(' ')

      if (!isASCII(text)) {
        console.error("Text isn't ASCII")
        process.exit(1)
      }
      console.log(genRandomCase(text))
    })

  program
    .command('cracked <text...>')
    .aliases(['c'])
    .description('Converts a string into "cracked" text')
    .action((textArray: string[]) => {
      const text = textArray.join(' ')

      if (!isASCII(text)) {
        console.error("Text isn't ASCII")
        process.exit(1)
      }
      console.log(genCracked(text))
    })

  program
    .command('reverse <text...>')
    .aliases(['rc'])
    .description('Reverses the text of a string')
    .action((textArray: string[]) => {
      const text = textArray.join(' ')

      if (!isASCII(text)) {
        console.error("Text isn't ASCII")
        process.exit(1)
      }
      console.log(genReverse(text))
    })

  program.parse(process.argv)

  if (program.debug) console.log(program.opts())
})()
