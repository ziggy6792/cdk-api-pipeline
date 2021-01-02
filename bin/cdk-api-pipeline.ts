#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaStack } from '../lib/lamba-stack';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();
const lambdaStack = new CdkLambdaStack(app, 'LambdaStack', {
  env: {
    region: 'ap-southeast-1',
  },
});
new PipelineStack(app, 'PipelineStack', {
  lambdaCode: lambdaStack.lambdaCode,
  env: {
    region: 'ap-southeast-1',
  },
});

app.synth();
