import path from 'path'
import fs from 'fs'
import parse from '../lib/parser'

describe('Parser .ng file', () => {
  it('should read <template> <style> and <script>', () => {
    const samplePath = path.resolve('test/sample.ng')
    console.log(samplePath)
    const content = fs.readFileSync(samplePath, { encoding: 'utf8' })
    const ret = parse(content, samplePath, true)
    console.log(ret)
  })
})