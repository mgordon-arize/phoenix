/**
 * @generated SignedSource<<bb1d77197ecb892027e7df9a8167f18b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersCardQuery$variables = Record<PropertyKey, never>;
export type UsersCardQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UsersTable_users">;
};
export type UsersCardQuery = {
  response: UsersCardQuery$data;
  variables: UsersCardQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "UsersCardQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UsersTable_users"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "UsersCardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserConnection",
        "kind": "LinkedField",
        "name": "users",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "UserEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": "user",
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "username",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "createdAt",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserRole",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3f0bf033ced909f3b3bd00f99d0903fe",
    "id": null,
    "metadata": {},
    "name": "UsersCardQuery",
    "operationKind": "query",
    "text": "query UsersCardQuery {\n  ...UsersTable_users\n}\n\nfragment UsersTable_users on Query {\n  users {\n    edges {\n      user: node {\n        id\n        email\n        username\n        createdAt\n        role {\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};

(node as any).hash = "2b3e260c950dd1a6a1a6883ff6fb78c4";

export default node;
