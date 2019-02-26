#!/bin/bash
LAMBDA_ARN=$(serverless info -v | grep HelloLambdaFunctionQualifiedArn | cut -d' ' -f2)

aws cloudformation create-stack --stack-name customtest --template-body file://./teststack/cf.yaml --parameters \
    ParameterKey=CustomResLambdaARN,ParameterValue="$LAMBDA_ARN"
