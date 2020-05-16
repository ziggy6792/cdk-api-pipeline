#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaStack } from '../lib/lamba-stack';
import { PipelineStack } from '../lib/pipeline-stack';

if (!process.env.GITHUB_TOKEN) {
  console.log("No Github Token present");
}

const app = new cdk.App();
const lambdaStack = new CdkLambdaStack(app, 'LambdaStack', {
  env: {
    region: "eu-west-1"
  }
});
new PipelineStack(app, 'PipelineStack', {
  lambdaCode: lambdaStack.lambdaCode,
  githubToken: process.env.GITHUB_TOKEN || "",
  env: {
    region: "eu-west-1",
  }
});

app.synth();