/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getShortLinkDataStore = /* GraphQL */ `query GetShortLinkDataStore($id: ID!, $short_link: String!) {
  getShortLinkDataStore(id: $id, short_link: $short_link) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetShortLinkDataStoreQueryVariables,
  APITypes.GetShortLinkDataStoreQuery
>;
export const listShortLinkDataStores = /* GraphQL */ `query ListShortLinkDataStores(
  $filter: TableShortLinkDataStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listShortLinkDataStores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      user
      short_link
      short_description
      long_description
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListShortLinkDataStoresQueryVariables,
  APITypes.ListShortLinkDataStoresQuery
>;
