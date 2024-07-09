/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateShortLinkDataStoreInput = {
  id: string,
  user: string,
  short_link: string,
  short_description?: string | null,
  long_description?: string | null,
};

export type ShortLinkDataStore = {
  __typename: "ShortLinkDataStore",
  id: string,
  user: string,
  short_link: string,
  short_description?: string | null,
  long_description?: string | null,
};

export type UpdateShortLinkDataStoreInput = {
  id: string,
  user?: string | null,
  short_link: string,
  short_description?: string | null,
  long_description?: string | null,
};

export type DeleteShortLinkDataStoreInput = {
  id: string,
  short_link: string,
};

export type TableShortLinkDataStoreFilterInput = {
  id?: TableIDFilterInput | null,
  user?: TableStringFilterInput | null,
  short_link?: TableStringFilterInput | null,
  short_description?: TableStringFilterInput | null,
  long_description?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ShortLinkDataStoreConnection = {
  __typename: "ShortLinkDataStoreConnection",
  items?:  Array<ShortLinkDataStore | null > | null,
  nextToken?: string | null,
};

export type CreateShortLinkDataStoreMutationVariables = {
  input: CreateShortLinkDataStoreInput,
};

export type CreateShortLinkDataStoreMutation = {
  createShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type UpdateShortLinkDataStoreMutationVariables = {
  input: UpdateShortLinkDataStoreInput,
};

export type UpdateShortLinkDataStoreMutation = {
  updateShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type DeleteShortLinkDataStoreMutationVariables = {
  input: DeleteShortLinkDataStoreInput,
};

export type DeleteShortLinkDataStoreMutation = {
  deleteShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type GetShortLinkDataStoreQueryVariables = {
  id: string,
  short_link: string,
};

export type GetShortLinkDataStoreQuery = {
  getShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type ListShortLinkDataStoresQueryVariables = {
  filter?: TableShortLinkDataStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListShortLinkDataStoresQuery = {
  listShortLinkDataStores?:  {
    __typename: "ShortLinkDataStoreConnection",
    items?:  Array< {
      __typename: "ShortLinkDataStore",
      id: string,
      user: string,
      short_link: string,
      short_description?: string | null,
      long_description?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateShortLinkDataStoreSubscriptionVariables = {
  id?: string | null,
  user?: string | null,
  short_link?: string | null,
  short_description?: string | null,
  long_description?: string | null,
};

export type OnCreateShortLinkDataStoreSubscription = {
  onCreateShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type OnUpdateShortLinkDataStoreSubscriptionVariables = {
  id?: string | null,
  user?: string | null,
  short_link?: string | null,
  short_description?: string | null,
  long_description?: string | null,
};

export type OnUpdateShortLinkDataStoreSubscription = {
  onUpdateShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};

export type OnDeleteShortLinkDataStoreSubscriptionVariables = {
  id?: string | null,
  user?: string | null,
  short_link?: string | null,
  short_description?: string | null,
  long_description?: string | null,
};

export type OnDeleteShortLinkDataStoreSubscription = {
  onDeleteShortLinkDataStore?:  {
    __typename: "ShortLinkDataStore",
    id: string,
    user: string,
    short_link: string,
    short_description?: string | null,
    long_description?: string | null,
  } | null,
};
