/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createShortLinkDataStore = /* GraphQL */ `mutation CreateShortLinkDataStore($input: CreateShortLinkDataStoreInput!) {
  createShortLinkDataStore(input: $input) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateShortLinkDataStoreMutationVariables,
  APITypes.CreateShortLinkDataStoreMutation
>;
export const updateShortLinkDataStore = /* GraphQL */ `mutation UpdateShortLinkDataStore($input: UpdateShortLinkDataStoreInput!) {
  updateShortLinkDataStore(input: $input) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateShortLinkDataStoreMutationVariables,
  APITypes.UpdateShortLinkDataStoreMutation
>;
export const deleteShortLinkDataStore = /* GraphQL */ `mutation DeleteShortLinkDataStore($input: DeleteShortLinkDataStoreInput!) {
  deleteShortLinkDataStore(input: $input) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteShortLinkDataStoreMutationVariables,
  APITypes.DeleteShortLinkDataStoreMutation
>;
