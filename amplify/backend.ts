import { defineBackend } from '@aws-amplify/backend';
import { schema } from './data/resource';
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";

const backend = defineBackend({})

const authStack = backend.createStack("ExistingAuth")
const userPool = UserPool.fromUserPoolId(
    authStack,
    "UserPool",
    "us-west-2_3Bd5oBD7B"
)
const userPoolClient = UserPoolClient.fromUserPoolClientId(
    authStack,
    "UserPoolClient",
    "nr59hbo3j9qiptuo61leufi3l"
)
// Cognito Identity Pools can be referenced directly
const identityPoolId = "us-west-2:ccb63e3f-8082-4910-9f95-c42b3409ad4d"

backend.addOutput({
  auth: {
    aws_region: authStack.region,
    user_pool_id: userPool.userPoolId,
    user_pool_client_id: userPoolClient.userPoolClientId,
    identity_pool_id: identityPoolId,
    username_attributes: ["email"],
    standard_required_attributes: ["email"],
    user_verification_types: ["email"],
    unauthenticated_identities_enabled: true,
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_uppercase: true,
      require_numbers: true,
      require_symbols: true,
    },
  }
})

backend.addOutput({
  data: {
    aws_region: authStack.region,
    model_introspection: schema,
    default_authorization_type: 'AMAZON_COGNITO_USER_POOLS',
  }
})