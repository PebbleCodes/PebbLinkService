/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateShortLinkDataStore = /* GraphQL */ `subscription OnCreateShortLinkDataStore(
  $id: ID
  $user: String
  $short_link: String
  $short_description: String
  $long_description: String
) {
  onCreateShortLinkDataStore(
    id: $id
    user: $user
    short_link: $short_link
    short_description: $short_description
    long_description: $long_description
  ) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateShortLinkDataStoreSubscriptionVariables,
  APITypes.OnCreateShortLinkDataStoreSubscription
>;
export const onUpdateShortLinkDataStore = /* GraphQL */ `subscription OnUpdateShortLinkDataStore(
  $id: ID
  $user: String
  $short_link: String
  $short_description: String
  $long_description: String
) {
  onUpdateShortLinkDataStore(
    id: $id
    user: $user
    short_link: $short_link
    short_description: $short_description
    long_description: $long_description
  ) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateShortLinkDataStoreSubscriptionVariables,
  APITypes.OnUpdateShortLinkDataStoreSubscription
>;
export const onDeleteShortLinkDataStore = /* GraphQL */ `subscription OnDeleteShortLinkDataStore(
  $id: ID
  $user: String
  $short_link: String
  $short_description: String
  $long_description: String
) {
  onDeleteShortLinkDataStore(
    id: $id
    user: $user
    short_link: $short_link
    short_description: $short_description
    long_description: $long_description
  ) {
    id
    user
    short_link
    short_description
    long_description
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteShortLinkDataStoreSubscriptionVariables,
  APITypes.OnDeleteShortLinkDataStoreSubscription
>;
