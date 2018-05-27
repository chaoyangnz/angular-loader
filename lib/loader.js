import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import parse from './parser'

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
}

export default function(source) {
  const options = getOptions(this);

  validateOptions(schema, options, 'Angular Loader');

  const filePath = this.resourcePath
  const fileName = path.basename(filePath)
  const parts = parse(content, fileName, true)

  const script = parts.script.content
  /@Component({template: ``})/

  // Apply some transformations to the source...

  return `export default ${ JSON.stringify(source) }`;
};