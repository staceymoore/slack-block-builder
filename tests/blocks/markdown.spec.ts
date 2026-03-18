import { MarkdownBuilder as Class } from '../../src/blocks/markdown';
import { SlackBlockDto as DtoClass } from '../../src/internal';
import { params } from './mocks/markdown.mock';
import * as methods from '../methods';
import { testCompositeBuilderClass } from '../test-composite-builder-class';

const className = 'MarkdownBuilder';
const category = 'Blocks';

const config = {
  Class,
  DtoClass,
  params,
  className,
  category,
};

const methodsConfig = [
  methods.blockId,
];

testCompositeBuilderClass({ config, methods: methodsConfig });

test(`Calling 'text()' on a '${className}' object should store the raw text prop and build a raw text block.`, () => {
  const instance = new Class().text(params.text);
  const built = instance.build();

  expect(instance).toMatchObject({ props: { text: params.text } });
  expect(built).toMatchObject({ text: params.text });
  expect(built).not.toMatchObject({ text: { type: 'mrkdwn', text: params.text } });
});

test(`Calling 'build()' on a '${className}' object should return a raw markdown block payload.`, () => {
  const built = new Class(params).build();

  expect(built).toMatchObject({
    type: 'markdown',
    block_id: params.blockId,
    text: params.text,
  });
  expect(built).not.toMatchObject({ text: { type: 'mrkdwn', text: params.text } });
});
